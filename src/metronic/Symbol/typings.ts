import type Badge from '../Badge';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Sizes =
  | 20
  | 25
  | 30
  | 35
  | 40
  | 45
  | 50
  | 55
  | 60
  | 65
  | 70
  | 75
  | 100
  | 125
  | 150
  | 160
  | 175
  | 200;

export type SymbolSize = Sizes | Record<Breakpoint, Sizes>;

export type AvatarProps = {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  shape?: 'circle' | 'square';
  size?: SymbolSize;
  src?: string | React.ReactNode;
  alt?: string | React.ReactNode;
  gap?: number;
  labelClassName?: string;
  badge?: React.ReactElement<typeof Badge>;
};

export type SymbolProps = AvatarProps;
