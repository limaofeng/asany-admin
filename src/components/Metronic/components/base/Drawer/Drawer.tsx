import React from 'react';

import ReactDOM from 'react-dom';

type OnClose = () => void;

type GetContainer = () => HTMLElement;

type DrawerProps = {
  title?: string;
  placement?: 'right' | 'left';
  width?: number;
  onClose?: OnClose;
  getContainer?: GetContainer;
  visible?: boolean;
};

function runGetContainer(getContainer?: GetContainer) {
  if (getContainer) {
    return getContainer();
  }
  return document.body;
}

class Drawer extends React.Component<DrawerProps> {
  el: HTMLDivElement;
  constructor(props: DrawerProps) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    const container = runGetContainer(this.props.getContainer);
    container && container.appendChild(this.el);
  }
  componentWillUnmount() {
    const container = runGetContainer(this.props.getContainer);
    container && container.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Drawer;
