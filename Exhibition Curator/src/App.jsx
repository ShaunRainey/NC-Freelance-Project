import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Routes, Route } from "react-router";
import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'

import FeaturedArtworks from "./Components/featuredArtworks";
import IndividualArtwork from "./Components/IndividualArtwork";
import SearchBox from './Components/searchBox'
import NavBar from './Components/NavBar'
import AllArtworks from "./Components/allArtworks";
import DetailedSearch from './Components/DetailedSearchBar';
import SavedExhibitions from './Components/SavedExhibitions';
import ViewExhibition from './Components/ViewExhibition';

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

return (
  <Container>
    <NavBar />
      <Routes>

        <Route path="/" 
        element={
          <Row>
            <Col>
              <FeaturedArtworks artworks={artworks} setArtworks={setArtworks} loading = {loading} setLoading = {setLoading}/>
            </Col>
          </Row>
          }
        />

        <Route path="/artwork/:objectID" element={
          <IndividualArtwork artPiece={artPiece} setArtPiece={setArtPiece} loading = {loading} setLoading = {setLoading}/>
          }
        />

        <Route path="/all-artworks/" element={
          <AllArtworks artworks={artworks} setArtworks={setArtworks} loading={loading} setLoading = {setLoading} validObjectIDs= {validObjectIDs} setValidObjectIDs={setValidObjectIDs} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
          } 
        />

        <Route path="/detailed-search" element={
          <DetailedSearch artworks={artworks} setArtworks={setArtworks} loading={loading} setLoading = {setLoading} validObjectIDs= {validObjectIDs} setValidObjectIDs={setValidObjectIDs} currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage}/>
          }
        />

        <Route path="/saved-exhibitions" element={
            <SavedExhibitions/>
          }
        />

        <Route path="/exhibition/:exhibitionName" element={<ViewExhibition />} />

      </Routes>

  </Container>
);
}

export default App
