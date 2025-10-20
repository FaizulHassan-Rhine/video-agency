'use client';

import { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoRef, setVideoRef] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Pause video when modal closes
      if (videoRef) {
        videoRef.pause();
        setIsPlaying(false);
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      // Cleanup video when component unmounts
      if (videoRef) {
        videoRef.pause();
      }
    };
  }, [isOpen, videoRef]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
        setIsPlaying(false);
      } else {
        videoRef.play().catch(error => {
          console.log('Play interrupted:', error);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  // Reset video state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setIsMuted(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Video Container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          <div className="relative aspect-video">
            <video
              ref={setVideoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              muted={isMuted}
              loop
            />
            
            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="bg-black/50 hover:bg-black/70 rounded-full p-4 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-12 w-12 text-white" />
                ) : (
                  <Play className="h-12 w-12 text-white" />
                )}
              </button>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleMute}
                  className="bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Video Title */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
          )}
        </div>

        {/* Click outside to close */}
        <div
          className="absolute inset-0 -z-10"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
