import styled from "styled-components"


export const Box = styled.div`
  display:flex;
  align-items:center;
  
  a {
    // display:block;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:9px;
    color:#b3b3b3;
    text-decoration:none;

    &:hover {
      text-decoration:underline;
    }

    margin-bottom:11px;
  }
`

export const ProfileImage = styled.img`
  border-radius:4px;
`

export const IconBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:32px;

  svg {
    width:24px;
    height:24px;
  }
`

export const ProfileName = styled.span`
  font-family:Helvetica, 'Netflix Sans Rg';
  font-size:13px;
  font-weight:400;
  color:white;
`