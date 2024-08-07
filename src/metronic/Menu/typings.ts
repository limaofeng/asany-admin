export interface MenuEvent {
  item: any;
  key: string;
  keyPath: string;
  domEvent: any;
}

export type OpenCallback = (openKeys: string[]) => void;

export type EventCallback<T extends MenuEvent> = (
  e: T,
) => Promise<void> | void | boolean;

export type ClickEvent = SelectEvent;

export interface SelectEvent extends MenuEvent {
  item: any;
  key: string;
  keyPath: string;
  selectedKeys: string[];
  domEvent: any;
  returnValue?: any;
}
