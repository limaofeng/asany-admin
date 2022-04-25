import Icon from '@asany/icons';

import Button from '@/metronic/Button';

type ControlsProps = {
  layout?: boolean;
  children?: React.ReactNode;
  onLayout?: (key: 'card' | 'table') => void;
};

function Controls(props: ControlsProps) {
  const { layout, children } = props;
  return (
    <div className="d-flex flex-wrap my-1">
      {layout && (
        <ul className="nav nav-pills me-6 mb-2 mb-sm-0">
          <li className="nav-item m-0 me-3">
            <Button
              variant="light"
              color="muted"
              active
              activeColor="primary"
              icon={<Icon name="Duotune/gen024" className="svg-icon-2" />}
            />
          </li>
          <li className="nav-item m-0">
            <Button
              variant="light"
              color="muted"
              activeColor="primary"
              className="me-3"
              icon={<Icon name="Duotune/abs015" className="svg-icon-2" />}
            />
          </li>
        </ul>
      )}
      {children}
    </div>
  );
}

export default Controls;
