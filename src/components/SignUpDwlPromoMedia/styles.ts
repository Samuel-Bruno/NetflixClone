import styled from 'styled-components'


export const PromoDownloadWrapper = styled.div`{
  position: relative;
  margin: -5% 0 -5% 0;
  display: flex;
  justify-content: center;
}`

export const PromoImage = styled.img`{
  position: relative;
  z-index: 2;
  border: 0;
  max-width: 100%;
}`

export const PromoVideoArea = styled.div`{
  position: absolute;
  width: 73%;
  height: auto;
  top: 48%;
  left: 49.5%;
  transform: translateX(-50%) translateY(-50%);

  video {
    width: 100%;
  }
}`

export const DownloadingBox = styled.div`{
  border: 2px solid #222;
  border-radius: 10px;
  padding: 5px 10px 10px;
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  position: absolute;
  z-index: 3;
  background-color: #000;
  bottom: 10%;
}`

export const DownloadInfo = styled.div`{
  display: flex;
  gap: 15px;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
}`

export const DownloadCoverImage = styled.img`{
  width: 50px;
}`

export const DwlTitle = styled.span`{
  font-size: 16px;
  color: white;
}`

export const DwlStatus = styled.span`{
  font-size: 16px;
  font-family: 'Netflix Sans Rg';
  color: #005FEB;
}`

export const DwlGif = styled.img`{
  width: 48px;
  margin-left: 5px;
}`