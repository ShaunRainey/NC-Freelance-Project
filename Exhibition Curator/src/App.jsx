import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeaturedArtworks from './Components/featuredArtworks'
import PageBrowser from './Components/PageBrowser'
import SearchBox from './Components/searchBox'
import NavBar from './Components/navBar'
import Header from './Components/Header'

function App() {
  

  return (
    <div>
      <Header />
      <NavBar />
      <FeaturedArtworks />
      <SearchBox />
      <PageBrowser />
      </div>
  )
}

export default App
