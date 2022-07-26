import React from "react";
import { Container, Forms, Img, Korean, English, Arrow } from "./style";

export default function InfoHeader () {

  return (
    <Container>
      <Forms>
        <Img src={'https://static.upbit.com/logos/BTC.png'}></Img>
        <Korean>비트코인</Korean>
        <English>BTC/KRW</English>
        <Arrow></Arrow>
      </Forms>
    </Container>
  )
}