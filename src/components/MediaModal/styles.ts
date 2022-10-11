import styled from "styled-components"
import { getImgUrl } from "../../api/TmdbConfig"


export const Wrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  overflow:hidden;
  padding-top:32px;
  z-index:1000;
  background-color:rgba(0,0,0,.6);
  display:flex;
  justify-content:center;
  
`

export const ModalContainer = styled.div`
  width:100%;
  max-width:850px;
  height:200vh;
  border-radius:10px;
  background-color:#141414;
  overflow:hidden;
`

export const Top = styled.div`
  position:relative;
`

export const Backdrop = styled.div<{ backdropUrl: string | null }>`
  position:relative;
  ${p => p.backdropUrl ? `background-image:url(${getImgUrl}/original${p.backdropUrl});` : ''}
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  height:510px;
  cursor:pointer;

  &:before {
    content:'';
    width:100%;
    position:absolute;
    top:calc(100% - 90px);
    height:90px;
    background-image: linear-gradient(0deg, rgba(20,20,20,1) 30%, transparent);
  }
`

export const BtnsArea = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  position:absolute;
  left:52px;
  bottom:95px;

  a.addMyList {
    display:flex;
    justify-content:center;
    align-items:center;
    width:39px;
    height:39px;
    border-radius:22px;
    text-decoration:none;
    border:2px solid #888;

    svg {
      transform:scale(1.2);
    }
  }

  a.addMyList {
    background-color:transparent;
    color:white;
    transition:border-color .3s;

    &:hover {
      border-color:white
    }
  }
`

export const MediaBtn = styled.div`
  background-color:white;
  color:black;
  cursor:pointer;
  border-radius:4px;
  font-size:18px;
  gap:5px;
    
  a {
    display:flex;
    text-decoration:none;
    color:black;
    gap:5px;
    align-items:center;
    font-family:'Netflix Sans Rg';
    padding: .46em 1.2em;
  }

  &:hover {
    background-color:rgba(255,255,255,.7);
  }
`

export const RateArea = styled.div`
  width:39px;
  height:39px;
  border-radius:20px;
  position:relative;
`

export const RateAreaIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:39px;
  height:39px;
  border-radius:20px;
  text-decoration:none;
  border:2px solid #888;
  cursor:pointer;
  overflow:hidden;

  svg {
    transform:scale(1.6);
  }
`

export const RateOptions = styled.div`
display:flex;
position:absolute;
align-items:center;
width:0;
height:0;
left:50%;
top:50%;
transform:translateX(-50%) translateY(-50%);
transform-origin:center;
background-color:rgb(30,30,30);
box-shadow:0 0 5px 2px rgb(5,5,5);
border-radius:16px;
gap:10px;
padding:5px;
opacity:0;
transition:opacity .5s, width .2s, box-shadow .3s;

div:hover > & {
  width:108px;
  height:36px;
  opacity:1;

  .dislikeIt,
  .loveIt {
    transform:translateX(0);
  }
}

.dislikeIt {
  transform:translateX(137%);
}
.likeIt {
  z-index:5;
  background-color:rgba(30,30,30,.8);
}
.loveIt {
  transform:translateX(-140%);
}

a.rateOption {
  display:flex;
  justify-content:center;
  align-items:center;
  width:26px;
  height:26px;
  border-radius:14px;
  text-decoration:none;
  transition:background-color .2s, transform .4s;
  overflow:hidden;

  svg {
    transform:scale(1.6);
  }
  
  &:hover {
    background-color:#737373;
  }
}
`

export const MediaInfo = styled.div`
  display:flex;
  padding:0 50px;
  gap:30px;
  margin-bottom:50px;
`

export const MediaData = styled.div`
  flex:1;
`

export const FirstRow = styled.div`
  display:flex;
  gap:10px;
  color:white;
  font-family:'Netflix Sans Rg', Helvetica Neue;
  font-size:16px;
  font-weight:300;
  margin-bottom:30px;
  
  .interestRate {
    color:#46d369;
  }
  `

export const MediaTags = styled.div`
  width:240px;
  display:flex;
  flex-direction:column;
  gap:20px;
  
  .tagName {
    color:#555;
    font-family:'Netflix Sans Rg', Helvetica Neue;
    font-size:14px;
    font-weight:300;
  }
  
  .castNames {
    color:white;
    font-family:'Netflix Sans Rg', Helvetica Neue;
    font-size:14px;
    font-weight:300;
  }
`

export const OverviewRow = styled.div`
  color:white;
  font-size:14px;
  font-family:'Netflix Sans Rg';
`

export const MediaEpisodes = styled.div``

export const EpisodesTop = styled.div`
  display:flex;
  padding:0 50px;
  justify-content:space-between;
  margin-bottom:10px;

  .episodesTitle {
    font-size:24px;
    color:white;
  }

  .mediaTitleOnSelect {
    color:white;
    font-size:18px;
  }
`

export const EpisodesList = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  padding:0 50px;
  margin-bottom:10px;
`

export const Sugestions = styled.div``

export const MediaTrailers = styled.div``

export const MediaAbout = styled.div``
