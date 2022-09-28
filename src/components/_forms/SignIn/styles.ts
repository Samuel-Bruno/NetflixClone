import styled from "styled-components"


export const Box = styled.div`
  padding: 57px 68px;
  margin: 20px auto 90px;
  background-color:rgba(0,0,0,.7);
  border-radius:4px;
  max-width:450px;
`

export const FormTitle = styled.h1`
  font-size:32px;
  font-family: 'Netflix Sans Md';
  font-weight:500;
  margin-bottom:28px;
  color:white;
`

export const FormArea = styled.div``

export const InputsArea = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:24px;
`

export const InputArea = styled.div`
  position:relative;
`

export const Input = styled.input`
  width:100%;
  background-color:#333333;
  border-radius:4px;
  height:50px;
  font-family: 'Netflix Sans Rg';
  font-size:16px;
  color:white;
  border:none;
  outline:none;
  padding: 15px 10px 0 20px;
  margin-bottom:16px;

  &:focus ~ label,
  &:not(:placeholder-shown):not(:focus) ~ label {
    top:6px;
    font-size: 11px;
    font-family: 'Netflix Sans Rg';
    font-weight: 400;
  }
`
export const InputLabel = styled.label`
  color: grey;
  position: absolute;
  left: 20px;
  top: 15px;
  transition: .2s;
  cursor: text;
  font-size: 16px;
  font-family: 'Netflix Sans Rg';
  font-weight: 300;
`

export const InputError = styled.div<{ showing: boolean }>`
  display:${p => p.showing ? 'block' : 'none'};
  margin-top:-18px;
  margin-bottom:10px;
  width:100%;
  padding:4px 0;

  span {
    margin:3px;
    color:#e87c03;
    font-size:13px;
    font-family: 'Netflix Sans Rg';
    font-weight:300;
  }
  
  &:before {
    position:absolute;
    margin-top:-4px;
    content:'';
    width:100%;
    border-bottom:2px solid #e87c03;
    border-bottom-left-radius:2px;
    border-bottom-right-radius:2px;
  }
`

export const SignInBtn = styled.button`
  background-color:#E50914;
  border-radius:4px;
  border:none;
  outline:none;
  width:100%;
  margin-bottom:12px;

  a {
    display:block;
    padding:14px;
    color:white;
    text-decoration:none;
    font-size:16px;
    width:100%;
    height:100%;
  }
`

export const FormOptions = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:relative;

  a {
    color:#b3b3b3;
    text-decoration:none;
    font-size:13px;
    font-family:'Netflix Sans Rg';
    font-weight:200;
    margin-top:1px;

    &:hover {
      text-decoration:underline;
    }
  }
`

export const RememberCheckbox = styled.input`
  left:0;
  opacity:0;
  top:0;
  position:absolute;
`

export const RememberLabel = styled.label`
  flex:1;
  display:flex;
  align-items:center;

  span {
    margin-left:20px;
    font-family:'Netflix Sans Rg';
    font-size:13px;
    color:#b3b3b3;
    font-weight:300;
    margin-top:1px;
  }
  
  &:before {
    content:'';
    display:block;
    position:absolute;
    width:16px;
    height:16px;
    top:2px;
    background-color:#777;
    border-radius:2px;
  }

  &:after {
    content:'\\e804';
    position:absolute;
    color:black;
    font-size:18px;
    top:-1px;
    left:-1px;
  }
`

export const OtherLinksArea = styled.div`
  margin:98px auto;
  color:#b3b3b3;
  display:flex;
  flex-direction:column;
  gap:10px;
`

export const SignNowArea = styled.span`
  font-size:16px;
  font-family:"Netflix Sans Rg";
  font-weight:200;
  
  a {
    color:white;
    text-decoration:none;
    font-family:"Netflix Sans Rg";
    font-weight:300;

    &:hover {
      text-decoration:underline;
    }
  }
`

export const CaptchaArea = styled.span`
  font-family:"Netflix Sans Rg";
  font-weight:300;
  font-size:13px;

  a {
    color:blue;
    text-decoration:none;
    font-family:"Netflix Sans Rg";
    font-weight:300;

    &:hover {
      text-decoration:underline;
    }
  }
`