import React from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header';
import InfoSector from './components/InfoSector';
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <InfoSector/>
    </>
  );
}

export default App;
