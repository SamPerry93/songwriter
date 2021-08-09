import { useEffect, useState } from 'react'
import db from "../lib/firebase"
import "./Editor.css"
import Rhyme from './Rhyme'
const OneSong = ({match}) => {
    const date = new Date()
    const [song, setSong] = useState({})
    const [newLyrics, setNewLyrics] = useState()
    const [title, setTitle] = useState()
    useEffect(()=>{
        fetchSong()
        console.log(newLyrics)
    }, [])
    // useEffect(() => {
    //     if(newLyrics !== song)
    //     {
    //         setNewLyrics()
    //     }
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    const fetchSong = async ()=>{
        await db.collection('songbook').doc(`${match.params.id}`)
        .get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                
                setNewLyrics(doc.data().lyrics)
                setTitle(doc.data().title)
                setSong(doc.data())

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    const handleClick = async () => {
        await db.collection('songbook').doc(`${match.params.id}`)
        .update({title: title, lyrics:newLyrics,updatedAt:date.toUTCString()},{merge:true})
            console.log()
    }
    return(
        <>
        <div className="editor-page">
        <div className="above-editor">
            <input className="title-text" type="text" value={title} placeholder={title} onChange={(e)=> setTitle(e.target.value)} />
            
            <button className="save-button" onClick={handleClick}>Save</button>
        </div>
        <p style={{fontSize:".75rem"}}>{song.createdAt}</p>
        <textarea className="text-editor" value={newLyrics} onChange={(e) => setNewLyrics(e.target.value)}>{newLyrics}</textarea>
        
        
        
        <Rhyme/>
        </div>
        </>
    )
}

export default OneSong;
