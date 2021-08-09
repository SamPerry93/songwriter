import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Editor.css";
const Song = () => {



    return(
        <Router>
            <div className="links">
                <ul className="song-page-nav">
                    <li><Link to='/words'><i><FaSearch/></i></Link></li>
                </ul>
            </div>

            
        </Router>
    )
}
export default Song;