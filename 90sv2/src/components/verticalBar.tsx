import React from "react";
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const verticalBarStyle: Style =
    {
        'list-style-type': 'none',
        'margin-left': '100px',
        padding: '0',
        width: '100px',
        'background-color': 'white',
        height: '100%', 
        position: 'fixed', 
        overflow: 'auto', 
        'z-index': '999',
    };
export function VerticalBar(){
    return <ul style={verticalBarStyle}></ul>
}

export default VerticalBar