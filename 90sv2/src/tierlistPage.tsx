import React from 'react';
import Navbar from './components/navbar';
import VerticalBar from './components/verticalBar';
import HorizontalBar from './components/horizontalBar';
import CharacterGrid from './components/characterGrid';
import { Logo } from './components/logo';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

document.body.style.backgroundColor = "#c92828";

const tierListTextStyle: Style =
    {
      'text-align': 'center'
    };

const tierListStyle: Style =
    {
      width: '1200px',
      height: '400px'
    };

const content: Style =
    {
      'margin-left': '30%'
    }
function TierListPage() {
  return (<>
      <Navbar></Navbar>
      <VerticalBar></VerticalBar>
      <HorizontalBar></HorizontalBar>
      <Logo></Logo>
      <div style={content}>
      <img style={tierListStyle} src="https://www.marioboards.com/attachments/5963/">
        </img>
      <h1 style={tierListTextStyle}>MAKE KIRBY TOP TIER AGAIN</h1>

      </div>
    </>
  );
}

export default TierListPage;
