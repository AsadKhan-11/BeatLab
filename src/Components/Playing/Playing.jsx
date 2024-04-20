import React, { useEffect, useRef, useState } from "react";
import "./Playing.css";
import songs from "../SongCard/songsData";

function Playing() {
  const [current, setCurrent] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [currentSong, setCurrentSong] = useState(songs[current]);

  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const audRef = useRef(currentSong.song);

  useEffect(() => {
    if (isPlaying) {
      audRef.current.play();
    } else {
      audRef.current.pause();
    }
    setDuration(audRef.current.duration);
    duration.toString();
  }, [duration]);

  const playSong = () => {
    if (!isPlaying) {
      audRef.current.play();
    } else {
      audRef.current.pause();
    }
    setisPlaying((prev) => !prev);
  };

  const next = () => {
    const nextSong = (current + 1) % songs.length;
    setCurrent(nextSong);
    setCurrentSong(songs[nextSong]);
    setisPlaying(true);
  };
  const prev = () => {
    const nextSong = (current - 1 + songs.length) % songs.length;
    setCurrent(nextSong);
    setCurrentSong(songs[nextSong]);
    setisPlaying(true);
    audRef.current.src = currentSong.song.src;
  };
  const setTime = () => {
    setCurrentTime(audRef.current.currentTime);
  };
  const sliderChange = (e) => {
    const seekTime = parseFloat(e.target.value);
    audRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);

    if (isPlaying) {
      audRef.current.play();
    } else {
      audRef.current.pause();
    }
  };
  const setVolume = () => {
    setCurrentVolume(audRef.current.volume);
  };

  const volumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audRef.current.volume = newVolume;
    setVolume(newVolume);
    console.log(currentVolume);
  };

  return (
    <>
      <section className="playing-sec">
        <input
          className="slider"
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={sliderChange}
        />
        <div className="playing-container">
          <div className="playing-box">
            <img
              src={currentSong.img}
              alt="Now Playing image"
              className="playing-img"
            />

            <h2 className="playing-title">{currentSong.name}</h2>
          </div>
          <div className="control-btns">
            <button className="prev-btn" onClick={prev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                />
              </svg>
            </button>
            <button className="play-btn" onClick={playSong}>
              {!isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              )}
            </button>
            <button className="next-btn" onClick={next}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                />
              </svg>
            </button>
          </div>
          <audio
            ref={audRef}
            src={currentSong.song}
            autoPlay
            onTimeUpdate={setTime}
            onEnded={() => setisPlaying(false)}
          />
        </div>
        <input
          className="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={volumeChange}
          value={currentVolume}
        />
      </section>
    </>
  );
}

export default Playing;
