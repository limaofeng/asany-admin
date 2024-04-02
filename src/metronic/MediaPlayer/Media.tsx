import { useState } from 'react';

type MediaProps = {
  children: (state: any) => any;
};

function Media(props: MediaProps) {
  const [state, setState] = useState({
    isPlaying: false,
    playPause: () => {
      setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
    },
  });

  return props.children(state);
}

function Player(props: any) {
  return props.children;
}

export { Media, Player };

export default Media;
