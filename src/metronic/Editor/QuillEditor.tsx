import { useCallback, useEffect, useReducer, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';

import classnames from 'classnames';

import { useUpload } from '../hooks';
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

  const editorRef = useRef<ReactQuill | null>(null);
  const valueRef = useRef(props.value || '');
  const [, forceUpdate] = useReducer((s) => s + 1, 0);

  const [upload, {}] = useUpload({ space: 'XXTIeJCp' });

  const handleImageUpload = useCallback(() => {
    const editor = editorRef.current!.getEditor();

    const input = document.createElement('input') as HTMLInputElement;
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files![0];
      try {
        const fileData = await upload(file);
        const range = editor.getSelection()!;
        editor.insertEmbed(range.index, 'image', fileData.url);
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    };
  }, []);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }
    editorRef.current
      .getEditor()
      .getModule('toolbar')
      .addHandler('image', handleImageUpload);
  }, []);

  const handleChange = useCallback(
    (_value: string) => {
      onChange && onChange((valueRef.current = _value));
    },
    [onChange],
  );

  const handleTextChange = useCallback(
    function (e: React.ChangeEvent<HTMLTextAreaElement>) {
      onChange && onChange(e.target.value);
    },
    [onChange],
  );

  useEffect(() => {
    if (valueRef.current === props.value) {
      return;
    }
    valueRef.current = props.value || '';
    forceUpdate();
  }, [props.value]);

  if (mode === 'html') {
    return (
      <ReactQuill
        id="kt_inbox_form_editor"
        ref={editorRef}
        className={classnames('quill-zh_hans d-flex flex-column', className)}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ font: fontFamily }],
            [{ size: fontSize }],
            ['link', 'image'],
            [{ color: [] }, { background: [] }],
            [{ list: 'bullet' }, { list: 'ordered' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            ['clean'],
          ],
        }}
        placeholder={placeholder}
        theme={theme}
        value={valueRef.current}
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
