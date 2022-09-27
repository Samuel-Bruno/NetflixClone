import styled from 'styled-components'

import BgPage from '../../assets/images/signBg.jpg'


export const Page = styled.div`{
  background-image:url(${BgPage});

  color:white;
}`

export const PageContainer = styled.div`{
  background-color:rgba(0,0,0,.6);
  display: flex;
  flex-direction: column;
}`