import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import './Editor.css'
import Song from './Song'
import Songbook from './Songbook'

const StyledMenu = styled.div`
display: flex;
flex-direction: column;
height: 50%;
width: 100vw;
max-width: 100vw;
overflow: hidden;
flex-wrap: wrap;
background: #f2EEcb;
transform: ${({open}) => open ? 'translateY(50)': 'translateY(-100%)'}; 
padding: 2rem;
position: absolute;
box-shadow: 0 0 5px 0 #333;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
z-index: 8;

@media (max-width: 576px) {
    width: 100%;
}
`
// const StyledNav = styled.nav`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// bottom: 0;
// left: 0;
// width: 100%;
// max-width: 100vw;
// background: #f0e6cf;
// padding: 2rem;
// position: absolute;
// transition: opacity 0.3s ease-in-out;
// z-index: 8;

// @media (max-width: 576px) {
//     height: 20%;
// }
//     a{
//         font-size: 1.2rem;
//         text-decoration: none;
//         color: #333;
//         opacity: ${({open}) => open ? '1': '0'}
//     }
// `
// const StyledResults = styled.div`
// margin:  1rem 2rem 1rem 1rem;
// display: flex;
// flex-direction: column;
// align-items:center;
// justify-content:flex-start;
// height: 50vh;
// max-width: 100vw;
// overflow: scroll;
// background: #f0e6cf;
// flex-wrap: wrap;

// `
const StyledBurger = styled.button`

top: 4%;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 100;
 &:focus{outline:none} 
 div{
     width: 2rem;
     height: 0.25rem;
     background: ${({open}) => open ? "#333" : '#333'};
     border-radius: 10px;
     transition: all 0.3s linear;
     position: relative;
     transform-origin: 1px;

     :first-child{
         transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
     }
     :nth-child(2){
         opacity: ${({open}) => open ? '0': '1'};
     }
     :nth-child(3){
         transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
     }
 }
`
const Menu = ({open, setOpen}) => {
    return(
        <Router>
        <StyledMenu open={open}>
            
            
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li  onClick={() => setOpen(!open)}><Link  to='/home'>Home</Link></li>
                    <li  onClick={() => setOpen(!open)}><Link  to='/songbook'>Songbook</Link></li>
                    <li  onClick={() => setOpen(!open)}><Link to='/'>New Song</Link></li>
                </ul>
            </div>

            
            
        </StyledMenu>
        <Switch>
                <Route path="/home">Home</Route>
                <Route path="/songbook"><Songbook/></Route>
                <Route exact path="/"><Song/></Route>
            </Switch>
        </Router>
    )
}
const Burger = ({open,setOpen}) => {
    return(
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

const Nav = () => {
    const[open,setOpen] = useState(false);
    return(
        <>
        <div className="nav-vis">
        <h1><span style={{fontWeight:600}}>S</span><span style={{fontFamily:"Impact",fontSize: "1.6rem"}}>O</span><span style={{fontFamily:"monospace", fontWeight: 700}}>N</span><span style={{fontFamily: "monospace",fontWeight:600,fontSize: "2.1rem"}}>g</span><span style={{fontFamily:"Impact",fontWeight:500,fontSize: "1.6rem"}}>W</span><span style={{fontWeight: 700}}>r</span><span style={{fontFamily:"monospace", fontWeight:600}}>i</span><span style={{fontWeight:600}}>T</span><span style={{fontFamily:"Impact",fontWeight:700,fontSize: "1.5rem"}}>E</span><span style={{fontFamily:"monospace",fontWeight: 600,}}>R</span></h1>
        <Burger open={open} setOpen={setOpen}/>
        </div>
        <Menu open={open} setOpen={setOpen} />
        </>
    )
}
export default Nav;