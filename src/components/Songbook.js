import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
        <>
        <div className="songbook-container">
        {songbook.map((song) => {
            return(
                <>
                <Link  key={song.id} to={`/${song.id}`}>
                   {song.title}
                    
                    
                </Link>
                
                </>
            )
           
        })}
        <Link to="/editor"><FaPlus/></Link>
        </div>
        </>
    )
}
export default (Songbook);