import React, {useState} from 'react'
import type * as CSS from 'csstype';
import { Outlet, Link } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const looksActive: Style={

    'background-color': "tomato",
    float: 'left'
};

const onHover: Style={
    
    'background-color': "tomato",
    float: 'left'
};

const ulStyle: Style =
    {
        'list-style-type': 'none',
        'margin-left': '250px',
        padding: 0,
        overflow: 'hidden',
        'background-color': 'rgb(180, 8, 8)',
    };

const liStyle: Style =
{
    float: 'left'
};

const linkStyle: Style =
{
    display: 'block',
    color: 'white',
    'text-align': 'center',
    padding: '14px 50px',
    'text-decoration': 'none',
};
export function Navbar (){
    const [isHoveringOfficialTab, setIsHoveringOfficialTab] = useState(false);
    const [isHoveringTierTab, setIsHoveringTierTab] = useState(false);
    const [isHoveringContactTab, setIsHoveringContactTab] = useState(false);
    const [isHoveringVideoTab, setIsHoveringVideoTab] = useState(false);

    return (
    <>
        <ul style ={ulStyle}>
            <li style = {looksActive}><Link to="/" style={linkStyle}>Home</Link></li>
            <li style = {isHoveringOfficialTab ? onHover : liStyle} 
                onMouseEnter= {()=>{ setIsHoveringOfficialTab(true)}} 
                onMouseLeave= {()=> setIsHoveringOfficialTab(false)}
                ><Link to="https://web.archive.org/web/19991127081403/http://www.smashbros.com/enter.html" style={linkStyle}>Official Smash 64 Website</Link></li>
            <li style = {isHoveringTierTab ? onHover : liStyle} 
                onMouseEnter= {()=>{ setIsHoveringTierTab(true)}} 
                onMouseLeave= {()=> setIsHoveringTierTab(false)}
                ><Link to="/tierlist" style={linkStyle}>Tier List</Link></li>
            <li style = {isHoveringContactTab ? onHover : liStyle} 
                onMouseEnter= {()=>{ setIsHoveringContactTab(true)}} 
                onMouseLeave= {()=> setIsHoveringContactTab(false)}
                ><Link to="/contacts" style={linkStyle}>Contacts</Link></li>
            <li style = {isHoveringVideoTab ? onHover : liStyle} 
                onMouseEnter= {()=>{ setIsHoveringVideoTab(true)}} 
                onMouseLeave= {()=> setIsHoveringVideoTab(false)}
                ><Link to="/video" style={linkStyle}>Old Introduction Video</Link></li>
        </ul>
        
    </>
    );
}

export default Navbar