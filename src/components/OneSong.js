import { useCallback, useEffect, useState } from 'react'
import db from "../lib/firebase"
import "./Editor.css"
import Rhyme from './Rhyme'
const OneSong = ({match}) => {
    const date = new Date()
    const  [song, setSong] = useState({})
    const  [newLyrics, setNewLyrics] = useState()
    const  [newTitle, setNewTitle] = useState()
    const  [isSaving, setIsSaving] = useState(false)

    const fetchSong = useCallback(()=>{
        db.collection('songbook').doc(`${match.params.id}`)
        .get().then((doc) => {
            if (doc.exists) {
                //console.log("Document data:", doc.data());
                setNewLyrics(doc.data().lyrics)
                setNewTitle(doc.data().title)
                setSong(doc.data())
                console.log('new render in fetch song function')
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    },[match.params.id])

    const handleClick = async () => {
        setIsSaving(true)
        await db.collection('songbook').doc(`${match.params.id}`)
        .update({title: newTitle, lyrics:newLyrics,updatedAt:date.toUTCString()},{merge:true})
        
        .catch((error) => {console.log(error)})
        setTimeout( 3000)
        setIsSaving(false)
        console.log('new render handle Click')
    }

    useEffect(()=>{
        fetchSong()
        console.log(newLyrics)
        console.log('new Render fetch song useEffect')
    }, [fetchSong, newLyrics])
    return(
        <>
        {isSaving ? (<h2 style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
                height: 200,
                width: "100%",
                background:"#f3fefe",
                textAlign:"center",
                position:"absolute"
            }}>Saving</h2>) : (<> </>)}
        <div className="editor-page">
            
        <div className="above-editor">
            <input className="title-text" type="text"  placeholder={newTitle}/>
            
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
