import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import FetchItems from './components/FetchItems'
// import LoadingSpinner from './components/LoadingSpinner'
import { useSelector } from 'react-redux';

const App = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>

      <Navbar />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  )
}

export default App