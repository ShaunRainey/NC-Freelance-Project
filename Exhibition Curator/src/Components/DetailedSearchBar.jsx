import { Card, Container, Row, Col, Button } from "react-bootstrap";
import metRequests from "../Utilities/metMuseumApi";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import PageBar from "./PageBar";
import Loading from "./Loading";

function DetailedSearch({ artworks, setArtworks, currentPage, setCurrentPage, itemsPerPage, loading, setLoading}) {
    const [searchInitiated, setSearchInitiated] = useState(false)
    const [totalResults, setTotalResults] = useState([]);

    useEffect(() => {
        const fetchAllArtworks = async () => {
            if (!searchInitiated) return; // Do nothing if the search hasn't been initiated
            setLoading(true);

            // To avoid the API call being repeated, it is being run conditionally
            if (totalResults.length === 0) {
                const validObjects = await metRequests.getSearchElements();
                setTotalResults(validObjects); // This sets all objects into a state variable, makes pagination simpler but increases load time. Most importantly, it will allow for sorting
                setArtworks(validObjects.slice(0, itemsPerPage)); 
            } else {
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setArtworks(totalResults.slice(startIndex, endIndex));
            }

            setLoading(false);
            };

        fetchAllArtworks();
    }, [currentPage, totalResults, searchInitiated]); // If currentPage or totalResults is altered, the function will be called again

  const totalItems = totalResults.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const handleSearchInitiate = () => {
    setSearchInitiated(true); // Trigger the rendering of artworks
  };

  if (!searchInitiated) {
    return (
      <Container className="text-center mt-5">
        <Button variant="primary" size="lg" onClick={handleSearchInitiate}>
          Start Search
        </Button>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {artworks.map((artwork) => (
          <Col md={4} key={artwork.objectID} className="mb-4">
            <Link to={`/artwork/${artwork.objectID}`}>
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={artwork.primaryImageSmall}
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

      <Row className="mt-3">
        <Col>
          <PageBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            maxVisiblePages={5}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DetailedSearch;


/* Considerations:

- Pick an API/Source
- Filter by department
- Set max results
- Enter a keyword
- Sort by:
    - Origin date (old - new)
    - Origin date (new - old)
    - Title (A-Z)
    - Title (Z-A)
    - Artist (A-Z)
    - Artist (Z-A)
    - Department (A-Z)
    - Department (Z-A)
*/