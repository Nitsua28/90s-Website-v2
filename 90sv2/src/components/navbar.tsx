import React, {useState} from 'react'
import type * as CSS from 'csstype';

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

const aStyle: Style =
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
        <li style = {looksActive}><a style ={aStyle} >Home</a></li>
        <li style = {isHoveringOfficialTab ? onHover : liStyle} 
            onMouseEnter= {()=>{ setIsHoveringOfficialTab(true)}} 
            onMouseLeave= {()=> setIsHoveringOfficialTab(false)}
            ><a style = {aStyle}>Official Smash 64 website</a></li>
        <li style = {isHoveringTierTab ? onHover : liStyle} 
            onMouseEnter= {()=>{ setIsHoveringTierTab(true)}} 
            onMouseLeave= {()=> setIsHoveringTierTab(false)}
            ><a style = {aStyle}>Tierlist</a></li>
        <li style = {isHoveringContactTab ? onHover : liStyle} 
            onMouseEnter= {()=>{ setIsHoveringContactTab(true)}} 
            onMouseLeave= {()=> setIsHoveringContactTab(false)}
            ><a style = {aStyle}>Contact</a></li>
        <li style = {isHoveringVideoTab ? onHover : liStyle} 
            onMouseEnter= {()=>{ setIsHoveringVideoTab(true)}} 
            onMouseLeave= {()=> setIsHoveringVideoTab(false)}
            ><a style = {aStyle}>Old Introduction Video</a></li>
        </ul>
    </>
    );
}

export default Navbar