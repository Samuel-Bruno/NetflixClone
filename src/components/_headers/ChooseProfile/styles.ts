import styled from "styled-components"


export const Wrapper = styled.header`
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:68px;
  color:white;
  background-image: linear-gradient(180deg, rgba(0,0,0,.7) 10%, transparent);
`

export const Container = styled.div`
  max-width:1280px;
  margin:10px auto;
  padding:12px;

  svg {
    width:92px;
  }
`