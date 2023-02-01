import React from 'react';
import Navbar from './components/navbar';
import VerticalBar from './components/verticalBar';
import HorizontalBar from './components/horizontalBar';
import { Logo } from './components/logo';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

document.body.style.backgroundColor = "#c92828";

function App() {
  return (<>
      <Navbar></Navbar>
      <VerticalBar></VerticalBar>
      <HorizontalBar></HorizontalBar>
      <Logo></Logo>
    </>
  );
}

export default App;
