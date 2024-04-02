import { useCallback } from 'react';

import Icon from '@asany/icons';
import { render, useEditorSelector, useEditorTools } from '@asany/sunmao';
import isEqual from 'lodash/isEqual';

type NavigationProps = {
  onBack?: () => void;
};

function Navigation(props: NavigationProps) {
  const { onBack } = props;

  const tools = useEditorTools((state) => state.ui.toolbar.tools);

  const focus = useEditorSelector(
    (state) =>
      state.ui.toolbar.tools.reduce((data, item) => {
        data[item.id] = item.useSelector && item.useSelector(state);
        return data;
      }, {} as any),
    isEqual,
  );

  const handClickBack = useCallback(() => onBack && onBack(), [onBack]);

  return (
    <div className="sunmao-navigation">
      <div className="navigation-left">
        <Icon
          name="AsanyEditor/ToolbarBack"
          onClick={handClickBack}
          className="back-icon toolbar-icon"
        />
        <span className="title">SUNMAO </span>
      </div>
      <div className="sunmao-navigation-container">
        <div className="toolbar-center">
          {tools
            .filter(
              (item) =>
                item.position === 'left' && item.isVisibled!(focus[item.id]),
            )
            .map(render, focus)}
        </div>
        <div className="toolbar-right">
          {tools
            .filter(
              (item) =>
                item.position === 'right' && item.isVisibled!(focus[item.id]),
            )
            .map(render, focus)}
        </div>
      </div>
    </div>
  );
}
export default Navigation;
