import React from 'react';
import Navbar from './components/navbar';
import VerticalBar from './components/verticalBar';
import HorizontalBar from './components/horizontalBar';
import { Logo } from './components/logo';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

document.body.style.backgroundColor = "#c92828";

const content: Style =
    {
      'margin-left': '30%'
    }
function OldIntroVid() {
  return (<>
      <Navbar></Navbar>
      <VerticalBar></VerticalBar>
      <HorizontalBar></HorizontalBar>
      <Logo></Logo>
      <div style={content}>
        <iframe width="1000" height="720" src="https://www.youtube.com/embed/rIwWCioBpEM">
        </iframe>

      </div>
    </>
  );
}

export default OldIntroVid;
