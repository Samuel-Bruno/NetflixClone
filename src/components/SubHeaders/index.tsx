import React from 'react'
import SeriesSubHeader from './Series'
import MoviesSubHeader from './Movies'

type Props = {
  page: 'series' | 'movies' | 'my-list' | 'original-audio'
}


function SubHeader({ page }: Props) {


  switch (page) {
    case 'series':
      return <SeriesSubHeader />
      break
    case 'movies':
      return <MoviesSubHeader />
      break

    default:
      return <div style={{ display: 'none' }}></div>
      break
  }

}

export default SubHeader