import React from 'react';
import './Editor.css';

const Rhymes = ({words,isLoading}) => {
    if(isLoading){
        return(
            <h2>Loading...</h2>
        )
    }else {
        return(
            words.map(rhyme => {
            if(rhyme.score >= 275 && rhyme.word.length >= 3){
                return(
                <h3 className="return-word-searched" key={rhyme.word}>{rhyme.word}</h3>
            )
        }else{
            return(
                <h3>nothing found</h3>
            )
        }
    }) 
)}
}
export default Rhymes;