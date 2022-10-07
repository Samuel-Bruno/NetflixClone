import styled from "styled-components"


export const Row = styled.div`
  display:flex;
  flex-direction:column;
  gap:12px;
  margin:20px 0;
  text-indent:calc((100vw - 1260px) / 2);
`

export const CtgTitle = styled.h4`
  font-size:20px;
  color:white;
  font-weight:500;
`

export const ItemsArea = styled.div`
  display:flex;
  padding-left:calc((100vw - 1260px) / 2);
  // overflow-x:scroll;
  overflow-x:clip;
  // overflow-y:hidden;
  position:relative;

  &:hover {
    
    button.scrollIndicator {
      background-color:rgba(0,0,0,.4);
      &:after {
        display:block;
      }
    }
  }

  &::-webkit-scrollbar {
    height:0;
  }
`

export const ItemsContent = styled.div`
  display:flex;
  gap:20px;
  transition:margin-left .6s;
`

export const ItemsAreaLeftBtn = styled.button`
  position:absolute;
  left:0;
  width:100px;
  height:100%;
  background-color:transparent;
  border:none;
  outline:none;
  cursor:pointer;
  transition:background-color .2s;
  z-index:10;

  &:hover {
    background-color:rgba(0,0,0,.6);
    
    &:after {
      display:block;
    }
  }

  &:after {
    content:"\\e868";
    display:none;
    color:white;
    position:relative;
    font-size:32px;
  }
`

export const ItemsAreaRightBtn = styled.button`
  position:absolute;
  right:0;
  width:100px;
  height:100%;
  background-color:transparent;
  border:none;
  outline:none;
  cursor:pointer;
  transition:background-color .2s;
  z-index:3;

  &:hover {
    background-color:rgba(0,0,0,.6);
    
    &:after {
      display:block;
    }
  }

  &:after {
    content:"\\e867";
    display:none;
    color:white;
    position:relative;
    font-size:32px;
  }
`
