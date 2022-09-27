import styled from 'styled-components'


export const Footer = styled.footer`{
  border-top: 8px solid #222;
  font-family: 'Netflix Sans Rg';
  font-size: 13px;
  color: #737373;
}`

export const FooterContainer = styled.div`{
  width: 100%;
  max-width: 980px;
  padding: 70px 45px 35px;
  margin: auto;

  h6 {
    font-size: 16px;
    font-family: 'Netflix Sans Rg';
    font-weight: 300;

    a {
      text-decoration: none;
      color: #737373;
      font-size: 16px;
      font-family: 'Netflix Sans Rg';
      font-weight: 300;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}`


export const LinksArea = styled.div`{
  display: flex;
  margin: 16px 0 20px 0;
}`

export const LinkCol = styled.div`{
  flex: 1;
}`

export const LinkColList = styled.ul`{
  list-style: none;
}`

export const FooterLinkItem = styled.li`{
  margin: 15px 0;

  a {
    color: #737373;
    text-decoration: none;
    font-family: 'Netflix Sans Rg';

    &:hover {
      text-decoration: underline;
    }
  }
}`

export const SelectLanguageBox = styled.div`{
  background-color: rgb(0, 0, 0);
  border-radius: 2px;
  width: fit-content;
  position: relative;
  margin-bottom: 24px;

  &::before {
    content: "\\e896";
    font-family: 'Netflix Icon';
    font-size: 16px;
    top: 2px;
    color: #999;
    position: absolute;
    align-items: center;
    margin-left: 15px;
    top: 15px;
  }

  &::after {
    content: "\\e898";
    font-family: 'Netflix Icon';
    font-size: 6px;
    top: 2px;
    color: #999;
    position: absolute;
    align-items: center;
    right: 11px;
    top: 22px;
  }
}`

export const Select = styled.select`{
  background: transparent;
  color: #999;
  outline: none;
  line-height: 1.7;
  border: 1px solid rgb(115, 115, 115, .5);
  padding: 12px 26px 12px 50px;
  cursor: pointer;
  height: 100%;
  font-family: 'Netflix Sans Rg';
  font-size: 16px;
  -webkit-appearance: none;
  width: 100%;
  text-indent: 0;
}`

export const Option = styled.option`{
  background-color: rgb(0, 0, 0);
  width: 100%;
  cursor: pointer;
}`

export const FooterBrandName = styled.span`{
  font-family: 'Netflix Sans Rg';
  font-weight: 300;
}`