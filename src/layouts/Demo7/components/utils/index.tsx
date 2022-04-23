import CustomAsideSecondaryContent from '../CustomAsideSecondaryContent';
import Navigation from '../Aside/Secondary/Navigation';
import AsideWorkspace from '../Aside/Secondary/AsideWorkspace';

import type { MenuData } from '@/.umi/app/typings';

function buildMenuRender(menu: MenuData) {
  if (menu.component) {
    return <CustomAsideSecondaryContent menu={menu} component={menu.component} />;
  }
  return (
    <AsideWorkspace>
      <Navigation title={menu.name} menus={menu.routes!} />
    </AsideWorkspace>
  );
}

export default buildMenuRender;
