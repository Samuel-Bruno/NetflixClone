import React, { useEffect, useRef } from 'react'
import * as S from './styles'
import { HandleSelectMediaProps } from '../../types/handleSelectMedia'
import ListAllType from '../../types/listAll'

import MediaItem from '../MediaItem'
import TopTenItem from '../TopTenItem'

type Props = {
  ctg: ListAllType,
  pickMediaFn: ({ type, item }: HandleSelectMediaProps) => void,
  topTen?: boolean
}


function CtgRow({ ctg, pickMediaFn, topTen = false }: Props) {

  const ItemsAreaRef = useRef<HTMLDivElement | null>(null)

  const handleToLeftScroll = () => {
    const el = ItemsAreaRef.current
    const pageWidth = document.body.offsetWidth

    if (el !== null) {
      const alreadyLeft = el.offsetLeft
      const seventyVw = ((pageWidth / 100) * 75)

      if ((alreadyLeft + seventyVw) < 0) {
        el.style.marginLeft = `calc(${alreadyLeft}px + 75vw)`
      } else {
        el.style.marginLeft = `0px`
      }
    }
  }

  const handleToRightScroll = () => {
    const el = ItemsAreaRef.current
    const areaWidth = el?.offsetWidth as number
    const pageWidth = document.body.offsetWidth

    if (el !== null) {
      const alreadyLeft = el.offsetLeft
      const seventyVw = ((pageWidth / 100) * 75)

      if ((-alreadyLeft + seventyVw) < (areaWidth - seventyVw)) {
        el.style.marginLeft = `calc(${alreadyLeft}px - 75vw)`
      } else {
        el.style.marginLeft = `-${(areaWidth + 320) - seventyVw}px`
      }
    }
  }

  return (
    <S.Row>
      <S.CtgTitle>{ctg.name}</S.CtgTitle>
      <S.ItemsArea>
        <S.ItemsAreaLeftBtn className='scrollIndicator'
          onClick={handleToLeftScroll}
        />
        <S.ItemsContent ref={ItemsAreaRef} topTen={topTen === true}>
          {!topTen && ctg.results.map((item, k) => (
            <MediaItem type={ctg.type} item={item} key={k} pickMediaFn={pickMediaFn} />
          ))}
          {topTen && ctg.results.map((item, k) => (
            <TopTenItem type={ctg.type} item={item} key={k} pickMediaFn={pickMediaFn} rankNumber={k + 1} />
          ))}
        </S.ItemsContent>
        <S.ItemsAreaRightBtn className='scrollIndicator'
          onClick={handleToRightScroll}
        />
      </S.ItemsArea>
    </S.Row>
  )

}

export default CtgRow
