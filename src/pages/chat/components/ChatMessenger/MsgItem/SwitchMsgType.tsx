import type { CSSProperties, FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Map, Marker } from 'react-amap';

import { useModel } from '@umijs/max';
import { Image } from 'antd';
import moment from 'moment';
import { ConversationItem, MergeElem, MessageItem } from 'open-im-sdk-wasm/lib/types/entity';

import { Symbol, Tooltip } from '@/metronic';
import { isSingleCve } from '@/models/open-im/utils';
import events from '@/models/open-im/utils/events';

import my_voice from '../../../assets/images/voice_my.png';
import other_voice from '../../../assets/images/voice_other.png';
import VideoPlayer from '../../../components/VideoPlayer';

// import { isSingleCve } from '@/utils/open-im/utils/im';
// import { messageTypes } from '@/utils/open-im/constants/messageContentType';
// import { faceMap } from '@/utils/open-im/constants/faceType';
// import events from '@/utils/open-im/events';
// import { bytesToSize, switchFileIcon } from '@/utils/open-im/utils/common';
// import { MERMSGMODAL } from '@/utils/open-im/constants/events';

type SwitchMsgTypeProps = {
  msg: MessageItem;
  audio: React.RefObject<HTMLAudioElement>;
  curCve: ConversationItem;
  selfID: string;
  // imgClick: (el: PictureElem) => void;
};

