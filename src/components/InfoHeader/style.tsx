import styled from "styled-components";

export const Container = styled.div`
  height : 44px;
  border : 1px solid;
`

export const Forms = styled.a`
  display : inline-block;
  width : 200px;
  height : 40px;
  position : relative;
  top:50%;
  transform: translateY(-50%);
  border : 1px solid;
  cursor : pointer;
`

export const Img = styled.img`
  position : relative;
  top:50%;
  transform: translateY(-50%);
  left: 10px;
  width : 26px;
  height : 26px;
`

export const Korean = styled.span`
  display : inline-block;
  font-weight: 700;
  font-size: 20px;
  position : relative;
  left : 17px;
  top : 1px;
`

export const English = styled.span`
  font-size: 10px;
  position : relative;
  left : 20px;
  top : 2px;
`

export const Arrow = styled.div`
  width :20px;
  height : 20px;
  position : relative;
  left : 180px;
  top : -13px;
  
  background: url('https://cdn.upbit.com/upbit-web/images/ico_select_1.34dc566.png');
  background-repeat: no-repeat;
`