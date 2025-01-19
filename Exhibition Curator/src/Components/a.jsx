import metRequests from "../Utilities/metMuseumApi";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function FeaturedArtworks() {

    const buakawImages = [
      "https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-oZjov0hdtQ2IvP_WR2Is8HOTcQZw_p6qw&s",
      "https://www.fightersonlymag.com/wp-content/uploads/2017/02/wsi-imageoptim-Thai-news-Buakaw-legal-problems-over.jpg",
    ];

    return (
      <Container className="Container">
        <Row>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-oZjov0hdtQ2IvP_WR2Is8HOTcQZw_p6qw&s"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw respecting the king
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.fightersonlymag.com/wp-content/uploads/2017/02/wsi-imageoptim-Thai-news-Buakaw-legal-problems-over.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw taking limbs
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card">
              <Card.Img
                src="https://www.damientrainor.com/wp-content/uploads/2012/03/BuakawPic.jpg"
                className="Card-img"
              />
              <Card.Body className="custom-card-body">
                <Card.Title className="mb-2">Buakaw</Card.Title>
                <Card.Text className="custom-card-text">
                  Buakaw performing the ram muay
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default FeaturedArtworks;
