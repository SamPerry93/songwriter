import React from 'react';
import './Editor.css';

const Rhymes = ({words}) => {
return(
    words.map(rhyme => {
        if(rhyme.score >= 275 && rhyme.word.length >= 3){
            return(
                <h3 className="return-word-searched" key={rhyme.word}>{rhyme.word}</h3>
            )
        }
    }) 
)}

export default Rhymes;