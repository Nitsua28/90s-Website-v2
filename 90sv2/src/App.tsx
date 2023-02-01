import React from 'react';
import Home from './home';
import TierListPage from './tierlistPage';
import Contact from './contact';
import { Route, Routes } from 'react-router-dom';
import OldIntroVid from './oldIntroVideoPage';
function App() {
  return (<>
    
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tierlist" element={<TierListPage/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/video" element={<OldIntroVid/>}/>
      </Routes>
    
  </>

  );
}

export default App;
