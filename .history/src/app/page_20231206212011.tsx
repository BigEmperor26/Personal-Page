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
import Link from 'next/link'
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from 'next-themes'
import { get } from 'http';


let githubsource =  "github-mark/github-mark-white.svg";

// let logo = "Dark mode.png";
const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = theme => localStorage.setItem('theme', theme)

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme()
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

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

function Projects() {
  return (
  <Container>
  <p className="h2 mt-5"  href="#projects">Projects</p>
  <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className='card-deck'>

    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Master's Thesis</Card.Title>
          <Card.Text>
            Use of Large Language Models for Automatic Narrative Elicitation
          </Card.Text>
        </Card.Body>
        <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/BigEmperor26/Michele-Yin-Thesis' ><Image src={githubsource} rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

    {/* <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Let's Give a Voice to Conversational Agents in Virtual Reality</Card.Title>
          <Card.Text>
            Use of local speech recognition and synthesis for conversational agents in VR in Unity
          </Card.Text>
        </Card.Body>
        <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/sislab-unitn/Let-s-Give-a-Voice-to-Conversational-Agents-in-VR' ><Image src={githubsource} rounded height="25px" /> GitHub</Button>
      </Card>
    </Col> */}


    
    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Domain Adaptation TACV</Card.Title>
          <Card.Text>
            Other Domain adaptation techniques on Adaptiope for Image Classification
          </Card.Text>
        </Card.Body>
          <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/filippodaniotti/TACV-DA-project'><Image src={githubsource} rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>
    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100" >
        <Card.Body>
          <Card.Title>Natural Language Understanding</Card.Title>
          <Card.Text>
            Fine tuning of BERT for joint intent detection and slot filling
          </Card.Text>
        </Card.Body>
          <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/BigEmperor26/NLU' ><Image src={githubsource} rounded height="25px" /> GitHub</Button>
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
          <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/filippodaniotti/DL-domain-adaptation' ><Image src={githubsource} rounded height="25px" /> GitHub</Button>
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
          <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/BigEmperor26/HuffmanCODEC'><Image src={githubsource} rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

    <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>A Comparison between NEAT and Behavior Trees on OpenAI Gym Environments</Card.Title>
          <Card.Text>
            Comparison of Learning algorithms vs Behaviour Trees on Gym environments
          </Card.Text>
        </Card.Body>
          <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/fedeizzo/comparison-NEAT-BT-on-OpenAI-Gyms' ><Image src={githubsource} rounded height="25px" /> GitHub</Button>
      </Card>
    </Col>

  </Row>
  </Container>
  );
}
function NavBar() {
  const [ImageLogo,setImageLogo] = useState("Light mode.png")
  // const ImageDarkLogo = <Image src="Dark mode.png" height={30}></Image>
  // if (typeof window !== "undefined") {
  //   const theme = getPreferredTheme()
  //   if (theme == 'dark') {
  //     var currentLogo = ImageDarkLogo;
  //   } else {
  //     var currentLogo = ImageLightLogo;
  //   }
  // }

  function useEffect() {
    const theme = getPreferredTheme()
    if (theme == 'dark') {
      setImageLogo("Dark mode.png")
    } else {
      setImageLogo("Light mode.png")
    }
  }
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="">Michele Yin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#publications">Publications</Nav.Link>
          <Nav.Link href="#contactme">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand id="btnSwitch" >  <Image src={ImageLogo} height={30}></Image></Navbar.Brand>
    </Container>
  </Navbar>
  
  );
}
function Publications() {
  return (<Container >
    <p className="h2 mt-5" href="#publications">Publications</p>
    <Row className='card-deck'>

      <Col className='my-3'>
      <Card className="mx-auto m-3 h-100">
        <Card.Body>
          <Card.Title>Let's Give a Voice to Conversational Agents in Virtual Reality</Card.Title>
          <Card.Subtitle>
          Yin, M., Roccabruna, G., Azad, A., Riccardi, G. (2023)
          </Card.Subtitle>
          <Card.Text>
          The dialogue experience with conversational agents can be greatly enhanced with multimodal and immersive interactions in virtual reality. In this work, we present an open-source architecture with the goal of simplifying the development of conversational agents operating in virtual environments. The architecture offers the possibility of plugging in conversational agents of different domains and adding custom or cloud-based Speech-To-Text and Text-To-Speech models to make the interaction voice-based. Using this architecture, we present two conversational prototypes operating in the digital health domain developed in Unity for both non-immersive displays and VR headsets. The architecture is publicly available on GitHub.
          </Card.Text>
        </Card.Body>
        <Button variant="outline-info" className='mt-auto m-3' href='https://www.isca-speech.org/archive/interspeech_2023/yin23b_interspeech.html' ><Image src="interspeech.png" rounded height="25px" /> InterSpeech</Button>
      </Card>
      </Col>
    </Row>

  </Container>);
  }

function ContactMe() {
 
  return (
    <Container>
    <p className="h2 mt-5" href="#contactme">Contact Me</p>
    <Row className='card-deck'>
        
        <Col className='my-3'>
        <Card className="mx-auto m-3 h-100">
          <Card.Body>
            <Card.Title>LinkedIn</Card.Title>
            <Card.Text>
            Connect with me on LinkedIn
            </Card.Text>
          </Card.Body>
          
          <Button variant="outline-info" className='mt-auto m-3' href='https://www.linkedin.com/in/michele-yin-42a36a229/' ><Image src="LinkedIn logo.webp" rounded height="25px" /> LinkedIn</Button>
        </Card>
        </Col>
        <Col className='my-3'>
        
        <Card className="mx-auto m-3 h-100">
          <Card.Body>
            <Card.Title>GitHub</Card.Title>
            <Card.Text>
            Check my GitHub profile
            </Card.Text>
          </Card.Body>
          <Button variant="outline-info" className='mt-auto m-3' href='https://github.com/BigEmperor26' ><Image src={githubsource} rounded height="25px" /> GitHub</Button>
        </Card>
        </Col>
        <Col className='my-3'>
        <Card className="mx-auto m-3 h-100">
          <Card.Body>
            <Card.Title>Email</Card.Title>
            <Card.Text>
            Write me an Email
            </Card.Text>
          </Card.Body>
          <Button variant="outline-info" className='mt-auto m-3' href='mailto:mickyin3@gmail.com' ><Image src="email.avif" rounded height="25px" /> Email</Button>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

function Page() {
  
  const theme = getPreferredTheme()
  const [navBar,setNavBar] = useState(NavBar())
  return (
    
    <Container fluid>
      <Script src="bootstrapToggle.js" strategy="lazyOnload"></Script>
        {navBar}
      <Container fluid>
        <Projects/>
        <Publications/>
        <ContactMe />
      </Container>

    </Container>
  );
}
export default Page;