import { useCallback, useEffect, useRef } from 'react';

// import { Media, Player } from 'react-media-player';

import CircleProgress from './CircleProgress';

import './style/CircleMediaPlayer.scss';

type CircleMediaPlayerProps = {
  src: string;
  size?: number;
};

function CircleMediaPlayer(props: CircleMediaPlayerProps) {
  const { size = 32 } = props;
  const _svg = useRef<SVGCircleElement>(null);

  const _circle = useRef<CircleProgress>();

  useEffect(() => {
    _circle.current = new CircleProgress(_svg.current!);
  }, []);

  const handleTimeUpdate = useCallback(({ currentTime, duration }) => {
    _circle.current!.setProgress((currentTime / duration) * 100);
  }, []);

  return (
    <Media>
      {({ isPlaying, playPause }: any) => (
        <button
          className="circle-media-player"
          onClick={(e) => {
            e.stopPropagation();
            playPause();
          }}
        >
          <Player
            src={props.src}
            vendor="audio"
            onTimeUpdate={handleTimeUpdate}
          />
          <svg width={size} height={size} viewBox="0 0 32 32">
            <circle
              cx="16"
              cy="16"
              r="14.5"
              className="circle-media-player__background"
            />
            <circle
              ref={_svg}
              cx="16"
              cy="16"
              r="14.5"
              className="circle-media-player__foreground"
            />
            {isPlaying ? (
              <g className="circle-media-player__pause">
                <rect width="3" height="9" x="11.5" y="11.5" />
                <rect width="3" height="9" x="17.5" y="11.5" />
              </g>
            ) : (
              <polygon
                points="13.083,11.5 20.583,16 13.083,20.5 "
                className="circle-media-player__play"
              />
            )}
          </svg>
        </button>
      )}
    </Media>
  );
}

export default CircleMediaPlayer;
