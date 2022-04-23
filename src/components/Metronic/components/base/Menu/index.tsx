import type { MenuProps } from './Menu';
import { internalMenu as InternalMenu } from './Menu';
import MenuItem, { MenuSection } from './MenuItem';
import MenuSeparator from './MenuSeparator';
import SubMenu from './SubMenu';

InternalMenu.Section = MenuSection;
InternalMenu.SubMenu = SubMenu;
InternalMenu.Item = MenuItem;
InternalMenu.Separator = MenuSeparator;

export interface MenuComponent
  extends React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement | null>> {
  Section: typeof MenuSection;
  SubMenu: typeof SubMenu;
  Item: typeof MenuItem;
  Separator: typeof MenuSeparator;
}

export const Menu = InternalMenu as MenuComponent;
