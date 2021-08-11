import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import db from '../lib/firebase';
import Songs from './Songs';
const Songbook = () => {
    const [songbook,setSongbook] = useState([])

    useEffect(()=>{
       fetchDb()
    }, [])

    const fetchDb = async () =>{
        await db.collection("songbook")
        .orderBy("updatedAt", "desc")
        .get()
        .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setSongbook(data);
            console.log('new render songbook useEffect')
        })
    }
    useEffect( ()=>{
        let isMounted = true;
         db.collection("songbook")
        .orderBy("updatedAt", "desc")
        .onSnapshot((querySnapshot) => {
            
            const _entries = [];
            querySnapshot.forEach((doc) =>{
                
                _entries.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            if(isMounted){setSongbook(_entries)}
            
        });return() => {isMounted = false}
    }, []);

    return(
        <div className="songbook-container">
        <Songs songbook={songbook}/>
        <Link to='/editor'><FaPlus/></Link>
        </div>
    )
}
export default (Songbook);