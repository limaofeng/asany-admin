import Navigation from '../../Aside/Secondary/Navigation';

import CustomAsideSecondaryContent from './CustomAsideSecondaryContent';

import type { MenuData } from '@/.umi/app/typings';

export default function buildMenuRender(menu: MenuData) {
  if (menu.component) {
    return <CustomAsideSecondaryContent menu={menu} component={menu.component} />;
  }
  return <Navigation title={menu.name} menus={menu.children!} />;
}
