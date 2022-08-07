import { useEffect, useRef, useState } from 'react';

import { Icon } from '@asany/icons';
import type { ConversationItem, MessageItem } from 'open-im-sdk/types';
import { useLatest } from 'ahooks';

import type { ContentEditableEvent } from '../../ContentEditable/ContentEditable';
import ContentEditable from '../../ContentEditable/ContentEditable';

import { Button, Tooltip } from '@/metronic';
import { messageTypes } from '@/utils/open-im/constants/messageContentType';
import { base64toFile, contenteditableDivRange, move2end } from '@/utils/open-im/utils/common';
import { isSingleCve } from '@/utils/open-im/utils/im';
import { im } from '@/models/open-im/auth';
import events from '@/utils/open-im/events';
import { ATSTATEUPDATE, ISSETDRAFT } from '@/utils/open-im/constants/events';

type AtItem = {
  id: string;
  name: string;
  tag: string;
};

const blobToDataURL = (blob: File, cb: (base64: string) => void) => {
  const reader = new FileReader();
  reader.onload = function (evt) {
    const base64 = evt.target?.result;
    cb(base64 as string);
  };
  reader.readAsDataURL(blob);
};

const parseImg = (_text: string) => {
  let text = _text;
  const pattern = /\<img.*?\">/g;
  const patternArr = text.match(pattern);

  if (patternArr && patternArr.length > 0) {
    patternArr.map((img) => {
      text = text.replaceAll(img, '');
    });
  }

  return text;
};

const parseEmojiFace = (_text: string) => {
  let text = _text;
  const faceEls = [...Array.from(document.getElementsByClassName('face_el'))] as HTMLImageElement[];
  if (faceEls.length > 0) {
    faceEls.map((face) => {
      text = text.replaceAll(face.outerHTML, face.alt);
    });
  }
  return text;
};

const parseBr = (_mstr: string) => {
  let mstr = _mstr;
  if (mstr.slice(-4) === '<br>') {
    mstr = mstr.slice(0, -4);
  }
  mstr = mstr.replaceAll('<br>', '\n');
  return mstr;
};

const forEachImgMsg = () => {
  const screenshotEls = [
    ...Array.from(document.getElementsByClassName('screenshot_el')),
  ] as HTMLImageElement[];
  if (screenshotEls.length > 0) {
    screenshotEls[screenshotEls.length - 1].alt = 'last';
    screenshotEls.map(async (snel) => {
      const item = base64toFile(snel.src);
      console.log(item);
      // await getCosAuthorization();
      // const { url } = await cosUploadNomal(item);
      // await suffixRef.current.sendImageMsg(item, url);
      // if (snel.alt === 'last') {
      //   reSet();
      // }
    });
  }
};

type ChatFooterProps = {
  curCve: ConversationItem;
  sendMsg: (nMsg: string, type: messageTypes, uid?: string, gid?: string) => void;
};

