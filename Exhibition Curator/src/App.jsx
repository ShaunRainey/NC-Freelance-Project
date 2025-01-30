import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Routes, Route } from "react-router";
import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'

import FeaturedArtworks from "./Components/featuredArtworks";
import IndividualArtwork from "./Components/IndividualArtwork";
import NavBar from './Components/NavBar'
import AllArtworks from "./Components/allArtworks";
import DetailedSearch from './Components/DetailedSearchBar';
import SavedExhibitions from './Components/SavedExhibitions';
import ViewExhibition from './Components/ViewExhibition';
import VamRandom from './Components/VamRandom';
import MetRandom from './Components/metRandom';

/* 
Implement picture zoom
*/

function App() {
  
  const [artworks, setArtworks] = useState([]);
  const [artPiece, setArtPiece] = useState(null);
  const [loading, setLoading] = useState(false)
  const [validObjectIDs, setValidObjectIDs] = useState([]); // To store all valid object IDs
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [museum, setMuseum] = useState("The Met Museum");
  const [artworkIDs, setArtworkIDs] = useState([]);

    const handleMuseumChange = (event) => {
    setArtworks([])
    setMuseum(event.target.value)
    console.log(event.target.value)
    console.log(museum)
    // vamRequests.fetchObjectsWithImages().then((response) => {console.log(response)})
  }

return (
  <Container>
    <NavBar />
      <Routes>

        <Route path="/" 
        element={
          <Row>
            <Col>
              <FeaturedArtworks artworkIDs={artworkIDs} setArtworkIDs={setArtworkIDs} artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading} museum={museum} setMuseum={setMuseum} handleMuseumChange = {handleMuseumChange}/>
            </Col>
          </Row>
          }
        />

        <Route path="/artwork/:objectID" element={
          <IndividualArtwork artPiece={artPiece} setArtPiece={setArtPiece} loading = {loading} setLoading = {setLoading}/>
          }
        />

        <Route path="/all-artworks/" element={
          <AllArtworks artworks={artworks} setArtworks={setArtworks} loading={loading} setLoading = {setLoading} validObjectIDs= {validObjectIDs} setValidObjectIDs={setValidObjectIDs} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} museum={museum} setMuseum={setMuseum} handleMuseumChange = {handleMuseumChange}/>
          } 
        />

        <Route path="/detailed-search" element={
          <DetailedSearch artworks={artworks} setArtworks={setArtworks} loading={loading} setLoading = {setLoading} validObjectIDs= {validObjectIDs} setValidObjectIDs={setValidObjectIDs} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} museum={museum} setMuseum={setMuseum} handleMuseumChange = {handleMuseumChange}/>
          }
        />

        <Route path="/saved-exhibitions" element={
            <SavedExhibitions/>
          }
        />

        <Route path="/exhibition/:exhibitionName" element={<ViewExhibition />} />

        <Route path="/random" element={<VamRandom artworkIDs={artworkIDs} setArtworkIDs={setArtworkIDs} artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading} museum={museum} setMuseum={setMuseum}/>} />
        
        <Route path="/modnar" 
        element={
          <Row>
            <Col>
              {<MetRandom artworkIDs={artworkIDs} setArtworkIDs={setArtworkIDs} artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading} museum={museum} setMuseum={setMuseum} handleMuseumChange = {handleMuseumChange}/>}
            </Col>
          </Row>
          }
        />


      </Routes>

  </Container>
);
}

export default App
