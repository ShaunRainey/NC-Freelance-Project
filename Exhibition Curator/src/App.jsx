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
import ArtworkGallery from './Components/Example'
import PracticeNavBar from './Components/PracticeNavBar'
import { Row, Col, Container } from 'react-bootstrap'

function App() {
  

  return (
    <Container>
      <PracticeNavBar />
      {/* <NavBar /> */}
      <Row>
        <Col md={1}>{/* <SearchBox /> */}</Col>
        <Col>
          <FeaturedArtworks />
        </Col>
      </Row>
    </Container>
  );
}

export default App
