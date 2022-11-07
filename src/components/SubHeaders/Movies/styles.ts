import styled from "styled-components"


export const Wrapper = styled.div`
  position:absolute;
  width:100%;
  top:68px;
  z-index:100;
  background-color:transparent;
  transition:background-color .3s;

  &.sticky {
    position:fixed;
    top:0;
    background-color:rgb(20,20,20);
  }
`

export const PreContainer = styled.div`
  width:100%;
  height:100%;
`

export const Container = styled.div`
  max-width:1240px;
  padding:10px 0;
  margin:auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:white;
`

export const Left = styled.div`
  display:flex;
  align-items:center;
`

export const Title = styled.h1`
  font-size:38px;
  font-family:'Netflix Sans Md', Helvetica;
  font-weight:500;
`

export const FilterSeriesArea = styled.div`
  position:relative;
  margin-left:44px;
`

export const FilterBtn = styled.button`
  outline:none;
  border:1px solid white;
  background-color:black;
  color:white;
  padding:4px 48px 4px 10px;
  cursor:pointer;

  &:hover {
    background-color:#rgba(0,0,0,.7);
  }
  
  &:after {
    content:'';
    position:absolute;
    right:10px;
    top:100%;
    transform:translateY(-150%);
    border:5px solid transparent;
    border-top-color:white;
  }
`

export const FiltersItems = styled.div<{ showing: boolean }>`
  position:absolute;
  display:${p => p.showing ? 'flex' : 'none'};
  flex-direction:column;
  flex-wrap:wrap;
  top:100%;
  width:540px;
  max-height:200px;
  background-color:rgba(0,0,0,.7);
  border:1px solid #333;

  a {
    display:block;
    color:white;
    text-decoration:none;
    font-size:14px;
    padding:4px 8px;
    width:180px;

    &:hover {
      text-decoration:underline;
    }
  }
`

export const Right = styled.div``

export const DisplayModeToggle = styled.div`
  display:flex;
`

export const ListMode = styled.div`
  padding:6px 10px 1px;
  border:1px solid #ccc;
  border-right:none;
  color:#ccc;
  cursor:pointer;

  &:hover,
  &.active {
    color:white;
    border-right:1px solid white;
    border-color:white;
    
    & ~ div {
      border-left:none;
    }
  }
`

export const GridMode = styled.div`
  padding:6px 11px 1px 12px;
  border:1px solid #ccc;
  color:#ccc;
  cursor:pointer;

  &:hover,
  &.active {
    color:white;
    border-color:white;
  }
`