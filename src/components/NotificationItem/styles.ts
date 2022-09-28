import styled from "styled-components"


export const Box = styled.div`
  display:flex;
  width:100%;
  padding:16px;
  gap:15px;
  cursor:pointer;
  background-color:rgba(0,0,0,.5);
  transition:background-color .3s;
  border-bottom:1px solid #333;

  &:hover {
    background-color:rgba(0,0,0,.8);
  }
`

export const NotImage = styled.img`
  width:112px;
  border-radius:4px;
`

export const NotInfo = styled.div`
  display:flex;
  flex-direction:column;
`

export const NotTitle = styled.span`
  color:#b3b3b3;
  font-size:16px;
`

export const NotDate = styled.span`
  color:#777;
  font-size:14px;
`