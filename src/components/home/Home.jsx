import React, { useEffect, useState } from 'react'
import { Outlet, useMatch, useNavigate } from 'react-router-dom'
import { protectedRoute } from '../../utils/session'
import Header from '../header/Header';

const Home = () => {

  const navigate = useNavigate();
  const [reload, setReload] = useState(false)
  const [showTitle, setShowTitle] = useState(true);
  const [background, setBackground] = useState('')
  let matchNew = useMatch({path: '/new'})


  const [userSession, setUserSession] = useState({});

  const handleCloseSession = () => {
    sessionStorage.clear();
    setReload(!reload)
  }

  useEffect(() => {
    if (matchNew) {
      setShowTitle(false);
      setBackground('gray')
    }else {
      setShowTitle(true);
      setBackground('green')
    }
  }, [matchNew])
  

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
        showTitle={showTitle}
        background={background}
      />
      <Outlet context={[userSession]} />
    </>
  )
}

export default Home