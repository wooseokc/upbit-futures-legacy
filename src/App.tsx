import React, { useState } from 'react';
import GlobalStyle from './styles/global'
import Header from './components/Header';
import InfoSector from './components/InfoSector';
import store from './stores/coinStore';

import { Provider } from "react-redux";

function App() {
  return (
    <> {
      window.innerWidth > 600 ? 
      <>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
          <InfoSector/>
        </Provider>
      
      </> :
      <div>Please use Upbit futures in PC</div>
    }
    </>
  );
}

export default App;
