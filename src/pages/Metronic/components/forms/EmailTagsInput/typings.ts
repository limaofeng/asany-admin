export type EmailTagData = {
  id: string;
  name: string;
  address: string;
  invalid?: boolean;
};

export type EmailTagEditingProps = {
  value?: string;
  index: number;
  locationTo: (index: number, type?: 'input' | 'view') => void;
  onChange: (value: string) => void;
  onPrev: () => void;
  onNext: () => void;
  onDelete: () => void;
};

export type EmailTagEditingRef = {
  focus: () => void;
  select: () => void;
  setValue: (value: string) => void;
};
