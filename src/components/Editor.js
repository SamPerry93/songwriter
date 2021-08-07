import Quill from 'quill';
import "quill/dist/quill.snow.css";
import React, { useCallback } from 'react';



const Editor = () => {

    const editorWrapper = useCallback((wrap) => {
       
        if(wrap == null) return
        wrap.innerHTML = ''
        const editor = document.createElement('div');
        wrap.append(editor)
        new Quill(editor, {
            
            
        })
    }, [])
    
    
    return(
        
        <div className="" id="editor" ref={editorWrapper}>
            
        </div>
        
    )

}
export default Editor;