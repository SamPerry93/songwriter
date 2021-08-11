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
            console.log('new render from rhyme handleSub')
            setWords(response)
            setLoading(false)
        })
        
        setSearch('')
    }
    const searchRhyme = (e) => {
        setSearch(e.target.value)
        console.log('new render search Rhyme Rhyme')
    }

    return(
        <>
        <div className="search-section">
            <div className="search-area-container">
                <h3>Search a Word For Rhymes</h3>
                <div className="search-container">
                <input type="text" value={search} onChange={searchRhyme} /><button onClick={handleSubmit}>Search</button>
                </div>
            </div>
            <div className="rhyme-container">
                <Rhymes isLoading={isLoading} words={words}/>
            </div>
        </div>
        </>
    )
}
export default Rhyme;