'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Script from 'next/script';
import { useState , useEffect} from 'react';




function Projects(githubsource:string) {
  
  return (
  <Container>
  <p className="h2 mt-5"  >Projects</p>
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
function NavBar(imagelogo:string) {
 
  return (

   <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="">Michele Yin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand id="btnSwitch" >  <Image src={imagelogo} height={30}></Image></Navbar.Brand>
    </Container>
  </Navbar>
  );
}
function Publications() {
  return (<Container >
    <p className="h2 mt-5" >Publications</p>
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

function ContactMe(githubsource:string) {
  return (
    <Container>
    <p className="h2 mt-5"  >Contact Me</p>
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
function Footer() {
  return (

      <Container className='my-5'>
      </Container>
  );
}
function Page() {
  let githubsourcename = "github-mark/github-mark.svg"
  let imagelogoname = "light mode.png"
  const getStoredTheme = () => localStorage.getItem('theme')
  const [githubsource,setGithubsource] = useState(githubsourcename)
  const [imagelogo,setImagelogo] = useState(imagelogoname)
  const getPreferredTheme = () => {
      const storedTheme = getStoredTheme()
      if (storedTheme) {
        return storedTheme
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    const theme = getPreferredTheme()

    if (theme === 'dark') {
      githubsourcename = "github-mark/github-mark-white.svg"
      imagelogoname = "dark mode.png"
      
    }else{
      githubsourcename = "github-mark/github-mark.svg"
      imagelogoname = "light mode.png"
    }

    function changeIcons(){
      if (githubsource === "github-mark/github-mark.svg") {
        setGithubsource("github-mark/github-mark-white.svg")
        setImagelogo("dark mode.png")
      }else{
        setGithubsource("github-mark/github-mark.svg")
        setImagelogo("light mode.png")
      }
    }
    const mutationCallback = (mutationsList:any) => {
      for (const mutation of mutationsList) {
        if (
          mutation.attributeName === "data-bs-theme"
        ) {
          // return
          changeIcons()
        }
      }
    }
    const observer = new MutationObserver(mutationCallback)
    observer.observe(document.documentElement, { attributes: true })
    
  
    const navbar = NavBar(imagelogo)
    const projects = Projects(githubsource)
    const contactme = ContactMe(githubsource)
  return (
    
    <Container fluid>
      <Script src="bootstrapToggle.js" strategy="lazyOnload"></Script>
      {navbar}
      <Container fluid >
        {projects}
        <Publications/>
        {contactme}
      </Container>
      <Footer/>
    </Container>
  );
}
export default Page;