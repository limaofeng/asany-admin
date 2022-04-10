import { useReactComponent } from 'sunmao';

import type { MenuData, NuwaComponent } from '@/.umi/app/typings';

type CustomTabContentProps = {
  menu: MenuData;
  component: NuwaComponent;
};

function CustomAsideSecondaryContent(props: CustomTabContentProps) {
  const { component } = props;
  const ReactComponent = useReactComponent(component.template, component.blocks);
  return <ReactComponent />;
}

export default CustomAsideSecondaryContent;
