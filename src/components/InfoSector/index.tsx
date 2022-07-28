import React from "react";
import { Provider } from "react-redux";

import InfoSection from "./style";
import InfoHeader from "../InfoHeader";

import store from "../../stores/coinStore";

export default function InfoSector () {

  return (
    <Provider store={store}>
      <InfoSection>
        <InfoHeader></InfoHeader>
  
      </InfoSection>
    </Provider>
  )
}