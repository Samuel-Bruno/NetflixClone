import styled from "styled-components"


export const Box = styled.li<{ active: boolean }>`
  margin-right:20px;

  a {
    cursor:${p => p.active ? 'context-menu' : 'pointer'};
    text-decoration:none;
    color:white;
    transition:color .3s;
    font-family: Helvetica, 'Netflix Sans Rg';
    font-weight:${p => p.active ? '600' : '200'};
    font-size:14px;

    &:hover {
      color:${p => p.active ? 'white' : '#b3b3b3'};
    }
  }
`