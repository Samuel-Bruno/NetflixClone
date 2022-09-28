import styled from "styled-components"


export const Wrapper = styled.header<{ transparentBg: boolean }>`
  position:fixed;
  top:0;
  left:0;
  right:0;
  background-color:${p => p.transparentBg ? 'transparent' : 'rgb(20,20,20)'};
  transition:background-color .3s;
`

export const Container = styled.div`
  max-width:1240px;
  height:68px;
  margin:auto;
  display:flex;
  align-items:center;
  color:white;

  a {
    display:flex;
    align-items:center;
    height:100%;
    svg {
      width:92px;
    }
  }
`

export const Nav = styled.nav`
  flex:1;
`

export const Menu = styled.ul`
  list-style:none;
  display:flex;
  margin-left:45px;
`

export const RightMenu = styled.div`
  display:flex;
  align-items:center;
  height:100%;
  
  a#toKids {
    cursor:pointer;
    text-decoration:none;
    color:white;
    font-family: Helvetica, 'Netflix Sans Rg';
    font-weight:200;
    font-size:14px;
    margin-right:18px;
    height:fit-content;
  }
`

export const SearchBox = styled.div<{ opened: boolean }>`
  overflow:hidden;
  height:36px;
  margin-right:15px;
  display:flex;
  align-items:stretch;
  transition:width .5s, border-color .5s;
  width:${p => p.opened ? '280' : '40'}px;
  border:1px solid ${p => p.opened ? 'white' : 'transparent'};

  input {
    margin-left:${p => p.opened ? '0' : '40'}px;
    opacity: 1;
  }
`

export const SearchBoxIconArea = styled.div`
  width:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`

export const SearchInput = styled.input`
  border:none;
  outline:none;
  color:white;
  flex:1;
  background:transparent;
  font-size:14px;
  font-family:Helvetica, 'Netflix Sans Rg';
  font-weight:300;
  opacity: 0;
  transition:margin-left ease-out 1s, opacity .4s;
`

export const BellArea = styled.div`
  margin-right:18px;
  position:relative;
  height:100%;
  display:flex;
  align-items:center;

  &:hover {

    #notificationsArea {
      display:block;
    }
  }
`

export const BellIconArea = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:30px;
  height:30px;
  cursor:pointer;
`

export const BellContentArea = styled.div`
  display:none;
  width:406px;
  height:370px;
  position:absolute;
  background-color:rgba(0,0,0,.4);
  top:calc(100% + 3px);
  right:0;
  overflow-x:hidden;
  overflow-y:scroll;
`

export const UserArea = styled.div``

export const UserProfileArea = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  
  &:hover {

    #dropdownArrow {
      transform:rotate(180deg);
      margin-top:0;
    }
  }
`

export const UserProfilePhoto = styled.img`
  width:32px;
  height:32px;
  border-radius:4px;
`

export const DropDownArrow = styled.div`
  border:5px solid transparent;
  border-top:5px solid white;
  margin-top:5px;
  cursor:pointer;
  transition transform .5s, margin-top .2s;
`