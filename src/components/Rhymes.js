import React from 'react';
import './Editor.css';

const Rhymes = ({words,isLoading}) => {
    if(isLoading){
        return(
            
            <h2 style={{ fontFamily:'monospace',position:'absolute', left:'50%',transform:"translate(-50%, -50%)"}}>Loading...</h2>
            
           
        )
    }else {
        return(
            words.map(rhyme => {
            if(rhyme.score >= 200 && rhyme.word.length >= 3){
                return(
                    
                <h3 className="return-word-searched" key={rhyme.word}>{rhyme.word}</h3>
                
            )
            }else{return(null)}
    }) 
)}
}
export default Rhymes;