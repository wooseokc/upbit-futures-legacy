import React, { useState } from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header';
import InfoSector from './components/InfoSector';
function App() {
  return (
    <> {
      window.innerWidth > 600 ? 
      <><GlobalStyle /><Header /><InfoSector/></> :
      <div>Please use Upbit futures in PC</div>
    }
    </>
  );
}

export default App;
