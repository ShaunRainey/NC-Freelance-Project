import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation, Link } from "react-router"; // Updated import for 'react-router-dom'
import Loading from "./Loading";
import metRequests from "../Utilities/metMuseumApi";
import PageBar from "./PageBar";

function AllArtworks({ artworks, setArtworks, validObjectIDs, setValidObjectIDs, currentPage, setCurrentPage, itemsPerPage, loading, setLoading }) {

  const location = useLocation();
  const queryWords = new URLSearchParams(location.search).get("query") || ""; // Get query param

  useEffect(() => {
    const fetchAllArtworks = async () => {
      setLoading(true);

      // Get all valid object IDs for the search query
      const validIDs = await metRequests.getValidObjectNumbers(queryWords);
      setValidObjectIDs(validIDs); // Store the IDs to calculate total pages

      // Get artworks for the current page
      const imagedArtworks = await metRequests.getAllImagedArtworks(queryWords, currentPage, itemsPerPage);
      setArtworks(imagedArtworks); // Set the artworks for the current page
      setLoading(false);
    };

    fetchAllArtworks();
  }, [queryWords, currentPage]); // Re-run the effect when queryWords or currentPage changes

  // Calculate the total pages based on all valid object IDs
  const totalItems = validObjectIDs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0)
  };

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  } else {
    return (
      <Container>
        {/* Artwork Cards */}
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

        {/* Pagination */}
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
}

export default AllArtworks;
