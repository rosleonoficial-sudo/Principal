import React, { useEffect, useRef, useState } from "react";
import { Volume2, Clock } from "lucide-react";

export default function InteractivePlayer() {
  const [origin, setOrigin] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [duration, setDuration] = useState(58); // Fallback ~58s for Shorts SCnZQHCFUKE
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const maxWatchedTimeRef = useRef<number>(0);

  // Auto-hide the "APERTE O PLAY E LIGUE O SOM!" button after 8 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlayButton(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);

      const enableAudioOnUserInteraction = () => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "unMute", args: [] }),
            "*"
          );
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
            "*"
          );
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*"
          );
        }
        setIsMuted(false);
        setShowPlayButton(false);
        setIsPlaying(true);
      };

      // Listen for any click or touch on the screen to instantly activate unmuted audio
      window.addEventListener("click", enableAudioOnUserInteraction, { once: true });
      window.addEventListener("touchstart", enableAudioOnUserInteraction, { once: true });

      return () => {
        window.removeEventListener("click", enableAudioOnUserInteraction);
        window.removeEventListener("touchstart", enableAudioOnUserInteraction);
      };
    }
  }, []);

  // Listen to YouTube Iframe messages to update duration, currentTime and prevent fast-forwarding
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        let data = event.data;
        if (typeof data === "string") {
          data = JSON.parse(data);
        }
        if (data && data.event === "infoDelivery" && data.info) {
          if (typeof data.info.duration === "number" && data.info.duration > 0) {
            setDuration(data.info.duration);
          }
          if (typeof data.info.currentTime === "number") {
            const curTime = data.info.currentTime;

            // Anti-fast-forward guard: if video jumped ahead beyond max watched time
            if (curTime > maxWatchedTimeRef.current + 2.5 && maxWatchedTimeRef.current > 0) {
              if (iframeRef.current?.contentWindow) {
                iframeRef.current.contentWindow.postMessage(
                  JSON.stringify({
                    event: "command",
                    func: "seekTo",
                    args: [maxWatchedTimeRef.current, true],
                  }),
                  "*"
                );
              }
            } else {
              maxWatchedTimeRef.current = Math.max(maxWatchedTimeRef.current, curTime);
              setCurrentTime(curTime);
            }
          }
          if (typeof data.info.playerState === "number") {
            // 1 = PLAYING, 2 = PAUSED, 0 = ENDED
            setIsPlaying(data.info.playerState === 1);
          }
        }
      } catch {
        // Ignore parse errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Send listening handshake to YouTube iframe
  useEffect(() => {
    const interval = setInterval(() => {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "listening", id: 1 }),
          "*"
        );
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer ticker when video is playing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) return duration;
          const next = prev + 1;
          maxWatchedTimeRef.current = Math.max(maxWatchedTimeRef.current, next);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration]);

  const handleUnmute = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute", args: [] }),
        "*"
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
        "*"
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    }
    setIsMuted(false);
    setShowPlayButton(false);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isMuted) {
      handleUnmute();
      return;
    }
    if (iframeRef.current && iframeRef.current.contentWindow) {
      if (isPlaying) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
          "*"
        );
        setIsPlaying(false);
      } else {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
        setIsPlaying(true);
      }
    }
  };

  const remainingTime = Math.max(0, Math.ceil(duration - currentTime));

  const formatTime = (totalSeconds: number) => {
    const secs = Math.max(0, Math.floor(totalSeconds));
    const minutes = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSecs
      .toString()
      .padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  // controls=0 hides YouTube seekbar/controls; disablekb=1 disables keyboard fast-forwarding
  const embedUrl = origin
    ? `https://www.youtube-nocookie.com/embed/SCnZQHCFUKE?autoplay=1&mute=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&controls=0&disablekb=1&enablejsapi=1&origin=${encodeURIComponent(
        origin
      )}`
    : "https://www.youtube-nocookie.com/embed/SCnZQHCFUKE?autoplay=1&mute=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&controls=0&disablekb=1&enablejsapi=1";

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md mx-auto px-4 mt-1">
      <div
        id="video-player-container"
        className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-black border-2 border-emerald-500/40 animate-border-blink"
      >
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title="Vídeo de Apresentação"
          className="absolute top-0 left-0 w-full h-full rounded-3xl border-0 pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          allowFullScreen
        />

        {/* Full Overlay Click Shield - prevents native YouTube controls or seeking, handles play/pause or unmute */}
        <div
          className="absolute inset-0 z-20 bg-transparent cursor-pointer select-none"
          onClick={handleTogglePlay}
        />

        {/* Unmute / Audio Activation Overlay Button if muted and active timer */}
        {isMuted && showPlayButton && (
          <button
            onClick={handleUnmute}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-emerald-600/95 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-full shadow-xl backdrop-blur-md text-xs sm:text-sm animate-pulse-gentle transition-all duration-500 cursor-pointer border border-white/20"
          >
            <Volume2 className="w-4 h-4" />
            <span className="text-dark-stroke">APERTE O PLAY E LIGUE O SOM! 🔊</span>
          </button>
        )}

        {/* Bottom Countdown & Loading Bar Overlay inside video footer */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/85 to-transparent backdrop-blur-md pointer-events-none flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 drop-shadow">
            <Clock className="w-4 h-4 animate-pulse text-emerald-400 shrink-0" />
            <span>Falta para terminar:</span>
          </div>

          {/* Loading / Progress Bar */}
          <div className="w-full bg-zinc-800/90 h-2 sm:h-2.5 rounded-full overflow-hidden border border-zinc-700/60 p-0.5 relative">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-yellow-400 rounded-full transition-all duration-300 ease-linear shadow-[0_0_12px_rgba(16,185,129,0.6)]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


