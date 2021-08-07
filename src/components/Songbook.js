import { useEffect, useState } from 'react';
import db from '../lib/firebase';

const Songbook = () => {
    const [songbook,setSongbook] = useState([])

    useEffect(()=>{
        db.collection("songbook")
        .orderBy("createdAt", "desc")
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setSongbook(data);
        })
    }, [])

    return(
        songbook.map((song) => {
            return(
                <h2 key={song.id}>{song.title}</h2>
            )
           
        })
    )
}
export default Songbook;