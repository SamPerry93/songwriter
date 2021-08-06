import React from 'react';
import { TiMediaRecord, TiMediaStop } from 'react-icons/ti';
import AudioRecorder from './AudioRecorder';
import './Editor.css';
const AudioPlayer = () => {
let [audioURL, isRecording, startRecording, stopRecording] = AudioRecorder();

  return (
    <div className="recording-container">
    <div className="player-container">
        <audio src={audioURL} controls />
    </div>
      
      <button onClick={startRecording} disabled={isRecording}>
        <i><TiMediaRecord style={{color:"red"}}/></i>
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        <i><TiMediaStop/></i>
      </button>
      </div>
    )
}

export default AudioPlayer;