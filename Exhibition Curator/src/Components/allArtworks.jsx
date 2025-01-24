import metRequests from "../Utilities/metMuseumApi";
import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link, useParams, useLocation} from 'react-router'
import Loading from "./Loading";

function AllArtworks({artworks, setArtworks, loading, setLoading}) {

  const [artworkIDs, setArtworkIDs] = useState([]);
  const location = useLocation(); //Provides all information from URL
  const queryWords = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const getArtworksIDs = async () => {
      setLoading(true)
      const imagedArtworks = await metRequests.getAllImagedArtworks(queryWords);
      setArtworkIDs(imagedArtworks);
    };
    getArtworksIDs();
  }, [location.search]); //causes API call to 'refresh' if a new search is entered into the quickSearch

  useEffect(() => {
    if (artworkIDs.length !== 0) {
      const fetchArtworks = async () => {
        const artworkPromises = artworkIDs.map((ID) => {
          return metRequests.getObjectByID(ID);
        });
        const artworkData = await Promise.all(artworkPromises);

        setArtworks(artworkData);
      };
      fetchArtworks();
      setLoading(false)
    }
  }, [artworkIDs]);

  if(loading){
    return (
    <Container>
      <Loading/>
    </Container>)
  } else{
    return (
      <Container>
        <Row>
          {artworks.map((artwork) => (
            <Col md={4} key={artwork["objectID"]} className="mb-4">
              <Link to={`/artwork/${artwork.objectID}`}>
                <Card className="custom-card">
                  <Card.Img
                    variant="top"
                    src={artwork["primaryImageSmall"]}
                    alt="Artwork"
                    className="Card-img"
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title className="mb-2">
                      {artwork.title || "Untitled"}
                    </Card.Title>
                    <Card.Text className="custom-card-text">
                      {artwork.artistDisplayName || "Unknown Artist"}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllArtworks;
