'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/1024px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg" rounded fluid/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/1024px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg" rounded fluid/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg/1024px-Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg" rounded fluid/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function NavBar() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Michele Yin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Projects</Nav.Link>
          <Nav.Link href="#link">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

function Page() {
  return (
    <Container>
        <NavBar />
      {/* <Container fluid="lg"> */}
      {/* </Container> */}
      <Container fluid>
        <Row className="mx-auto m-3" >
          <Col>
            <MyCarousel />
          </Col>
        </Row>

        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>

          <Col >
            <Card className="mx-auto m-3">
              <Card.Body>
                <Card.Title>NLU</Card.Title>
                <Card.Text>
                  Fine tuning of BERT for joint intent detection and slot filling
                </Card.Text>
                <Button variant="outline-primary" ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="mx-auto m-3">
              <Card.Body>
                <Card.Title>Domain Adaptation</Card.Title>
                <Card.Text>
                  Domain adaptation techniques on Adaptiope for Image Classification
                </Card.Text>
                <Button variant="outline-primary" ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="mx-auto m-3">
              <Card.Body>
                <Card.Title>Domain Adaptation</Card.Title>
                <Card.Text>
                  Domain adaptation techniques on Adaptiope for Image Classification
                </Card.Text>
                <Button variant="outline-primary" ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="mx-auto m-3">
              <Card.Body>
                <Card.Title>HuffmanCodec</Card.Title>
                <Card.Text>
                  Huffman codec for text compression in C using multi-threading and multi-processing
                </Card.Text>
                <Button variant="outline-primary" ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
          <Card className="mx-auto m-3">
              <Card.Body>
                <Card.Title>Derklings</Card.Title>
                <Card.Text>
                  Comparison of Learning algorithms vs Behaviour Trees on Gym environments
                </Card.Text>
                <Button variant="outline-primary" ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
          <Card className="mx-auto m-3">
              <Card.Body>
                <Card.Title>Master's Thesis</Card.Title>
                <Card.Text>
                  Use of Large Language Models for Automatic Narrative Elicitation
                </Card.Text>
                <Button variant="outline-primary" ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>

      </Container>

    </Container>
  );
}
export default Page;