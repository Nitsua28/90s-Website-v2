import React from 'react';
import Navbar from './components/navbar';
import VerticalBar from './components/verticalBar';
import HorizontalBar from './components/horizontalBar';
import CharacterGrid from './components/characterGrid';
import { Logo } from './components/logo';
import type * as CSS from 'csstype';

interface Style extends CSS.Properties, CSS.PropertiesHyphen {}

document.body.style.backgroundColor = "#c92828";

const textStyle: Style =
    {
      color:'white',
      'font-family': 'sans-serif',
      width: '100%',
      'justify-content': 'center'
    };

const content: Style =
    {
      'margin-left': '30%'
    }
function App() {
  return (<>
      <Navbar></Navbar>
      <VerticalBar></VerticalBar>
      <HorizontalBar></HorizontalBar>
      <Logo></Logo>
      <div style={content}>
        <h1 style={textStyle}>This is a Super Smash Bros 64 Fan Page</h1>
        <p style={textStyle}>Super Smash Bros. (retroactively referred to as Super Smash Bros. 64 or Smash 64)
          is a 1999 crossover fighting video game developed by HAL Laboratory and published by
          Nintendo for the Nintendo 64. It was first released in Japan on January 21, 1999, in
          North America on April 26, 1999, and in Europe on November 19, 1999. The first installment
          in the Super Smash Bros. series, it is a crossover between several different Nintendo
          franchises, including Mario, The Legend of Zelda, Star Fox, Yoshi, Donkey Kong, Metroid,
          F-Zero, Mother, Kirby, and Pokémon. It presents a cast of characters and locations from
          these franchises and allows players to use each character's unique skills and the stage's
          hazards to inflict damage, recover health, and ultimately knock opponents off the stage.
        </p>
        <CharacterGrid></CharacterGrid>
      </div>
    </>
  );
}

export default App;
