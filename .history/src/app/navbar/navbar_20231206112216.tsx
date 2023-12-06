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