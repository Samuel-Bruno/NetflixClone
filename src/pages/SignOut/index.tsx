import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function SignOut() {

  const navigation = useNavigate()

  useEffect(() => {
    navigation('/')
  }, [])

  return null

}


export default SignOut