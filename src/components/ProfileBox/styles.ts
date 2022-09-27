import styled from "styled-components"


export const ProfileArea = styled.div`{
  text-align:center;
  max-width:10vw;
  height:fit-content;

  a {
    text-decoration:none;
    display:block;
    width:inherit;
    height:100%;
  }
  
  &:hover {

    div:after {
      border:3px solid #b3b3b3;
    }

    span {
      color:#b3b3b3;
    }
  }
}`

export const Box = styled.div<{ imageUrl: string }>`{
  max-height:200px;
  max-width:200px;
  min-width:84px;
  min-height:84px;
  height:10vw;
  width:10vw;
  background-image:url(${p => p.imageUrl});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  border-radius:4px;
  position:relative;

  &:after {
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    border:3px solid transparent;
    box-sizing:border-box;
    left:0;
    border-radius:4px;
  }
}`

export const Name = styled.span`{
  display:block;
  padding:.6em 0;
  color:#666;
  font-size:18px;
  word-wrap:normal;
  overflow:hidden;
  line-height:1.2em;
}`