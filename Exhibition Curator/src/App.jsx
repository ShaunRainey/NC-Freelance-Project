import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FeaturedArtworks from './Components/featuredArtworks'
import PageBrowser from './Components/PageBrowser'
import SearchBox from './Components/searchBox'
import NavBar from './Components/navBar'
import Header from './Components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import ArtworkGallery from './Components/ArtworkGallery'

function App() {
  

  return (
    <div>
      {/* <ArtworkGallery /> */}
      {/* <Header />
      <NavBar /> */}
      <FeaturedArtworks />
      {/* <SearchBox /> */}
      {/* <PageBrowser /> */}
      </div>
  )
}

export default App
