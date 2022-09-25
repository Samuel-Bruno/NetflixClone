import styled from 'styled-components'


export const Question = styled.li`{
  background-color: #303030;
  color: white;
  overflow: hidden;
  margin-bottom: 8px;
}`

export const QTop = styled.div`{
  padding: 20px 24px 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor:pointer;
  
  svg {
    transform: rotate(-45deg);
  }
}`

export const QTitle = styled.span`{
  font-family: 'Netflix Sans Rg';
  font-size: 26px;
  font-weight: 400;
}`

export const QAnswer = styled.div<{ opened: boolean }>`{
  border-top: 1px solid #000;
  max-height: ${p => p.opened ? '2000' : '0'}px;
  transition: max-height .3s;
  
  span {
    margin: 28px 32px 36px;
    font-family: 'Netflix Sans Rg';
    font-size: 26px;
    font-weight: 300;
    cursor:text;
  }
}`