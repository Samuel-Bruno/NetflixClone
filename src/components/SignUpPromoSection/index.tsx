import React from 'react'
import SignUpDwlPromoMedia from '../SignUpDwlPromoMedia';

import * as S from './styles'

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
    <S.PromoSection>
      <S.PromoSectionContainer>
        {reverse &&
          <>
            <S.PromoSectionMediaArea reverse>
              {dwlMediaAnimation && <SignUpDwlPromoMedia />}
              {!dwlMediaAnimation &&
                <S.PromoMediaWrapper reverse>
                  <S.PromoImage src={img} alt="" />
                </S.PromoMediaWrapper>
              }
            </S.PromoSectionMediaArea>
            <S.PromoSectionTexts reverse>
              <>{title}</>
              <S.PromoSectionDesc>{desc}</S.PromoSectionDesc>
            </S.PromoSectionTexts>
          </>
        }
        {reverse === false &&
          <>
            <S.PromoSectionTexts>
              <S.PromoSectionTitle>{title}</S.PromoSectionTitle>
              <S.PromoSectionDesc>{desc}</S.PromoSectionDesc>
            </S.PromoSectionTexts>
            <S.PromoSectionMediaArea>
              <S.PromoMediaWrapper>
                <S.PromoImage src={img} alt="" />
                {video !== undefined &&
                  <S.PromoVideoArea>
                    <video autoPlay playsInline muted loop >
                      <source src={video} type="video/mp4"></source>
                    </video>
                  </S.PromoVideoArea>
                }
              </S.PromoMediaWrapper>
            </S.PromoSectionMediaArea>
          </>
        }
      </S.PromoSectionContainer>
    </S.PromoSection>
  )

}

export default SignUpPromoSection