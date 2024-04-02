import { useCallback, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import data, { Emoji as EmojiData } from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { Emoji } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';

import { handleBackgroundImage } from '../utils';

import { Button, Checkbox, Input, Modal, Popover, Select } from '@/metronic';

const i18n = {
  search: '搜索',
  clear: '清除',
  categories: {
    search: '搜索结果',
    recent: '常用的',
    smileys: '笑脸 & 情绪',
    people: '人们 & 身体',
    nature: '动物 & 自然',
    foods: '食物 & 饮料',
    activity: '活动',
    places: '旅行 & 地点',
    objects: '物品',
    symbols: '符号',
    flags: '旗帜',
    custom: '其他',
  },
};

interface EditStatusModalProps {
  visible: boolean;
  onClose: () => void;
}

function EditStatusModal(props: EditStatusModalProps) {
  const { visible, onClose } = props;

  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [emoji, setEmoji] = useState('');

  const handleCancel = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleEmojiChange = useCallback(
    (_emoji: EmojiData) => {
      console.log('emoji', _emoji.id);
      setEmoji(_emoji.id!);
      setEmojiPickerVisible(false);
    },
    [setEmojiPickerVisible],
  );

  const icon = useMemo(() => {
    if (!emoji) {
      return <Icon name="Bootstrap/emoji-smile" />;
    }
    return (
      <Emoji
        emoji={emoji}
        backgroundImageFn={handleBackgroundImage}
        size={20}
      />
    );
  }, [emoji]);

  return (
    <Modal
      dialogClassName="user-status-modal"
      title="设置状态"
      footer={false}
      onCancel={handleCancel}
      visible={visible}
      bodyClassName="p-0"
    >
      <div className="px-7 pt-7 pb-4 border-bottom">
        <div className="user-status-form-group input-group input-group-sm mb-5">
          <span className="input-group-text">
            <Popover
              placement="bottom-start"
              visible={emojiPickerVisible}
              onVisibleChange={setEmojiPickerVisible}
              overlayClassName="overlay-zero-gap emoji-mart-picker"
              content={
                <Picker
                  color="#04c8c8"
                  set="apple"
                  data={data}
                  onSelect={handleEmojiChange}
                  showPreview={false}
                  showSkinTones={false}
                  i18n={i18n}
                  backgroundImageFn={handleBackgroundImage}
                />
              }
            >
              <Button variant="light" icon={icon} />
            </Popover>
          </span>
          <Input type="text" placeholder="在忙什么" className="form-control" />
        </div>
        <div className="user-status-limited-availability">
          <Checkbox size="sm" label="忙碌" />
          <span className="note">接收到新的消息通知,不在提醒</span>
        </div>
      </div>
      <div className="user-status-settings p-7">
        <span>截止时间</span>
        <Select
          className="user-status-expire"
          size="sm"
          options={[{ value: 'Never', label: '从不' }]}
        />
        <span>对谁可见</span>

        <Select
          className="user-status-org"
          size="sm"
          options={[{ value: 'Everyone', label: '所有人' }]}
        />
      </div>
      <div className="user-status-actions p-7 border-top">
        <Button className="rounded-2">设置状态</Button>
        <Button className="rounded-2" variant="light">
          清除状态
        </Button>
      </div>
    </Modal>
  );
}

export default EditStatusModal;
