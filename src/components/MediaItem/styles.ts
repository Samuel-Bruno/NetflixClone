import styled from 'styled-components'


export const Box = styled.div`
  text-indent:0;
  width:154px;
  height:230px;
  border-radius:4px;
  cursor:pointer;
`

export const BoxContent = styled.div`
  display:flex;
  align-items:center;
  transition:transform .2s, box-shadow .3s, width .3s, height .3s;
  transition-delay:unset;
  background-color:rgb(30,30,30);
  width:154px;
  height:230px;
  transform-origin:center;
  overflow:hidden;

  div:hover > & {
    box-shadow:0 0 7px 4px rgba(0,0,0,.8);
    transition-delay:.3s;
    position:absolute;
    transform:scale(1.3);
    width:350px;

    img {
      height:calc(100% - 20px);
      margin-left:10px;
      transition-delay:.3s;
    }
  }
`

export const CoverArea = styled.img`
  width:auto;
  height:230px;
  border:none;
  transition:height .3s, margin .3s;
  transition-delay:unset;
  background-color:#181818;
`

export const OpenedOneArea = styled.div`
  height:calc(100% - 20px);
  padding-top:5px;
  display:flex;
  flex-direction:column;
  overflow-wrap:wrap;
  cursor:default;
  width:100%;
  margin:10px;
  opacity:0;
  transition:opacity .5s;
  color:white;

  div:hover > div > & {
    opacity:1;
  }
`

export const MediaInfo = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
`

export const MediaOverview = styled.div`
  display:flex;
  flex-direction:column;

  span {
    font-size:14px;
  }
  .overviewText {
    font-size:9px;
    color:#888;
    max-height:90px;
    overflow-y:scroll;
  
    &::-webkit-scrollbar {
      background:transparent;
      width:4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color:white;
      margin-left:3px;
      border-radius:2px;
    }
  }
`

export const MediaVoteAverage = styled.div`
  margin:10px 0;
  color:#46d369;
`

export const MediaCategories = styled.div`
  flex:1;
  display:flex;
  align-items:flex-end;
  gap:5px;
`

export const MediaCategory = styled.div`

  .categoryBall {
    height:100%;
    color:#888;
    font-size:10px;
    line-height:12px;
    margin-right:2px;
  }
  .categoryTitle {
    color:white;
    text-align:start;
    font-size:12px;
    font-family:'Netflix Sans Rg';
    font-weight:300;
  }
`

export const ActionsArea = styled.div`
  display:flex;
  gap:15px;

  a.playMediaLink,
  a.addMyList {
    display:flex;
    justify-content:center;
    align-items:center;
    width:26px;
    height:26px;
    border-radius:14px;
    text-decoration:none;
    border:2px solid #888;
  }

  a.playMediaLink {
    background-color:white;
    color:black;
    border-color:white;
  }

  a.addMyList {
    background-color:transparent;
    color:#888;
    transition:border-color .3s, color .3s;

    &:hover {
      border-color:white;
      color:white;
    }
  }
`

export const AddMyList = styled.a`
  display:flex;
  justify-content:center;
  align-items:center;
  width:26px;
  height:26px;
  margin:5px;
  border-radius:14px;
  color:black;
  text-decoration:none;
  border:2px solid #888;
  cursor:pointer;
`

export const MoreInfo = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:26px;
  height:26px;
  border-radius:14px;
  text-decoration:none;
  border:2px solid #888;
  cursor:pointer;
  transition:border-color .3s;

  &:hover {
    border-color:white;
  }
`

export const RateArea = styled.div`
  width:26px;
  height:26px;
  border-radius:14px;
  position:relative;
`

export const RateAreaIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:26px;
  height:26px;
  border-radius:14px;
  text-decoration:none;
  border:2px solid #888;
  cursor:pointer;
  overflow:hidden;

  svg {
    transform:scale(1.88);
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

export const BtnsArea = styled.div`
  display:flex;
  justify-content:space-between;
`