import classnames from 'classnames';

import type { SeparatorProps } from '../Separator';
import Separator from '../Separator';

type MenuSeparatorProps = SeparatorProps;

function MenuSeparator(props: MenuSeparatorProps) {
  const { className, ...separatorProps } = props;
  return <Separator {...separatorProps} className={classnames(className)} />;
}

export default MenuSeparator;
