import { useCallback, useEffect, useState } from 'react';

import { QuillEditor } from '@/metronic';
import { TextContent as ITextContent, TextContentType } from '@/types';

type TextContentData = Omit<ITextContent, 'id'>;

type TextContentProps = {
  value?: TextContentData;
  onChange?: (value: TextContentData) => void;
};

function TextContent(props: TextContentProps) {
  const { value, onChange } = props;

  const [textType, setTextType] = useState<TextContentType>(
    TextContentType.Html,
  );

  useEffect(() => {
    setTextType(value?.type || TextContentType.Html);
  }, [value]);

  const handleChange = useCallback(
    (value: string) => {
      onChange && onChange({ text: value, type: textType });
    },
    [value],
  );

  return (
    <div>
      <QuillEditor
        value={value?.text || ''}
        onChange={handleChange}
        className="h-300px"
      />
    </div>
  );
}

export default TextContent;
