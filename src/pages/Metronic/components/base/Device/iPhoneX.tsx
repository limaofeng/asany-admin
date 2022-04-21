import type { DeviceGeneralProps } from './typings';

type iPhoneXProps = DeviceGeneralProps;

function iPhoneX(props: iPhoneXProps) {
  const { children } = props;
  return (
    <div className="marvel-device iphone-x">
      <div className="notch">
        <div className="camera" />
        <div className="speaker" />
      </div>
      <div className="top-bar" />
      <div className="sleep" />
      <div className="bottom-bar" />
      <div className="volume" />
      <div className="overflow">
        <div className="shadow shadow--tr" />
        <div className="shadow shadow--tl" />
        <div className="shadow shadow--br" />
        <div className="shadow shadow--bl" />
      </div>
      <div className="inner-shadow" />
      <div className="screen">{children}</div>
    </div>
  );
}

export default iPhoneX;