const SwitchMsgType: FC<SwitchMsgTypeProps> = ({
  msg,
  audio,
  curCve,
  selfID,
}) => {
  const [isSingle, setIsSingle] = useState(false);
  const groupMemberList = useModel(
    'open-im.contacts',
    ({ state }) => state.groupMemberList,
  );
  const textRef = useRef<HTMLDivElement>(null);

  const [sty, setSty] = useState<CSSProperties>({});
  const playerRef = useRef<any>();

  useEffect(() => {
    if (curCve) {
      setIsSingle(isSingleCve(curCve));
    } else {
      setIsSingle(false);
    }
    if ((textRef.current?.clientHeight as number) > 60) {
      setSty({
        paddingBottom: '16px',
        paddingRight: '8px',
      });
    }
  }, [curCve]);

  const isSelf = (sendID: string): boolean => {
    return selfID === sendID;
  };

  const parseTime = (type: 0 | 1) => {
    return moment(msg.sendTime).format(type ? 'HH:mm' : 'YYYY-MM-DD HH:mm');
  };

  const merClick = (el: MergeElem, sender: string) => {
    events.emit(MERMSGMODAL, el, sender);
  };

  const timeTip = (className: string = 'chat_bg_msg_content_time') => (
    <Tooltip placement="bottom" inverse title={parseTime(0)}>
      <div className={className}>{parseTime(1)}</div>
    </Tooltip>
  );

  const parseEmojiFace = (mstr: string) => {
    let _mstr = mstr;
    faceMap.map((f) => {
      const idx = _mstr.indexOf(f.context);
      if (idx > -1) {
        _mstr = _mstr.replaceAll(
          f.context,
          `<img style="padding-right:2px" width="24px" src=${f.src} />`,
        );
      }
    });
    return _mstr;
  };

  const parseAt = (_mstr: string) => {
    let mstr = _mstr;
    const pattern = /@\S+\s/g;
    const arr = mstr.match(pattern);
    arr?.map((a) => {
      const member = groupMemberList.find((gm) => gm.userID === a.slice(1, -1));
      if (member) {
        mstr = mstr.replaceAll(
          a,
          `<span onclick='userClick("${member.userID.replace(
            '.',
            '-',
          )}")' style="color:#428be5;cursor: pointer;"> @${
            member.nickname
          } </span>`,
        );
      } else {
        mstr = mstr.replaceAll(
          a,
          `<span onclick="userClick('${a.slice(
            1,
            -1,
          )}')" style="color:#428be5;cursor: pointer;"> ${a}</span>`,
        );
      }
    });
    return mstr;
  };

  const parseBr = (mstr: string) => {
    const text = mstr.replaceAll('\\n', '<br>');
    return text.replaceAll('\n', '<br>');
  };

  const parseUrl = (_mstr: string) => {
    let mstr = _mstr;
    const pattern =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:._\+-~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:_\+.~#?&\/\/=]*)/g;
    const arr = mstr.match(pattern);
    arr?.map((a) => {
      mstr = mstr.replaceAll(
        a,
        `<a onclick="urlClick('${a}')" href="javascript:;">${a}</a>`,
      );
    });
    return mstr;
  };

  const parseQute = (quMsg: MessageItem) => {
    switch (quMsg.contentType as number) {
      case messageTypes.TEXTMESSAGE:
        const parsedMsg = parseBr(
          parseUrl(parseAt(parseEmojiFace(quMsg.content))),
        );
        return (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: parsedMsg }}
          />
        );
      case messageTypes.ATTEXTMESSAGE:
        return parseAt(quMsg.atElem.text);
      case messageTypes.PICTUREMESSAGE:
        return <Image width={60} src={quMsg.pictureElem.sourcePicture.url} />;
      default:
        return '';
    }
  };

  const playVoice = (url: string) => {
    audio.current!.src = url;
    audio.current?.play();
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  const msgType = () => {
    // console.log('msgType', msgType);
    switch (msg.contentType as number) {
      case messageTypes.TEXTMESSAGE:
        let mstr = msg.content;
        mstr = parseEmojiFace(mstr);
        mstr = parseUrl(mstr);
        mstr = parseBr(mstr);
        return (
          <>
            <div
              ref={textRef}
              style={sty}
              className={`chat_bg_msg_content_text ${
                !isSingle ? 'nick_magin' : ''
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: mstr }} />
            </div>
            {timeTip()}
          </>
        );
      case messageTypes.ATTEXTMESSAGE:
        let atMsg = msg.atElem.text;
        atMsg = parseEmojiFace(atMsg);
        atMsg = parseAt(atMsg);
        atMsg = parseUrl(atMsg);
        atMsg = parseBr(atMsg);
        return (
          <div
            style={sty}
            className={`chat_bg_msg_content_text ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <div
              style={{ display: 'inline-block' }}
              dangerouslySetInnerHTML={{ __html: atMsg }}
            />
            {timeTip()}
          </div>
        );
      case messageTypes.PICTUREMESSAGE:
        return (
          <div
            className={`chat_bg_msg_content_pic ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <Image
              placeholder={true}
              // width={200}
              height={200}
              src={
                msg.pictureElem.snapshotPicture.url ??
                msg.pictureElem.sourcePicture.url
              }
              preview={{ visible: false }}
              // onClick={() => imgClick(msg.pictureElem)}
              fallback="data:image/png;base64,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"
            />
            {timeTip('pic_msg_time')}
          </div>
        );
      case messageTypes.VOICEMESSAGE:
        const isSelfMsg = isSelf(msg.sendID);
        const imgStyle = isSelfMsg
          ? { paddingLeft: '4px' }
          : { paddingRight: '4px' };
        const imgSrc = isSelfMsg ? my_voice : other_voice;
        return (
          <div
            style={sty}
            className={`chat_bg_msg_content_text chat_bg_msg_content_voice ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <div
              style={{ flexDirection: isSelfMsg ? 'row-reverse' : 'row' }}
              onClick={() => playVoice(msg.soundElem.sourceUrl)}
            >
              <img style={imgStyle} src={imgSrc} alt="" />
              {`${msg.soundElem.duration} ''`}
            </div>
            {timeTip()}
          </div>
        );
      case messageTypes.FILEMESSAGE:
        const fileEl = msg.fileElem;
        const suffix = fileEl.fileName.slice(
          fileEl.fileName.lastIndexOf('.') + 1,
        );
        return (
          <div
            className={`chat_bg_msg_content_text chat_bg_msg_content_file ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <div className="file_container">
              <img src={switchFileIcon(suffix)} alt="" />
              <div className="file_info">
                <div>{fileEl.fileName}</div>
                <div>{bytesToSize(fileEl.fileSize)}</div>
              </div>
            </div>
            {timeTip()}
          </div>
        );
      case messageTypes.VIDEOMESSAGE:
        const videoJsOptions = {
          width: 240,
          controls: true,
          playbackRates: [0.5, 1, 1.25, 1.5, 2],
          responsive: true,
          fluid: true,
          sources: [
            {
              src: msg.videoElem.videoUrl,
              type: 'video/mp4',
            },
          ],
        };
        return (
          <div
            className={`chat_bg_msg_content_video ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
            {/* <video className="video-js" data-setup='{}' controls src={msg.videoElem.videoUrl} /> */}
            {timeTip('video_msg_time')}
          </div>
        );
      case messageTypes.QUOTEMESSAGE:
        const quMsg = msg.quoteElem.quoteMessage;
        let replyMsg = msg.quoteElem.text;

        // let quoteMsg = quMsg.contentType === messageTypes.ATTEXTMESSAGE ?  : quMsg.content;

        replyMsg = parseBr(parseUrl(parseEmojiFace(replyMsg)));
        return (
          <div
            style={sty}
            className={`chat_bg_msg_content_text chat_bg_msg_content_qute ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <div className="qute_content">
              <div>{`${
                'Reply' + msg.quoteElem.quoteMessage.senderNickname
              }:`}</div>
              {parseQute(quMsg)}
            </div>
            <div dangerouslySetInnerHTML={{ __html: replyMsg }} />
            {timeTip()}
          </div>
        );
      case messageTypes.MERGERMESSAGE:
        const merEl = msg.mergeElem;
        return (
          <div
            style={sty}
            onClick={() => merClick(merEl, msg.sendID)}
            className={`chat_bg_msg_content_text chat_bg_msg_content_mer ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <div className="title">{merEl.title}</div>
            <div className="content">
              {merEl.abstractList?.map((m) => (
                <div key={m} className="item">
                  {m}
                </div>
              ))}
            </div>
            {timeTip()}
          </div>
        );
      case messageTypes.CARDMESSAGE:
        const ctx = JSON.parse(msg.content);
        return (
          <div
            // onClick={() => window.userClick(ctx.userID)}
            style={sty}
            className={`chat_bg_msg_content_text chat_bg_msg_content_card ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <div className="title">{'IDCard'}</div>
            <div className="desc">
              <Symbol.Avatar src={ctx.faceURL} size={35} />
              <div className="card_nick">{ctx.nickname}</div>
            </div>
            {timeTip()}
          </div>
        );
      case messageTypes.LOCATIONMESSAGE:
        const locationEl = msg.locationElem;
        const postion = {
          longitude: locationEl.longitude,
          latitude: locationEl.latitude,
        };
        return (
          <div
            className={`chat_bg_msg_content_map ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            <Map
              protocol="https"
              center={postion}
              amapkey="dcdc861728801ee3410f67f6a487d3fa"
            >
              <Marker position={postion} />
            </Map>
            {timeTip('pic_msg_time')}
          </div>
        );
      default:
        return (
          <div
            className={`chat_bg_msg_content_text ${
              !isSingle ? 'nick_magin' : ''
            }`}
          >
            {'UnsupportedMessage'}
          </div>
        );
    }
  };

  return msgType();
};

export default SwitchMsgType;
