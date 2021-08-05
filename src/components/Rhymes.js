import React from 'react';
import './Editor.css';

const Rhymes = ({rhyme}) => {
if(rhyme !== null){
return(
    <>
        <h3>{rhyme.word}</h3>
    </>
)}else{
    return(
        <h2>Search A Rhyme</h2>
    )
}

}
export default Rhymes;