import CustomAsideSecondaryContent from '../CustomAsideSecondaryContent';
import Navigation from '../Aside/Secondary/Navigation';
import AsideWorkspace from '../Aside/Secondary/AsideWorkspace';

import type { MenuData } from '@/.umi/app/typings';

export default function buildMenuRender(menu: MenuData) {
  if (menu.component) {
    return <CustomAsideSecondaryContent menu={menu} component={menu.component} />;
  }
  return (
    <AsideWorkspace>
      <Navigation title={menu.name} menus={menu.children!} />
    </AsideWorkspace>
  );
}
