import type { DeviceGeneralProps } from './typings';

type iPhone8Props = DeviceGeneralProps;

function iPhone8(props: iPhone8Props) {
  const { children } = props;
  return (
    <div className="marvel-device iphone8 silver">
      <div className="top-bar" />
      <div className="sleep" />
      <div className="volume" />
      <div className="camera" />
      <div className="sensor" />
      <div className="speaker" />
      <div className="screen">{children}</div>
      <div className="home" />
      <div className="bottom-bar" />
    </div>
  );
}

export default iPhone8;
