import styled from 'styled-components'

import FirstBreakBG from '../../assets/images/signBg.jpg'


export const Page = styled.div`{
  display: flex;
  flex-direction: column;
  background-color: #000;
}`

export const FirstBrake = styled.section`{
  background-image: url(${FirstBreakBG});
  background-position: center;
  background-size: cover;
  height: 660px;
}`

export const FirstBrakeWrapper = styled.div`{
  background: linear-gradient(rgba(0, 0, 0, .8),
      rgba(0, 0, 0, .4),
      rgba(0, 0, 0, .9));
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`

export const BannerCenter = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 138px;

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 500;
    line-height: 52px;
  }
  
  h2 {
    font-size: 26px;
    font-family: 'Netflix Sans Rg';
    font-weight: 400;
    margin-bottom: 30px;
  }
}`


export const FaqSection = styled.section`{
  border-top: 8px solid #222;
  padding: 70px 45px;
}`

export const FaqSectionContainer = styled.div`{
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;

  h1 {
    text-align: center;
    font-family: 'Netflix Sans Md';
    font-size: 50px;
    font-weight: 500;
    color: white;
    margin-bottom: 48px;
  }
}`


export const QuestionsList = styled.ul`{
  width: 815px;
  list-style: none;
}`

export const EmailArea = styled.div`{
  margin: 50px 0 10px;
  color: white;
}`