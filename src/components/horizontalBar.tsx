import React from "react";
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const horizontalBarStyle: Style =
    {
        'list-style-type': 'none',
        'margin-bottom': '100px',
        padding: '0',
        width: '100%',
        'background-color': 'white',
        height: '100px', 
        position: 'fixed', 
        overflow: 'auto', 
        'z-index': '-999',
        bottom: 0
    };
export function HorizontalBar(){
    return <ul style={horizontalBarStyle}></ul>
}

export default HorizontalBar