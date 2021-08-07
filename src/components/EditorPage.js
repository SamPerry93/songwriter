import React, { useState } from 'react'
import Editor from './Editor'
import './Editor.css'

const EditorPage = () => {
const [openingText, setOpeningText] = useState("Let's Create Something")
const [editors, setEditors] = useState([<Editor/>])
let [numEditors, setNumEditors] = useState(1)
    function handleClick(){
        const newEditor = editors.concat(<Editor/>)
        setOpeningText('')
        console.log(numEditors)
       if(numEditors <= 7){
           let numberEditors = ++numEditors
           setNumEditors(numberEditors)
           return(
            setEditors(newEditor)
       )
           }else{
            return(
                <h2>Thats the limit on Open editors</h2>
            )
       }
           
            
           
       
        
    }
return(
    <>
    <div id="editor-group">
    
        {editors.map((one,idx) => {
            return(
                <div key={idx}>
                    
                <>{one}</>
                {openingText}
                </div>
            )
        })}
    </div>
<button onClick={handleClick}>Click</button>
</>
)
}
export default EditorPage;