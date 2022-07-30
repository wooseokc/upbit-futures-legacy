import styled from "styled-components";

export const OrderBox = styled.div`
  height : 620px;
  width :400px;
  background : #fff;
  position : absolute;
  top : 75px;
  left : 1080px;
`
export const TypeBox = styled.div`
  width :350px;
  height : 30px;
  position : relative;
  top : 20px;
  left 20px;
  display : flex;
  align-items: center;
  margin-bottom : 20px;
  
  font-size : 14px;
  font-weight : 400;
`
export const CategoryInfo = styled.div`
  width : 60px;
  font-size : 13px;
  margin-right : 20px;
  margin-left : 10px;
  font-weight : 600;
`
export const DefaultRadio = styled.input`
  display : block;
  height : 12px;

  margin-left : 12px;
  margin-right : 5px;
`

export const Range =styled.input`
  width :200px;
`

export const RangeIndex = styled.div`
  position : absolute;
  left : 305px;
`
export const RangeTimes = styled.div`
left : 43px;
width : 20px;
position : relative;
`

export const InputBox = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }
  width :260px;
  height : 28px;
  text-align:right;
  padding-right :10px;
`

export const ShortButton = styled.button`
  background: inherit ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer;
  width : 150px;
  height : 40px;
  border-radius : 5px;
  background : red;

  position : relative;
  left : 20px;
  font-size : 20px;
  font-weight : 700;
  color : #F5F5F5;
`
export const InputButton = styled.button`
  background: inherit ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer;
  width : 50px;
  height : 20px;
  border : 1px solid;
  border-radius : 3px;
  position : absolute;
  top : 60px;
  left : 90px;
  font-size : 10px;
  font-weight : 500;
`
export const LongButton = styled.button`
  background: inherit ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer;
  width : 150px;
  height : 40px;
  border-radius : 5px;
  background : green;

  position : relative;
  left : 30px;
  font-size : 20px;
  font-weight : 600;
  color : #F5F5F5;
`

export const EnterIndex = styled.div<any>`
  color : black;
  ${props => props.fluc > 0 && {color : 'red'}}
  ${props => props.fluc < 0 && {color : 'blue'}}
  position : absolute;
  right : 10px;
`
