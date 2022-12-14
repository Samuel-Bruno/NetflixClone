import styled from "styled-components"


export const Wrapper = styled.header`
  padding-top: 21px;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1236px;
  height: 50px;
  margin: auto;

  svg {
    width: 134px;
    cursor: pointer;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  gap: 30px;
  align-items: stretch;
`

export const SelectLanguageBox = styled.div`
  background-color: rgba(0, 0, 0, .4);
  outline: none;
  border: 1px solid rgba(255, 255, 255, .8);
  border-radius: 1px;
  position: relative;

  &:before {
    content: "\\e896";
    position: absolute;
    height: inherit;
    align-items: center;
    color: #FFF;
    font-size: 12px;
    left:7px;
    top: 9px;
  }

  &:after {
    content: "\\e898";
    font-family: 'Netflix Icon';
    font-size: 6px;
    top: 2px;
    color: #FFF;
    position: absolute;
    align-items: center;
    right: 9px;
    top: 12px;
  }
`

export const Select = styled.select`
  background: transparent;
  color: white;
  border: none;
  outline: none;
  padding: 9px 22px;
  cursor: pointer;
  height: 100%;
  font-family: 'Netflix Sans Rg';
  font-size: 14px;
  -webkit-appearance: none;
`

export const Option = styled.option`
  background-color: rgba(0, 0, 0, .4);
  cursor: pointer;
`


export const SignInBtn = styled.div`
  background-color: #E50914;
  border-radius: 4px;

  a{
    color: white;
    text-decoration: none;
    width: 100%;
    display: block;
    text-align: center;
    font-size: 16px;
    font-family: 'Netflix Sans Rg';
    padding: .45em 1.1em;
  }
`