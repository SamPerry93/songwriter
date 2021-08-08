import React, { useEffect, useState } from 'react';
import { TiMediaRecord, TiMediaStop } from 'react-icons/ti';
import AudioRecorder from './AudioRecorder';
import './Editor.css';
const AudioPlayer = () => {
let [audioURL, isRecording, startRecording, stopRecording] = AudioRecorder();
const [isPlaying, setIsPlaying] = useState()
let audio = new Audio(audioURL)
  useEffect(() => {
      if(isPlaying){
        audio.play()
        console.log("playing")
      }else{
        audio.pause()
        console.log("paused")
    }
    
  }, [isPlaying])
  return (
    <div className="recording-container">
      <div className="player-container">
        <audio src={audioURL} controls />
        {/* <div className="player-controls">
          {isPlaying ? (
           <button onClick={() => {setIsPlaying(false)}}  className="pause"><TiMediaPause/></button>) : (<button onClick={() => {setIsPlaying(true)}} className="play"><TiMediaPlay/></button>
           )}
        </div> */}
    </div>
      <div className="recording-controls">
        <button name="start-record" onClick={startRecording} disabled={isRecording}>
          <TiMediaRecord style={{color:"red"}}/><label>Record</label>
        </button>
        <button onClick={stopRecording} disabled={!isRecording}>
          <TiMediaStop/><label>Stop</label>
        </button>
      </div>
    </div>
    )
}

export default AudioPlayer;