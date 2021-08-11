import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Editor from './Editor';
import './Editor.css';
import OneSong from './OneSong';
import Songbook from './Songbook';


const Nav = () => {
    
    return(
        <Router>
        <div className="nav-links-container">
        <Link className="logo-link" to="/"><h1><span style={{fontWeight:600, }}>S</span><span style={{fontSize: "1.6rem"}}>O</span><span style={{fontSize:"1.7rem", fontWeight: 700}}>N</span><span style={{fontWeight:600,fontSize: "2.1rem"}}>g</span><span style={{fontWeight:500,fontSize: "1.8rem"}}>W</span><span style={{fontWeight: 700}}>r</span><span style={{ fontWeight:600}}>i</span><span style={{fontWeight:600}}>T</span><span style={{fontWeight:700,fontSize: "1.5rem"}}>E</span><span style={{fontWeight: 600,}}>R</span></h1></Link>
        <ul className="nav-links">
            <li className="list-link"><Link to='/editor'><FaPlus/></Link></li>
        </ul>
    </div>
        
        <Switch>
            <Route exact path="/" component={Songbook}/>
            
            <Route exact path="/editor/:id" component={OneSong}/>
            <Route exact path="/editor"component={Editor}/>
            
        </Switch>
    </Router>
    )
}
export default Nav;