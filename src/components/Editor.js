import "quill/dist/quill.bubble.css";
import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';
import Rhyme from "./Rhyme";
const Editor = () => {
    const [title, setTitle] = useState('');
    const [lyrics, setLyrics] = useState('');

    useEffect(()=>{
    console.log(lyrics)
    console.log('new render Editor useEffect')
    }, [lyrics])

    
    const handleClick = async () =>{
        const date = new Date()
        console.log(lyrics)
        await db.collection('songbook').add({
            title,
            lyrics,
            createdAt: date.toUTCString(),
            updatedAt: date.toUTCString()
       })
       setTitle('')
       setLyrics('')
    }
    
    return(
        <div className="editor-page">
        <div className="above-editor">
            <input className="title-text" type="text" value={title} placeholder="Title" onChange={(e)=> setTitle(e.target.value)} />
            <button className="save-button" onClick={handleClick}>Save</button>
        </div>
        <textarea className="text-editor" value={lyrics} onChange={(e) => setLyrics(e.target.value)}></textarea>
        <Rhyme/>
        </div>
    )

}
export default Editor;