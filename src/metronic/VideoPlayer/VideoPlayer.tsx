import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  url: string;
  width?: string;
  height?: string;
};

function VideoPlayer(props: VideoPlayerProps) {
  const { width, height, url } = props;
  return <ReactPlayer width={width} height={height} controls url={url} />;
}

export default VideoPlayer;
