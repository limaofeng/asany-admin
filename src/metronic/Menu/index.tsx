import type { MenuProps } from './Menu';
import { internalMenu as InternalMenu } from './Menu';
import MenuItem, { MenuContent, MenuSection } from './MenuItem';
import MenuSeparator from './MenuSeparator';
import SubMenu from './SubMenu';

InternalMenu.Section = MenuSection;
InternalMenu.Content = MenuContent;
InternalMenu.SubMenu = SubMenu;
InternalMenu.Item = MenuItem;
InternalMenu.Separator = MenuSeparator;

export interface MenuComponent
  extends React.ForwardRefExoticComponent<
    MenuProps & React.RefAttributes<HTMLDivElement | null>
  > {
  Section: typeof MenuSection;
  Content: typeof MenuContent;
  SubMenu: typeof SubMenu;
  Item: typeof MenuItem;
  Separator: typeof MenuSeparator;
}

export default InternalMenu as MenuComponent;
