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
          <Nav.Link href="#link">Publications</Nav.Link>
          <Nav.Link href="#link">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}
function Projects() {
  return (
  <Container>
  <p className="h2 mt-5 mb-3">Projects</p>
  <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className='card-deck'>

    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100" >
        <Card.Body>
          <Card.Title>Natural Language Understanding</Card.Title>
          <Card.Text>
            Fine tuning of BERT for joint intent detection and slot filling
          </Card.Text>
        </Card.Body>
          <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/BigEmperor26/NLU' ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Domain Adaptation DL</Card.Title>
          <Card.Text>
            Domain adaptation techniques on Adaptiope for Image Classification
          </Card.Text>
        </Card.Body>
          <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/filippodaniotti/DL-domain-adaptation' ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>
    
    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Domain Adaptation TACV</Card.Title>
          <Card.Text>
            Other Domain adaptation techniques on Adaptiope for Image Classification
          </Card.Text>
        </Card.Body>
          <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/filippodaniotti/TACV-DA-project'><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>
    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Huffman Codec</Card.Title>
          <Card.Text>
            Huffman codec for text compression in C using multi-threading and multi-processing
          </Card.Text>
        </Card.Body>
          <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/BigEmperor26/HuffmanCODEC'><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Derklings</Card.Title>
          <Card.Text>
            Comparison of Learning algorithms vs Behaviour Trees on Gym environments
          </Card.Text>
        </Card.Body>
          <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/fedeizzo/comparison-NEAT-BT-on-OpenAI-Gyms' ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Master's Thesis</Card.Title>
          <Card.Text>
            Use of Large Language Models for Automatic Narrative Elicitation
          </Card.Text>
        </Card.Body>
        <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/BigEmperor26/Michele-Yin-Thesis' ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>
    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Let's Give a Voice to Conversational Agents in Virtual Reality</Card.Title>
          <Card.Text>
            Use of local speech recognition and synthesis for conversational agents in VR in Unity
          </Card.Text>
        </Card.Body>
        <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/sislab-unitn/Let-s-Give-a-Voice-to-Conversational-Agents-in-VR' ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

  </Row>
  </Container>
  );
}

function Publications() {
  return (<Container>
    <p className="h2">Publications</p>
    <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className='card-deck'>

      <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Let's Give a Voice to Conversational Agents in Virtual Reality</Card.Title>
          <Card.Text>
            Use of local speech recognition and synthesis for conversational agents in VR in Unity
          </Card.Text>
        </Card.Body>
        <Button variant="outline-primary" className='mt-auto m-3' href='https://github.com/sislab-unitn/Let-s-Give-a-Voice-to-Conversational-Agents-in-VR' ><Image src="github-mark/github-mark.png" rounded height="25px" /> GitHub</Button>
      </Card>
      </Col>
    </Row>

  </Container>);
  }
function Page() {
  return (
    <Container fluid>
        <NavBar />
      <Container fluid>
        <Row className="mx-auto m-3" >
          <Col>
            <MyCarousel />
          </Col>
        </Row>
        
        <Projects />
        <Publications />
      </Container>

    </Container>
  );
}
export default Page;