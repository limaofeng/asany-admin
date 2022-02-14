export type OptionData = {
  label?: string;
  value?: string;
  type?: 'value' | 'separator';
  children?: OptionData[];
  [key: string]: any;
};

export type OptionItemRender = (
  option: OptionData,
  display?: boolean,
) => React.ReactNode | string | undefined;
