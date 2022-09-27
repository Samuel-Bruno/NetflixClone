import styled from "styled-components"


export const Page = styled.div`{
  background-color:#141414;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}`

export const Container = styled.div`{
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:14px auto 0;
}`

export const Title = styled.h1`{
  color:white;
  font-family:'Netflix Sans Rg';
  font-size:48px;
  font-weight:500;
}`

export const ProfilesArea = styled.div`{
  display:flex;
  justify-content:center;
  gap:27px;
  width:100%;
  margin:30px 0;
}`

export const ManageProfilesBtn = styled.div`{
  margin-top:22px;
  border:1px solid #666;
  font-size:16px;
  
  a {
    display:block;
    color:#666;
    width:100%;
    height:100%;
    padding:.5em 1.5em;
    text-decoration:none;
  }

  &:hover {
    border-color:#b3b3b3;

    a {
      color:#b3b3b3;
    }
  }
}`