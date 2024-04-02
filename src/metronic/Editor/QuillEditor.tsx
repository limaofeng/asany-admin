import { useCallback, useRef } from 'react';

import classnames from 'classnames';
import ReactQuill, { Quill } from 'react-quill';

import Input from '../Input';

import './style/quill.scss';

const Size = Quill.import('attributors/style/size');
const Font = Quill.import('attributors/style/font');

const fontSize = [
  '9px',
  '10px',
  '11px',
  '12px',
  '13px',
  false,
  '16px',
  '18px',
  '24px',
  '36px',
  '48px',
  '64px',
  '72px',
  '96px',
  '144px',
  '288px',
];

Size.whitelist = fontSize;

const fontFamily = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  'pingfang',
];

Font.whitelist = fontFamily;

Quill.register(Size, true);
Quill.register(Font, true);

type QuillEditorProps = {
  mode?: 'html' | 'plain';
  value?: string;
  theme?: 'snow';
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

function QuillEditor(props: QuillEditorProps) {
  const {
    mode = 'html',
    onChange,
    placeholder = '输入正文',
    theme = 'snow',
    className,
  } = props;

  const valueRef = useRef(props.value || '');

  const handleChange = useCallback(
    (_value) => {
      onChange && onChange((valueRef.current = _value));
    },
    [onChange],
  );

  const handleTextChange = useCallback(
    function (e) {
      onChange && onChange(e.target.value);
    },
    [onChange],
  );

  if (mode == 'html') {
    return (
      <ReactQuill
        id="kt_inbox_form_editor"
        className={classnames('quill-zh_hans d-flex flex-column', className)}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ font: fontFamily }],
            [{ size: fontSize }],
            [{ color: [] }, { background: [] }],
            [{ list: 'bullet' }, { list: 'ordered' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            ['clean'],
          ],
        }}
        placeholder={placeholder}
        theme={theme}
        value={props.value || ''}
        onChange={handleChange}
      />
    );
  }
  return (
    <div id="kt_inbox_form_editor" className={classnames('px-3', className)}>
      <Input.TextArea
        bordered={false}
        value={props.value}
        onChange={handleTextChange}
        className="editor_mode_text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default QuillEditor;
