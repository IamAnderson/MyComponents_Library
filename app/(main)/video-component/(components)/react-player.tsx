"use client";
import React from "react";
import ReactPlayer, { Config } from "react-player";

interface ReactPlayerProps {
  url?: string;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  light?: boolean;
  thumbnailURL?: string;
  playing?: boolean;
  volume?: number; //maximum of 1
  playIcon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  config?: Config | undefined;
  ref?: React.LegacyRef<ReactPlayer>;

  onReady?: () => void;
  onStart?: () => void;
  onPlay?: () => void;
  onDuration?: (duration: number) => void;
  onEnded?: () => void;
  onError?: () => void;
  onProgress?: (progress: {
    playedSeconds: number;
    played: number;
    loadedSeconds: number;
    loaded: number;
  }) => void;
}

const ReactPlayerComponent = ({
  url,
  muted,
  loop,
  controls,
  light,
  thumbnailURL,
  playing,
  volume, 
  playIcon,
  config,
  ref,
  onReady,
  onPlay,
  onError,
  onDuration,
  onEnded,
  onProgress,
  onStart,
}: ReactPlayerProps) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  //   const onReady = (player: ReactPlayer) => {
  //     console.log(player);
  //   }

  //   const onStart = () => {
  //     console.log("video started");
  //   }

  //   const onPlay = () => {
  //     console.log("video played again");
  //   }

  //   const onEnded = () => {
  //     console.log("video ended");
  //   }

  //   const onError = (error: any) => {
  //     console.log(error)
  //   }

  // const handleProgress = (progress: { playedSeconds: number, played: number, loadedSeconds: number, loaded: number }) => {
  //   console.log(progress);
  //   setPlayed(progress.played);
  //   // Can use this to check end or even half way through video using the "played" prop
  // };

  return (
    <>
      <ReactPlayer
        ref={ref}
        url={url}
        controls={controls}
        muted={muted}
        light={light ? light : thumbnailURL}
        loop={loop}
        playing={playing}
        volume={volume}
        playIcon={playIcon}
        width="100%"
        height="100%"
        config={config}
        onReady={onReady}
        onStart={onStart}
        onPlay={onPlay}
        onProgress={onProgress}
        onDuration={onDuration}
        onEnded={onEnded}
        onError={onError}
      />
    </>
  );
};

export default ReactPlayerComponent;
