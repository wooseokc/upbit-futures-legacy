import styled from "styled-components";

export const InfoBox = styled.div`
  width: 100%;
  height : 90px;
  border : 1px solid;
`

export const CurrentBox = styled.div`
  height : 70px;
  width : 300px;
  position : relative;
  postion : relative;
  top : 50%;
  transform: translateY(-50%);
  left : 20px

`

export const Price = styled.strong<any>`
  color : black;
  ${(props) => props.fluc === 'RISE' && {color : '#c84a31'}}
  ${(props) => props.fluc === 'FALL' && {color : 'blue'}}
  font-size: 32px;
  font-weight: 900;
`

export const PriceKRW = styled.span<any>`
  color : black;
  ${(props) => props.fluc === 'RISE' && {color : '#c84a31'}}
  ${(props) => props.fluc === 'FALL' && {color : 'blue'}}
  font-size: 15px;
  font-weight: 400;
`

export const FromYesterday = styled.span<any>`
  color : black;
  ${(props) => props.fluc === 'RISE' && {color : '#c84a31'}}
  ${(props) => props.fluc === 'FALL' && {color : 'blue'}}
  font-size: 15px;
  font-weight: 400;
  margin-left : 10px;

  ::before  {
    content : '${props => props.fluc === 'FALL' ? '-' : '+'}'
  }
`

export const ChangedPrice = styled.span<any>`
  color : black;
  ${(props) => props.fluc === 'RISE' && {color : '#c84a31'}}
  ${(props) => props.fluc === 'FALL' && {color : 'blue'}}
  font-size: 15px;
  font-weight: 400;
  margin-left : 5px;

::before  {
  content : '${props => props.fluc === 'FALL' ? '▼' : '▲'}'
}
`


