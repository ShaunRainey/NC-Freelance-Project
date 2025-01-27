import { Card, Container, Row, Col, Button, Form} from "react-bootstrap";
import metRequests from "../Utilities/metMuseumApi";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import PageBar from "./PageBar";
import Loading from "./Loading";

function DetailedSearch({ artworks, setArtworks, currentPage, setCurrentPage, itemsPerPage, loading, setLoading}) {
    const [searchInitiated, setSearchInitiated] = useState(false)
    const [totalResults, setTotalResults] = useState([]);

    // itemsPerPage = 60;

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

        <Row>
            <Col xs={12} md={12}>
                <div className="p-3 bg-light">
                <h5>Search Box:</h5>

                    <Form>

                        <Form.Group className="mb-3">
                            <Form.Label>Filter by Museum</Form.Label>
                            <Form.Control as="select">
                            <option>The Met Museum</option>
                            <option>Option 2</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Filter by Department</Form.Label>
                            <Form.Control as="select">
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date Range</Form.Label>
                            <div className="d-flex">
                                <Form.Control type="number" placeholder="From (Year)" className="me-2" />
                                <Form.Control type="number" placeholder="To (Year)" />
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Keyword</Form.Label>
                            <Form.Control type="text" placeholder="Enter keyword (e.g., artist, title)" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Maximum Pages</Form.Label>
                                <p className="smallprint">(A higher number will increase API response time. Recommended to stay below 20)</p>
                            <Form.Control as="select">
                                <option>Default (20)</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Results Per Page</Form.Label>
                                <p className="smallprint">(A higher number will increase API response time. Recommended to stay below 20)</p>
                            <Form.Control as="select">
                                <option>Default (9)</option>
                                <option>3</option>
                                <option>6</option>
                                <option>9</option>
                                <option>12</option>
                                <option>15</option>
                                <option>30</option>
                                <option>60</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select">
                            <option>Origin date (old - new)</option>
                            <option>Origin date (new - old)</option>
                            <option>Title (A-Z)</option>
                            <option>Title (Z-A)</option>
                            <option>Artist (A-Z)</option>
                            <option>Artist (Z-A)</option>
                            <option>Department (A-Z)</option>
                            <option>Department (Z-A)</option>
                            <option>Recently Added</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" size="lg" onClick={handleSearchInitiate}>
                            Search
                        </Button>

                    </Form>
                </div>
            </Col>
        </Row>
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