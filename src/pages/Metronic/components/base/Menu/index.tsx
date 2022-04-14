import type { MenuProps } from './Menu';
import { internalMenu as Menu } from './Menu';
import MenuItem, { MenuSection } from './MenuItem';
import MenuSeparator from './MenuSeparator';
import SubMenu from './SubMenu';

Menu.Section = MenuSection;
Menu.SubMenu = SubMenu;
Menu.Item = MenuItem;
Menu.Separator = MenuSeparator;

export interface MenuComponent
  extends React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement | null>> {
  Section: typeof MenuSection;
  SubMenu: typeof SubMenu;
  Item: typeof MenuItem;
  Separator: typeof MenuSeparator;
}

export default Menu as MenuComponent;
