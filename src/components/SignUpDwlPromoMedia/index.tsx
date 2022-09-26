import React from 'react'

import * as S from './styles'

import DownloadSTImage from '../../assets/images/strangerThings_download.jpg'
import STCover from '../../assets/images/strangerThings_downloadCover.png'
import DownloadGif from '../../assets/images/download-icon_gif.gif'

function SignUpDwlPromoMedia() {


  return (
    <S.PromoDownloadWrapper>
      <S.PromoImage src={DownloadSTImage} alt="" />
      <S.DownloadingBox>
        <S.DownloadInfo>
          <S.DownloadCoverImage src={STCover} alt="" />
          <div>
            <S.DwlTitle>Stranger Things</S.DwlTitle>
            <S.DwlStatus>Download em andamento...</S.DwlStatus>
          </div>
        </S.DownloadInfo>
        <S.DwlGif src={DownloadGif} alt="" />
      </S.DownloadingBox>
    </S.PromoDownloadWrapper>
  )

}

export default SignUpDwlPromoMedia