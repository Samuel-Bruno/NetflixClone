import styled from 'styled-components'


export const Footer = styled.footer`
  font-family: 'Netflix Sans Rg';
  font-size: 13px;
  color: #737373;
`

export const FooterContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  max-width: 1080px;
  padding: 70px 0 17px;
  margin: auto;
`

export const SocialMediaArea = styled.div`
  display:flex;
  gap:28px;

  a {
    color:white;
    text-decoration:none;
  }
`

export const LinksArea = styled.div`
  display: flex;
  margin: 0px 0 20px 0;
`

export const LinkCol = styled.div`
  flex: 1;
`

export const LinkColList = styled.ul`
  list-style: none;
`

export const FooterLinkItem = styled.li`
  margin: 15px 0;

  a {
    font-size:15px;
    color: #888;
    text-decoration: none;
    font-family: 'Netflix Sans Rg';

    &:hover {
      text-decoration: underline;
    }
  }
`

export const ServiceCodeArea = styled.div`
  width:fit-content;
  border-radius: 2px;
  padding: 10px;
  position: relative;
  margin-bottom: 24px;
  border:1px solid #888;
  cursor:pointer;

  &:hover {
    color:#FFF;
    border-color:#FFF;
  }
`

export const FooterBrandName = styled.div`
  span {
    font-family: 'Netflix Sans Rg';
    font-weight: 300;
  }

  span:nth-child(2) {
    margin-left:10px;
  }
`