import React from "react";
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

const characterGridStyle: Style =
    {
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr 1fr",
        "grid-template-rows": "1fr 1fr 1fr",
        gap: "3px 3px",
        "grid-auto-flow": "row",

    };
export function CharacterGrid(){
    const charData = [
        {
            "Name":"Mario",
            "Link": "https://www.ssbwiki.com/Mario_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/d/d0/SSB64_Mario.gif"
        },
        {
            "Name":"Yoshi",
            "Link": "https://www.ssbwiki.com/Yoshi_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/5/57/SSB64_Yoshi.gif"
        },
        {
            "Name":"Donkey Kong",
            "Link": "https://www.ssbwiki.com/Donkey_Kong_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/a/ab/SSB64_DK.gif"
        },
        {
            "Name":"Link",
            "Link": "https://www.ssbwiki.com/Link_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/5/52/SSB64_Link.gif"
        },
        {
            "Name":"Samus",
            "Link": "https://www.ssbwiki.com/Samus_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/3/39/SSB64_Samus.gif"
        },
        {
            "Name":"Kirby",
            "Link": "https://www.ssbwiki.com/Kirby_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/6/6d/SSB64_Kirby.gif"
        },
        {
            "Name":"Fox",
            "Link": "https://www.ssbwiki.com/Fox_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/6/6c/SSB64_Fox.gif"
        },
        {
            "Name":"Pikachu",
            "Link": "https://www.ssbwiki.com/Pikachu_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/7/7c/SSB64_Pikachu.gif"
        },
        {
            "Name":"Luigi",
            "Link": "https://www.ssbwiki.com/Luigi_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/b/b0/SSB64_Luigi.gif"
        },
        {
            "Name":"Jigglypuff",
            "Link": "https://www.ssbwiki.com/Jigglypuff_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/e/e1/SSB64_Jiggly.gif"
        },
        {
            "Name":"Captain Falcon",
            "Link": "https://www.ssbwiki.com/Captain_Falcon_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/5/5d/SSB64_Falcon.gif"
        },
        {
            "Name":"Ness",
            "Link": "https://www.ssbwiki.com/Ness_(SSB)",
            "Image": "https://ssb.wiki.gallery/images/b/ba/SSB64_Ness.gif"
        }
    ]
    const gridSquare = charData.map(
        (element)=>{
            return( <>
                <a href={element.Link}>
                <img src={element.Image}>
                    </img>
                </a>
                </>
            )
        }
    )
    return (
        <div style={characterGridStyle}>
            {gridSquare}
        </div>

    );
}

export default CharacterGrid