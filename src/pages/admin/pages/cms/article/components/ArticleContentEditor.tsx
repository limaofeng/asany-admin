import { useCallback } from 'react';
import React from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import '@ckeditor/ckeditor5-build-balloon-block/build/translations/zh-cn';

interface ArticleContentEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  container: React.RefObject<HTMLDivElement>;
}

function ArticleContentEditor(props: ArticleContentEditorProps, editorRef: any) {
  const { container, value, onChange } = props;

  const handleReady = useCallback((editor: any) => {
    if (!editor?.ui) {
      return;
    }
    // 解决 BalloonBlockEditor 浮标滚动 BUG
    const body = editor.ui.view.body._bodyCollectionContainer;
    editor.ui.view.element = container.current;
    body.remove();
    editor.ui.view.element.appendChild(body);
    if (typeof editorRef == 'function') {
      editorRef(editor);
    } else if (editorRef.hasOwnProperty('current')) {
      editorRef.current = editor;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback((event: any, editor: any) => {
    const data = editor.getData();
    onChange && onChange(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CKEditor
      editor={BalloonBlockEditor}
      data={value}
      config={{
        language: 'zh-cn',
      }}
      onReady={handleReady}
      onChange={handleChange}
    />
  );
}

export default React.forwardRef(ArticleContentEditor);
