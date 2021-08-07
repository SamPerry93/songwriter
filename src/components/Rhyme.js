import React, { useState } from 'react'
import Rhymes from './Rhymes'


const Rhyme = () => {
    const [search, setSearch] = useState('')
    const [isLoading, setLoading] = useState(false)
    const[words, setWords] = useState([])
    const url= `https://rhymebrain.com/talk?function=getRhymes&lang=en&maxResults=34&word=`
    function handleSubmit() {
        setLoading(true)
        console.log(isLoading)
        fetch(url + search)
        .then(res => res.json())
        .then(response => {
            
            setWords(response)
            setLoading(false)
        })
        
        setSearch('')
    }

    return(
        <>
            <div className="search-container">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><button onClick={handleSubmit}>Search</button>
            </div>
            <div className="rhyme-container">
                <Rhymes isLoading={isLoading} words={words}/>
            </div>
        </>
    )
}
export default Rhyme;