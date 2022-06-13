import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { BalloonBlockEditor, ClassicEditor } from '@asany/ckeditor5';
import { CKEditor } from '@ckeditor/ckeditor5-react';

export type EditorStyle = 'ClassicEditor' | 'BalloonBlockEditor';

type IWordCount = {
  characters: number;
  words: number;
};

interface ArticleContentEditorProps {
  value?: string;
  editor?: EditorStyle;
  onChange?: (value: string) => void;
  onWordCount?: (wordCount: IWordCount) => void;
  container: React.RefObject<HTMLDivElement>;
}

const CKEditorWrapper = React.forwardRef(function CKEditorWrapper(
  props: ArticleContentEditorProps,
  editorRef: any,
) {
  const { onWordCount, container, value, onChange, editor: editorStyle = 'BalloonBlock' } = props;
  const temp = useRef(value);

  temp.current = value;

  const editorType = useMemo(() => {
    if (editorStyle == 'BalloonBlockEditor') {
      return BalloonBlockEditor;
    }
    if (editorStyle == 'ClassicEditor') {
      return ClassicEditor;
    }
  }, [editorStyle]);

  const handleReady = useCallback((editor: any) => {
    if (!editor?.ui) {
      return;
    }
    const wordCountPlugin = editor.plugins.get('WordCount');
    onWordCount && onWordCount(wordCountPlugin);
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
    if (data == temp.current) {
      return;
    }
    if (!temp.current && !data) {
      return;
    }
    const wordCountPlugin = editor.plugins.get('WordCount');
    onWordCount && onWordCount(wordCountPlugin);
    onChange && onChange(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CKEditor
      editor={editorType}
      data={value}
      config={{
        language: 'zh-cn',
      }}
      onReady={handleReady}
      onChange={handleChange}
    />
  );
});

function ArticleContentEditor(props: ArticleContentEditorProps, editorRef: any) {
  const { editor: editorStyle = 'BalloonBlockEditor' } = props;
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    setSwitching(true);
    const timer = setTimeout(() => {
      setSwitching(false);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [editorStyle]);

  if (switching) {
    return <div>switching...</div>;
  }

  if (editorStyle == 'BalloonBlockEditor' || editorStyle == 'ClassicEditor') {
    return <CKEditorWrapper {...props} ref={editorRef} />;
  }

  return <div>未实现编辑器: {editorStyle}</div>;
}

const ArticleContentEditorForwardRef = React.forwardRef(ArticleContentEditor);

export default ArticleContentEditorForwardRef;
