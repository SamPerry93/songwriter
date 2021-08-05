import React, { useState } from 'react'
const Rhyme = () => {
    const [search, setSearch] = useState('')
    const[words, setWords] = useState([])
    const url= `https://rhymebrain.com/talk?function=getRhymes&lang=en&word=`
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
                {
               
                    words.map(rhyme => {
                        if(rhyme.score >= 275 && rhyme.word.length >= 3){
                            return(
                                <h3 key={rhyme.word}>{rhyme.word}</h3>
                            )
                        }
                    })
                    }
            </div>
        </>
    )
}
export default Rhyme;