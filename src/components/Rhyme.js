import React, { useState } from 'react'
import Rhymes from './Rhymes'


const Rhyme = () => {
    const [search, setSearch] = useState('')
    const[words, setWords] = useState([])
    const url= `https://rhymebrain.com/talk?function=getRhymes&lang=en&maxResults=34&word=`
    function handleSubmit() {
        fetch(url + search)
        .then(res => res.json())
        .then(response => {
            setWords(response)
        })
        setSearch('')
    }

    return(
        <><div className="search-container">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><button onClick={handleSubmit}>Search</button>
            </div>
            <div className="rhyme-container">
                <Rhymes words={words}/>
            </div>
        </>
    )
}
export default Rhyme;