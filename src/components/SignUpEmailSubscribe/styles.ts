import styled from 'styled-components'


export const Title = styled.h3`{
  font-size: 19px;
  font-family: 'Netflix Sans Rg';
  font-weight: 200;
  margin-bottom: 20px;
}`

export const SubscribeArea = styled.div`{
  display: flex;
  align-items: stretch;
  height: 60px;
}`

export const InputArea = styled.div`{
  width: 450px;
  position: relative;
  height: 100%;
}`

export const InputLabel = styled.label`{
  color: grey;
  position: absolute;
  left: 10px;
  top: 19px;
  transition: .2s;
  cursor: text;
}`

export const SubscribeInput = styled.input`{
  width: 100%;
  height: 100%;
  border: 1px solid #777;
  outline: none;
  text-indent: 10px;
  font-family: 'Netflix Sans Rg';
  font-size: 15px;

  &:focus ~ label,
  &:not(:placeholder-shown):not(:focus) ~ label {
    top: 5px;
    font-size: 12px;
    font-family: 'Netflix Sans Md';
    font-weight: 500;
  }
}`

export const InputError = styled.div`{
  border-top: 2px solid #FFA00A;
  position: absolute;
  width: 100%;
  text-align: left;
  padding: 4px;
  margin-top: -1px;
  display: none;

  span {
    color: #FFA00A;
    font-size: 15px;
    font-family: 'Netflix Sans Rg';
  }
}`

export const SubscribeBtn = styled.div`{
  background-color: #E50914;
  width: 180px;
  border: none;
  outline: none;
  margin-left: 1px;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f40612;
  }

  span {
    color: white;
    font-size: 26px;
    font-family: 'Netflix Sans Rg';
    margin-right: 8px;
  }
}`