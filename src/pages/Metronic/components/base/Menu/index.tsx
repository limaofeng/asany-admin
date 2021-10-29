import type { MenuProps } from './Menu';
import { internalMenu as Menu } from './Menu';
import MenuItem, { MenuSection } from './MenuItem';
import SubMenu from './SubMenu';

Menu.Section = MenuSection;
Menu.SubMenu = SubMenu;
Menu.Item = MenuItem;

interface MenuComponent
  extends React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement | null>> {
  Section: typeof MenuSection;
  SubMenu: typeof SubMenu;
  Item: typeof MenuItem;
}

export default Menu as MenuComponent;
