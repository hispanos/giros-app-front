import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { protectedRoute } from '../../utils/session'
import Header from '../header/Header';

const Home = () => {

  const navigate = useNavigate();
  const [reload, setReload] = useState(false)

  const [userSession, setUserSession] = useState({});

  const handleCloseSession = () => {
    sessionStorage.clear();
    setReload(!reload)
  }

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setUserSession(user);
    }
  }, [])


  useEffect(() => {
    protectedRoute(navigate)
  }, [reload])

  return (
    <>
      <Header
        handleCloseSession={handleCloseSession}
        userSession={userSession}
      />
      <Outlet context={[userSession]} />
    </>
  )
}

export default Home