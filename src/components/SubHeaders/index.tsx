import React from 'react'
import SeriesSubHeader from './Series'

type Props = {
  page: 'series' | 'movies' | 'my-list' | 'original-audio'
}


function SubHeader({ page }: Props) {


  switch (page) {
    case 'series':
      return <SeriesSubHeader />
      break

    default:
      return <div style={{ display: 'none' }}></div>
      break
  }

}

export default SubHeader