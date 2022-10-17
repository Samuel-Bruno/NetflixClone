import styled from 'styled-components'
import { getImgUrl } from '../../api/TmdbConfig'


export const Box = styled.div`
  border-radius:6px;
  border:1px solid transparent;
  border-bottom-color:#444;
  
  a {
    display:block;
    padding:34px 31px 31px;
    text-decoration:none;
    text-decoration:none;
    color:white;

    &:hover div .epImg .playIconArea {
      opacity:1;
    }
  }
  
  &:nth-child(1) {
    border-top-color:#444;
  }

`

export const Number = styled.span`
  color:#b7b7b7;
  font-family:'Netflix Sans Rg';
  font-size:26px;
`

export const Container = styled.div`
  display:flex;
  align-items:center;
  gap:16px;
  width:100%;
`

export const Picture = styled.div<{ bgImg: string }>`
  min-width:130px;
  height:70px;
  background-image:url(${getImgUrl}/w300${p => p.bgImg});
  background-size:cover;
  background-position:center;
  border-radius:6px;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const PlayIconArea = styled.div`
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
  opacity:0;
  transition:opacity .3s;
  background-color:rgba(0,0,0,.5);
  border:1px solid white;
`

export const Info = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:10px;
  height:100%;
`

export const EpisodeTitle = styled.span`
  color:white;
`

export const EpisodeOverview = styled.span`
  color:#b7b7b7;
  font-family:'Netflix Sans Rg';
  font-size:14px;
`
