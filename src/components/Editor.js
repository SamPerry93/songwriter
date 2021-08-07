import Quill from 'quill';
import "quill/dist/quill.snow.css";
import { useCallback } from 'react';



const Editor = () => {

    const editorWrapper = useCallback((wrap) => {
        let toolbarOptions=[['italic', 'underline'],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'size': ['small','medium', 'large'] }],]
        if(wrap == null) return
        wrap.innerHTML = ''
        const editor = document.createElement('div');
        wrap.append(editor)
        new Quill(editor, {
            
            modules:{
                toolbar: toolbarOptions
            },
            theme: "snow"
        })
    }, [])
    
    return(
        <div className="text-editor" id="editor" ref={editorWrapper}>
            
        </div>
    )

}
export default Editor;