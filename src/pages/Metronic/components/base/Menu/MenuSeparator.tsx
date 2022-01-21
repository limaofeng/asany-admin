import type { SeparatorProps } from '../Separator';
import { Separator } from '../Separator';

type MenuSeparatorProps = SeparatorProps;

function MenuSeparator(props: MenuSeparatorProps) {
  const { ...separatorProps } = props;
  return (
    <div className="menu-item">
      <div className="menu-content">
        <Separator {...separatorProps} />
      </div>
    </div>
  );
}

export default MenuSeparator;
