const TextEdit = ({lyrics,setLyrics}) => {


    return(
        <div className="text-editor">
           <textarea name="lyrics" id="lyrics" cols="30" rows="10" value={lyrics} onChange={(e) => setLyrics(e.target.value)} placeholder="Your words can change the world"></textarea>
           </div>
    )
}
export default TextEdit;