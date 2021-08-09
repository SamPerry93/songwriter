import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import './Editor.css';
import OneSong from './OneSong';
import Rhyme from './Rhyme';
import Song from './Song';
import Songbook from './Songbook';


const Nav = () => {
    
    return(
        <Router>
        <div className="nav-links-container">
        <Link className="logo-link" to="/"><h1><span style={{fontWeight:600}}>S</span><span style={{fontFamily:"Impact",fontSize: "1.6rem"}}>O</span><span style={{fontFamily:"monospace", fontWeight: 700}}>N</span><span style={{fontFamily: "monospace",fontWeight:600,fontSize: "2.1rem"}}>g</span><span style={{fontFamily:"Impact",fontWeight:500,fontSize: "1.6rem"}}>W</span><span style={{fontWeight: 700}}>r</span><span style={{fontFamily:"monospace", fontWeight:600}}>i</span><span style={{fontWeight:600}}>T</span><span style={{fontFamily:"Impact",fontWeight:700,fontSize: "1.5rem"}}>E</span><span style={{fontFamily:"monospace",fontWeight: 600,}}>R</span></h1></Link>
        <ul className="nav-links">
            <li className="list-link"><Link to='/song'><FaPlus/></Link></li>
        </ul>
    </div>
        
        <Switch>
            <Route exact path="/" component={Songbook}/>
            <Route exact path="/song" component={Song}/>
            <Route exact path="/:id" component={OneSong}/>
            <Route exact path="/song/editor"><Editor/></Route>
            <Route path="/rhyme"><Rhyme/></Route>
        </Switch>
    </Router>
    )
}
export default Nav;