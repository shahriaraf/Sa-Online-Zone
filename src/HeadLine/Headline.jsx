// MovingHeadline.jsx
import React, { useState} from 'react';
import { Speaker, Volume2, VolumeX, Pause, Play } from 'lucide-react';

const Headline = ({ 
  headlines = ["Welcome to our platform!"], 
  speed = 50, // pixels per second
  backgroundColor = "from-blue-600 to-purple-600",
  textColor = "text-white",
  showIcon = true,
  pauseOnHover = true,
  showControls = false,
  className = ""
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Join headlines with separator for continuous scroll
  const headlineText = headlines.join(' • ');
  
  // Calculate animation duration based on text length and speed
  const animationDuration = (headlineText.length * 12) / speed; // approximate character width of 12px

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ${className}`}>
      {/* Background with gradient */}
      <div className={`bg-gradient-to-r ${backgroundColor} p-3 sm:p-4`}>
        <div className="flex items-center space-x-3">
          {/* Icon */}
          {showIcon && (
            <div className="flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Speaker className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          )}

          {/* Moving text container */}
          <div className="flex-1 relative overflow-hidden">
            <div
              className={`flex whitespace-nowrap ${textColor} font-medium text-sm sm:text-base`}
              style={{
                animation: isPaused ? 'none' : `scroll ${animationDuration}s linear infinite`,
                ...(pauseOnHover && {
                  animationPlayState: 'running'
                })
              }}
              onMouseEnter={() => pauseOnHover && setIsPaused(true)}
              onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
              {/* Duplicate text for seamless loop */}
              <span className="pr-8">{headlineText}</span>
              <span className="pr-8">{headlineText}</span>
            </div>
          </div>

          {/* Controls */}
          {showControls && (
            <div className="flex-shrink-0 flex items-center space-x-2">
              <button
                onClick={handleTogglePause}
                className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? (
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                ) : (
                  <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                )}
              </button>
              <button
                onClick={handleToggleMute}
                className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                ) : (
                  <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Headline;