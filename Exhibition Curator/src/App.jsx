import "bootstrap/dist/css/bootstrap.min.css"; 
import { Routes, Route } from "react-router";
import { useState } from 'react'
import './App.css'
import FeaturedArtworks from "./Components/featuredArtworks";
import IndividualArtwork from "./Components/IndividualArtwork";
import SearchBox from './Components/searchBox'
import NavBar from './Components/NavBar'
import { Row, Col, Container } from 'react-bootstrap'


/* 
Implement Individual artwork page properly
Implement picture zoom
Implement search box + bar
Pagination
*/




function App() {
  
  const [artworks, setArtworks] = useState([]);
  const [artPiece, setArtPiece] = useState(null);
  const [loading, setLoading] = useState(false)


  const exampleArtwork = {
    "objectID": 448652,
    "isHighlight": false,
    "accessionNumber": "31.119.1",
    "accessionYear": "1931",
    "isPublicDomain": true,
    "primaryImage": "https://images.metmuseum.org/CRDImages/is/original/DP101034.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/is/web-large/DP101034.jpg",
    "additionalImages": [
        "https://images.metmuseum.org/CRDImages/is/original/DT11778.jpg"
    ],
    "constituents": null,
    "department": "Islamic Art",
    "objectName": "Pair of doors",
    "title": "Pair of Doors Carved in the 'Beveled Style'",
    "culture": "",
    "period": "",
    "dynasty": "",
    "reign": "",
    "portfolio": "",
    "artistRole": "",
    "artistPrefix": "",
    "artistDisplayName": "",
    "artistDisplayBio": "",
    "artistSuffix": "",
    "artistAlphaSort": "",
    "artistNationality": "",
    "artistBeginDate": "",
    "artistEndDate": "",
    "artistGender": "",
    "artistWikidata_URL": "",
    "artistULAN_URL": "",
    "objectDate": "9th century",
    "objectBeginDate": 800,
    "objectEndDate": 899,
    "medium": "Wood (teak); carved",
    "dimensions": "H. 86 1/2 in. (221 cm)\r\nW. 20 1/4 in (51.4 cm)  \r\nCombined W. 41 1/4 in (104.8 cm)\r\nD. 1 1/2 in.\r\nWt. 165 lbs. (74.8 kg)  weight includes 31.119.1, 31.1192 and wooden mount without plexi.  mount is probably half of this weight.",
    "measurements": [
        {
            "elementName": "Other",
            "elementDescription": null,
            "elementMeasurements": {
                "(not specified)": 104.77521,
                "Depth": 3.81,
                "Height": 219.71043,
                "Weight": 74.843506,
                "Width": 51.4351
            }
        }
    ],
    "creditLine": "Fletcher Fund, 1931",
    "geographyType": "Found",
    "city": "probably Takrit",
    "state": "",
    "county": "",
    "country": "Iraq",
    "region": "",
    "subregion": "",
    "locale": "",
    "locus": "",
    "excavation": "",
    "river": "",
    "classification": "Wood",
    "rightsAndReproduction": "",
    "linkResource": "",
    "metadataDate": "2024-10-03T04:53:53.567Z",
    "repository": "Metropolitan Museum of Art, New York, NY",
    "objectURL": "https://www.metmuseum.org/art/collection/search/448652",
    "tags": null,
    "objectWikidata_URL": "https://www.wikidata.org/wiki/Q116275526",
    "isTimelineWork": true,
    "GalleryNumber": "451"
};

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

        </Routes>

      </Container>
  );
}

export default App
