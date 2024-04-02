import AsideWorkspace from '../Aside/Secondary/AsideWorkspace';
import Navigation from '../Aside/Secondary/Navigation';
import CustomAsideSecondaryContent from '../CustomAsideSecondaryContent';

import type { Menu as MenuData } from '@/types';

function buildMenuRender(menu: MenuData) {
  if (menu.component) {
    return (
      <CustomAsideSecondaryContent menu={menu} component={menu.component} />
    );
  }
  return (
    <AsideWorkspace>
      <Navigation title={menu.name} menus={menu.routes!} />
    </AsideWorkspace>
  );
}

export default buildMenuRender;
