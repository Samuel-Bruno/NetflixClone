import React from 'react'
import ListObjType from '../types/ListObjType'



function parseMediaListToutilList(listObj: ListObjType, type: 'movie'|'tv', listName: string) {

  return {
    name: listName,
    type,
    ...listObj
  }
}

export default parseMediaListToutilList