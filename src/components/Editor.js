import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { useCallback } from 'react';


const Editor = () => {

    const editorWrapper = useCallback((wrap) => {
        if(wrap == null) return
        wrap.innerHTML = ''
        const editor = document.createElement('div');
        wrap.append(editor)
        new Quill(editor, {
            theme: "snow"
        })
    }, [])
    
    return(
        <div className="text-editor" id="editor" ref={editorWrapper}>
            
        </div>
    )

}
export default Editor;