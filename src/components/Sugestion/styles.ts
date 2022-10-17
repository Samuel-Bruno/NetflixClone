import styled from "styled-components"


export const Box = styled.div`
  background-color:#2F2F2F;
  height:220px;
  display:flex;
  padding:5px;
  gap:10px;
  cursor:pointer;
`

export const ImageArea = styled.div`
  position:relative;
  height:100%;

  img {
    height:100%;
    max-height:220px;
    width:auto;
    max-width:140px;
  }
`

export const MainInfo = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`

export const MainInfoTop = styled.div`
  display:flex;
  justify-content:space-between;
`

export const MainInfoLeft = styled.div``

export const Rate = styled.div`
  color:#46d369;
`

export const Year = styled.div`
  color:white;
`

export const EpisodesOrDuration = styled.div`
  color:white;
  margin-top:2px;
`

export const AddMyList = styled.div`

  a.addMyList {
    display:flex;
    justify-content:center;
    align-items:center;
    width:32px;
    height:32px;
    border-radius:22px;
    text-decoration:none;
    border:2px solid #888;
    color:#888;
    transition:border-color .3s, color .3s;

    &:hover {
      color:white;
      border-color:white;
    }
  }
`

export const Overview = styled.div`
  overflow-y:scroll;
  flex:1;

  span {
    color:#b7b7b7;
    font-family:'Netflix Sans Rg', Helvetica;
    font-size:13px;
  }

  &:hover {

    &::-webkit-scrollbar-thumb {
      background-color:white;
    }
  }
  
  &::-webkit-scrollbar {
    background:transparent;
    width:5px;
    padding:0 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color:transparent;
    margin-left:3px;
    border-radius:2px;

    transition:background-color .3s;
  }
`
