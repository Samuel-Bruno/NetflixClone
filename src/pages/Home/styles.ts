import styled from "styled-components"
import { getImgUrl } from "../../api/TmdbConfig"


export const Page = styled.div`
  background-color:black;
`

export const HighLightMovie = styled.div<{ backdropUrl: string | null }>`
  ${p => p.backdropUrl ? `background-image:url(${getImgUrl}/original${p.backdropUrl});` : ''}
  background-size:100vw;
  background-position:top;
  background-repeat:no-repeat;
  height:110vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color:white;
`

export const MediaInfo = styled.div`
  display:flex;
  height:100%;
  flex-direction:column;
  justify-content:center;
  background-image: linear-gradient(90deg, rgba(0,0,0,.8) 20%, transparent);
  padding:0 calc((100vw - 1260px) / 2);
  gap:22px;
`

export const MediaTitle = styled.h1`
  font-size:48px;
  font-family:Helvetica, 'Netflix Sans Rg';
`

export const MediaInterestingData = styled.div`
  display:flex;
  align-items:center;
  gap:24px;
`

export const RateMedia = styled.span`
  color:#46d369;
`

export const MediaYear = styled.span``

export const MediaOverview = styled.h2`
  font-size:18px;
  font-weight:300;
  font-family:Helvetica, 'Netflix Sans Rg';
  color:#777;
  max-width:500px;
`

export const ButtonsArea = styled.div`
  display:flex;
  gap:10px;
`

export const MediaBtn = styled.div<{ btnFor: 'watch' | 'info' }>`
  background-color:${p => p.btnFor === 'watch' ? 'white' : 'rgba(100,100,100,.7)'};
  color:${p => p.btnFor === 'watch' ? 'black' : 'white'};
  cursor:pointer;
  border-radius:4px;
  font-size:18px;
  font-family:'Netflix Sans Rg';
  padding: .55em 1.2em;
  display:flex;
  align-items:center;
  gap:5px;

  &:has(a) {
    padding: 0;
    
    a {
      display:flex;
      text-decoration:none;
      color:black;
      gap:5px;
      align-items:center;
      font-family:'Netflix Sans Rg';
      padding: .55em 1.2em;
    }
  }

  &:hover {
    background-color:${p => p.btnFor === 'watch' ?
    'rgba(255,255,255,.7)' : 'rgba(100,100,100,.5)'
  };
  }
`

export const CategoriesArea = styled.div`
  display:flex;
  flex-direction:column;
  max-width:100vw;
`

export const CtgRow = styled.div`
  display:flex;
  flex-direction:column;
  gap:12px;
  margin:20px 0;
`

export const CtgTitle = styled.h4`
  font-size:20px;
  color:white;
  font-weight:500;
  margin-left:calc((100vw - 1260px) / 2);
`

export const ItemsArea = styled.div`
  display:flex;
  gap:20px;
  padding-left:calc((100vw - 1260px) / 2);
  overflow-x:scroll;
  overflow-y:hidden;

  &::-webkit-scrollbar {
    height:0;
  }
`