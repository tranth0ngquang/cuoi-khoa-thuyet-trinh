import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

const HomeVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeToggle = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = isMuted;
    };

    useEffect(() => {
        const video = videoRef.current;

        video.addEventListener('play', () => setIsPlaying(true));
        video.addEventListener('pause', () => setIsPlaying(false));

        return () => {
            video.removeEventListener('play', () => setIsPlaying(true));
            video.removeEventListener('pause', () => setIsPlaying(false));
        };
    }, [videoRef]);

    return (
        <div className="duration-700 ease-in-out" data-carousel-item>
            <div className="videoHome relative">
                <div className="absolute videoHome-controls z-20 right-40 top-1/2 translate-y-1/2 lg:right-40 lg:translate-y-0">
                    {/* bottom-20 right-1/2 translate-x-1/2 lg:right-40 */}
                    <span className="pr-3">
                        <button className="videoHome_play-pause" onClick={handlePlayPause}>
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </button>
                    </span>
                    <span>
                        <button className="videoHome_volume" onClick={handleVolumeToggle}>
                            <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
                        </button>
                    </span>
                </div>
                <video autoPlay loop className="rounded-b-3xl" ref={videoRef} muted={isMuted} >
                    <source src="./img/nature.mp4" type="video/mp4" />
                </video>
                {/* <video className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" ref={videoRef} src="../src/assets/movieDune.mp4" muted={isMuted} loop /> */}
            </div>

        </div>
    );
};

export default HomeVideo;