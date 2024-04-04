import type { Menu as MenuData } from '@/types';

import AsideWorkspace from '../Aside/Secondary/AsideWorkspace';
import Navigation from '../Aside/Secondary/Navigation';
import CustomAsideSecondaryContent from '../CustomAsideSecondaryContent';

function buildMenuRender(menu: MenuData) {
  if (menu.component) {
    return (
      <CustomAsideSecondaryContent menu={menu} component={menu.component} />
    );
  }
  return (
    <AsideWorkspace>
      <Navigation title={menu.name!} menus={menu.children!} />
    </AsideWorkspace>
  );
}

export default buildMenuRender;
