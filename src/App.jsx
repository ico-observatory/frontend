import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Analytics from './pages/Dashboard/Analytics'
import DNSPage from './pages/Dashboard/DNSPage'
import HostingPage from './pages/Dashboard/HostingPage'
import EmailPage from './pages/Dashboard/EmailPage'
import Settings from './pages/Settings'
import SignIn from './pages/Authentication/SignIn'
import SignUp from './pages/Authentication/SignUp'

const App = () => {

  const [loading, setLoading] = useState(true)
  const preloader = document.getElementById('preloader')

  if(preloader) {
    setTimeout(() => {
      preloader.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path='/' element={<Analytics />} />
          <Route path='/dns' element={<DNSPage />} />
          <Route path='/hosting' element={<HostingPage />} />
          <Route path='/email' element={<EmailPage />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/auth/signin' element={<SignIn />} />
          <Route path='/auth/signup' element={<SignUp />} />
        </Routes>
      </>
    )
  )
}

export default App