function ChatFooter(props: ChatFooterProps) {
  const { curCve, sendMsg } = props;

  const timer = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<any>(null);

  const [msgContent, setMsgContent] = useState<string>('');
  const latestContent = useLatest(msgContent);
  const [replyMsg, setReplyMsg] = useState<MessageItem>();
  const [atList, setAtList] = useState<AtItem[]>([]);
  const [flag, setFlag] = useState(false);
  const latestFlag = useLatest(flag);

  const atHandler = (id: string, name: string) => {
    if (replyMsg) {
      setReplyMsg(undefined);
    }
    if (atList.findIndex((au) => au.id === id) === -1) {
      const tag = `<b class="at_el" data_id="${id}" data_name="${name}" contenteditable="false" style="color:#428be5"> @${name}</b>`;
      setAtList([...atList, { id, name, tag }]);
      setMsgContent(latestContent.current + tag);
      move2end(inputRef.current!.el);
    }
  };

  const updateTypeing = (recvID: string, msgTip: string) => {
    im.typingStatusUpdate({ recvID, msgTip });
  };

  const typing = () => {
    if (isSingleCve(curCve)) {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        updateTypeing(curCve.userID, 'yes');
      }, 2000);
    }
  };

  const textInit = async (e: any) => {
    const clp = (e.originalEvent || e).clipboardData;
    if (clp && clp.items[0].type.indexOf('image') === -1) {
      e.preventDefault();
      const text = clp.getData('text/plain') || '';
      document.execCommand('insertText', false, text);
    } else if (clp && clp.items[0].type.indexOf('image') > -1) {
      e.preventDefault();
      const file = clp.items[0].getAsFile();
      blobToDataURL(file, (base64) => {
        const img = `<img style="vertical-align:bottom" class="screenshot_el" src="${base64}" alt="" >`;
        document.execCommand('insertHTML', false, img);
      });
    }
  };

  const parseAt = (_text: string) => {
    let text = _text;
    atList.map((at) => {
      text = text.replaceAll(at.tag, `@${at.id} `);
    });
    return text;
  };

  const setDraft = (cve: ConversationItem) => {
    if (cve.draftText !== '' || latestContent.current !== '') {
      let text = latestContent.current;
      text = parseEmojiFace(text);
      // text = parseImg(text).text;
      const option = {
        conversationID: cve.conversationID,
        draftText: atList.length > 0 ? parseAt(text) : text,
      };

      im.setConversationDraft(option)
        .then((res) => {
          console.warn(res);
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => setMsgContent(''));
    }
  };

  const reSet = () => {
    setMsgContent('');
    setReplyMsg(undefined);
    setAtList([]);
    setFlag(false);
    setDraft(curCve);
  };

  const sendTextMsg = async (text: string) => {
    const { data } = await im.createTextMessage(text);
    // im.insertGroupMessageToLocalStorage({
    //   message: data,
    //   groupID: curCve.groupID,
    //   sendID: "17396220460",
    // }).then((res) => console.log(JSON.parse(res.data)));
    sendMsg(data, messageTypes.TEXTMESSAGE);
    reSet();
  };

  const sendAtTextMsg = async (text: string) => {
    const options = {
      text,
      atUserIDList: atList.map((au) => au.id),
    };
    const { data } = await im.createTextAtMessage(options);
    sendMsg(data, messageTypes.ATTEXTMESSAGE);
    reSet();
  };

  const quoteMsg = async (text: string) => {
    const { data } = await im.createQuoteMessage({ text, message: JSON.stringify(replyMsg) });
    sendMsg(data, messageTypes.QUOTEMESSAGE);
    reSet();
  };

  const switchMessage = (type: string) => {
    let text = latestContent.current;
    text = parseImg(parseEmojiFace(text));
    text = parseBr(text);
    forEachImgMsg();
    if (text === '') return;
    switch (type) {
      case 'text':
        sendTextMsg(text);
        break;
      case 'at':
        sendAtTextMsg(parseAt(text));
        break;
      case 'quote':
        quoteMsg(text);
        break;
      default:
        break;
    }
  };

  const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      contenteditableDivRange();
      move2end(inputRef.current!.el);
    }
    if (e.key === 'Enter' && !e.ctrlKey) {
      e.preventDefault();
      if (latestContent.current && !latestFlag.current) {
        setFlag(true);
        switchMessage(replyMsg ? 'quote' : atList.length > 0 ? 'at' : 'text');
      }
    }
  };

  const onChange = (e: ContentEditableEvent) => {
    setMsgContent(e.target.value);
    const atels = [...Array.from(document.getElementsByClassName('at_el'))];
    const tmpAts: any = [];
    atels.map((at) =>
      tmpAts.push({
        id: at.attributes.getNamedItem('data_id')?.value,
        name: at.attributes.getNamedItem('data_name')?.value,
        tag: at.outerHTML,
      }),
    );
    setAtList(tmpAts);
    typing();
  };

  useEffect(() => {
    events.on(ATSTATEUPDATE, atHandler);
    events.on(ISSETDRAFT, setDraft);
    return () => {
      events.off(ATSTATEUPDATE, atHandler);
      events.off(ISSETDRAFT, setDraft);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atList]);

  return (
    <div className="pt-2 ps-2 h-100 d-flex flex-column">
      <div className="d-flex flex-row mb-2">
        <Tooltip placement="bottom" trigger="click" inverse title="表情">
          <Button
            variant={false}
            icon={<Icon name="Bootstrap/emoji-smile" className="svg-icon-2" />}
            activeColor="secondary"
            className="me-1"
          />
        </Tooltip>
        <Tooltip placement="bottom" inverse title="发送名片">
          <Button
            variant={false}
            icon={<Icon name="Bootstrap/person-badge" className="svg-icon-2" />}
            activeColor="secondary"
            className="me-1"
          />
        </Tooltip>
        <Tooltip placement="bottom" inverse title="发送文件">
          <Button
            variant={false}
            icon={<Icon name="Bootstrap/folder-plus" className="svg-icon-2" />}
            activeColor="secondary"
            className="me-1"
          />
        </Tooltip>
        <Tooltip placement="bottom" inverse title="发送图片">
          <Button
            variant={false}
            icon={<Icon name="Bootstrap/card-image" className="svg-icon-2" />}
            activeColor="secondary"
            className="me-1"
          />
        </Tooltip>
        <Tooltip placement="bottom" inverse title="发送视频">
          <Button
            variant={false}
            icon={<Icon name="Bootstrap/film" className="svg-icon-2" />}
            activeColor="secondary"
            className="me-1"
          />
        </Tooltip>
      </div>
      <div className="ps-3 flex-row-fluid position-relative">
        <ContentEditable
          style={{ paddingTop: replyMsg ? '32px' : '4px' }}
          placeholder={`SendTo ${curCve.showName}`}
          ref={inputRef}
          html={msgContent}
          onChange={onChange}
          onKeyDown={keyDown}
          onPaste={textInit}
        />
        <div className="chat-msg-actions d-flex flex-row position-absolute">
          <div className="d-flex flex-row align-items-center fs-10 text-gray-500 me-6">
            <Icon name="Bootstrap/arrow-return-left" className="svg-icon-7 me-2" /> 发送
            <span className="mx-3">/</span>
            <Icon name="Bootstrap/command" className="svg-icon-7 me-2" /> 换行
          </div>
          <Button className="px-5">发送</Button>
        </div>
      </div>
    </div>
  );
}

export default ChatFooter;
