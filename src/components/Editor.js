import "quill/dist/quill.bubble.css";
import React, { useEffect, useState } from 'react';
//import db from '../lib/firebase';
import AudioPlayer from "./AudioPlayer";
import TextEdit from "./TextEdit";
const db = React.lazy(()=> import('../lib/firebase'))
//const AudioPlayer = React.lazy(() => import('./AudioPlayer'))
const Editor = () => {
    const [title, setTitle] = useState('');
    const [prevSave, setSave] = useState('');
    const [lyrics, setLyrics] = useState('');
    // const editorWrapper = useCallback((wrap) => {
        
    //     let toolbarOptions=[['italic', 'underline'],
    //     [{ 'indent': '-1'}, { 'indent': '+1' }],
    //     [{ 'size': ['small','medium', 'large'] }],]
    //     if(wrap == null) return
    //     wrap.innerHTML = ''
    //     const editor = document.createElement('div');
    //     wrap.append(editor)
    //     new Quill(editor, {
            
    //         modules:{
    //             toolbar: toolbarOptions
    //         },
    //         theme: "snow"
    //     })
    //     let rnad = editor.getContents()
    //    console.log(rnad)
    // }, [])
    
    // const compareLyrics = useCallback(()=>{
    //     if(prevSave !== lyrics){
    //         setSave(lyrics)
    //         return(console.log(lyrics))
    //     }
    // }, [lyrics,setSave,prevSave])
       
    
    
    useEffect(()=>{
     //compareLyrics()
    //  return(lyrics)
    console.log(lyrics)
    }, [lyrics])

    // useEffect( ()=>{
    //     let isMounted = true;
    //      db.collection("songbook")
    //     .orderBy("createdAt", "desc")
    //     .onSnapshot((querySnapshot) => {
            
    //         const _entries = [];
    //         querySnapshot.forEach((doc) =>{
                
    //             _entries.push({
    //                 id: doc.id,
    //                 ...doc.data()
    //             })
    //         })
    //         if(isMounted){setLyrics(_entries)}
            
    //     });return() => {isMounted = false}
    // }, []);
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
        <>
        <div className="editor-page">
            <div className="above-editor">
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                <button onClick={handleClick}>Save Lyrics</button>
            </div>
            <TextEdit lyrics={lyrics} setLyrics={setLyrics}/>
            
        </div>
        <AudioPlayer/>
        </>
    )

}
export default Editor;