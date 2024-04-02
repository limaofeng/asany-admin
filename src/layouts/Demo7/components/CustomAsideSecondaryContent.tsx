import { useReactComponent } from '@asany/sunmao';

import type { Menu as MenuData, Component as NuwaComponent } from '@/types';

type CustomTabContentProps = {
  menu: MenuData;
  component: NuwaComponent;
};

function CustomAsideSecondaryContent(props: CustomTabContentProps) {
  const { menu, component } = props;
  // console.log('component', component);
  const ReactComponent: any = useReactComponent<{ menu: MenuData }>(
    component.template,
    component.blocks,
  );
  return <ReactComponent menu={menu} />;
}

export default CustomAsideSecondaryContent;
