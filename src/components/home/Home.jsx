import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { protectedRoute } from '../../utils/session'

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    protectedRoute(navigate)
  }, [])
  

  return (
    <div>Home</div>
  )
}

export default Home