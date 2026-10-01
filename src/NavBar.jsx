import Container from "react-bootstrap/Container";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import gambshalogo from "../src/assets/index-page/gambshalogo.png";




function CollapsibleExample() {
  const [lang, setlang] = useState("Eng");
const Togglehandle = () => {
  alert("toglefudfdf")
 const newlang = lang === "Eng" ? "Ar" : "Eng";
 console.log("newlanmg",newlang)
    setlang(newlang);
    document.documentElement.setAttribute("data-lang", newTheme);
};
  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary, navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={gambshalogo} alt="Gabshalogo" className="navlogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" style={{color:"#FDA31B"}} id="nav-txt">Home</Nav.Link>
            <Nav.Link href="#About Us" id="nav-txt">About Us</Nav.Link>
            <Nav.Link href="#Our Vision"  id="nav-txt">Our Vision</Nav.Link>
            <Nav.Link href="#Our Message"  id="nav-txt">Our Message</Nav.Link>
            <Nav.Link href="#Our Goals"  id="nav-txt">Our Goals</Nav.Link>
            <Nav.Link href="#Our Services"  id="nav-txt">Our Services</Nav.Link>
            <Nav.Link href="#Contact"  id="nav-txt">Contact</Nav.Link>



            
          </Nav>
          <Nav className="navbtns">
            <Nav.Link href="#Hire us" className="navbtnone">Hire US</Nav.Link>
            <div onClick={Togglehandle} className="btn-wrapper">
              <button  className="nav-btn ">AR</button>
              <button className="nav-btn active">ENG</button>
            </div>
            {/* <Nav.Link eventKey={2} href="#memes" className="navbtn" onClick={Togglehandle}>
            {lang}
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
