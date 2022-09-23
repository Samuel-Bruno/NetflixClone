import React from 'react'
import SignUpDwlPromoMedia from '../SignUpDwlPromoMedia';

import S from './styles.module.css'

type Props = {
  title: string;
  desc: string;
  img?: string;
  reverse: boolean;
  video?: string;
  dwlMediaAnimation?: boolean;
}


function SignUpPromoSection({ title, desc, img, reverse, video, dwlMediaAnimation }: Props) {


  return (
    <section className={S.promoSection}>
      <div className={S.promoSectionContainer}>
        {reverse &&
          <>
            <div className={S.promoSectionMediaAreaReverse}>
              {dwlMediaAnimation && <SignUpDwlPromoMedia />}
              {!dwlMediaAnimation &&
                <div className={S.promoMediaWrapperReverse}>
                  <img src={img} alt="" className={S.promoImage} />
                </div>
              }
            </div>
            <div className={S.promoSectionTextsReverse}>
              <span className={S.promoSectionTitle}>{title}</span>
              <span className={S.promoSectionDesc}>{desc}</span>
            </div>
          </>
        }
        {reverse === false &&
          <>
            <div className={S.promoSectionTexts}>
              <span className={S.promoSectionTitle}>{title}</span>
              <span className={S.promoSectionDesc}>{desc}</span>
            </div>
            <div className={S.promoSectionMediaArea}>
              <div className={S.promoMediaWrapper}>
                <img src={img} alt="" className={S.promoImage} />
                {video !== undefined &&
                  <div className={S.promoVideoArea}>
                    <video className={S.promoVideo} autoPlay playsInline muted loop >
                      <source src={video} type="video/mp4"></source>
                    </video>
                  </div>
                }
              </div>
            </div>
          </>
        }
      </div>
    </section>
  )

}

export default SignUpPromoSection