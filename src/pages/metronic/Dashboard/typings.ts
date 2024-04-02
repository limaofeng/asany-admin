import type { IGridItem } from '../GridLayout';

export interface IWidget extends IGridItem {
  id: string;
  component: string;
}
