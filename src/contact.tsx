import React from 'react';
import Navbar from './components/navbar';
import VerticalBar from './components/verticalBar';
import HorizontalBar from './components/horizontalBar';
import { Logo } from './components/logo';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

document.body.style.backgroundColor = "#c92828";

const listStyle: Style =
    {
      'text-align': 'center'
    };

const contactListStyle: Style =
    {
        "text-align": "center",
        "margin-right": "30%",
        color: "white"
    };

const content: Style =
    {
      'margin-left': '30%'
    }
function Contact() {
  return (<>
      <Navbar></Navbar>
      <VerticalBar></VerticalBar>
      <HorizontalBar></HorizontalBar>
      <Logo></Logo>
      <div style={content}>
        <ol style ={contactListStyle}>
            <b>Nintendo</b>
            <li style = {listStyle}>1-(800)-255-3700</li>
            <br></br>
            <b>Austin Evan Chan</b>
            <li style = {listStyle}>austinchan951@outlook.com</li>
            <li style = {listStyle}>Discord: Nitsua28#0543</li>
        </ol>

      </div>
    </>
  );
}

export default Contact;
