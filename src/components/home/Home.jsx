import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { protectedRoute } from '../../utils/session'
import Header from '../header/Header';

const Home = () => {

  const navigate = useNavigate();
  const [reload, setReload] = useState(false)

  const handleCloseSession = () => {
    sessionStorage.clear();
    setReload(!reload)
  }

  useEffect(() => {
    protectedRoute(navigate)
  }, [reload])

  return (
    <>
      <Header handleCloseSession={handleCloseSession} />
      <Outlet />
    </>
  )
}

export default Home