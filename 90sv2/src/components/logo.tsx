import React from "react";
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const logoStyle: Style =
    {
        'margin-left': '25%',
        height: '500px'
    };
export function Logo(){
    return  <img style={logoStyle} src="https://assets.fontsinuse.com/static/use-media-items/133/132434/full-2000x691/601f9c68/ssb64_logo_accurate_recreation.png">
            </img>
}