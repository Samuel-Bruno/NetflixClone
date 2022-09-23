import React from 'react'

import S from './styles.module.css'

import DownloadSTImage from '../../assets/images/strangerThings_download.jpg'
import STCover from '../../assets/images/strangerThings_downloadCover.png'
import DownloadGif from '../../assets/images/download-icon_gif.gif'

function SignUpDwlPromoMedia() {


  return (
    <div className={S.promoDownloadWrapper}>
      <img src={DownloadSTImage} alt="" className={S.promoImage} />
      <div className={S.downloadingBox}>
        <div className={S.downloadInfo}>
          <img src={STCover} alt="" className={S.downloadCoverImage} />
          <div>
            <span className={S.dwlTitle}>Stranger Things</span>
            <span className={S.dwlStatus}>Download em andamento...</span>
          </div>
        </div>
        <img src={DownloadGif} alt="" className={S.dwlGif} />
      </div>
    </div>
  )

}

export default SignUpDwlPromoMedia