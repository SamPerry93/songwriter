import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import "./Editor.css";
//import Recording from './Recording';
import Rhyme from './Rhyme';
const Song = () => {



    return(
        <Router>
            <div className="links">
                <ul className="song-page-nav">
                    {/* <li><Link to='/recording'><i><FaMicrophone/></i></Link></li> */}
                    <li><Link to='/'><IoDocumentTextSharp/></Link></li>
                    <li><Link to='/words'><i><FaSearch/></i></Link></li>
                </ul>
            </div>

            <Switch>
                {/* <Route path="/recording"><Recording/></Route> */}
                <Route exact path="/"><Editor/></Route>
                <Route path="/words"><Rhyme/></Route>
            </Switch>
        </Router>
    )
}
export default Song;