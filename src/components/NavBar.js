import { useState, useEffect } from "react";
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import instagram from '../assets/Images/instagram.png';
import facebook from '../assets/Images/facebook.png';
import linkedin from '../assets/Images/linkedin.png';
import Logo from '../assets/Images/Logo.svg';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.addEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        // <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link '} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link '} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link '} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={instagram} alt=""/></a>
                        <a href="#"><img src={facebook} alt=""/></a>
                        <a href="#"><img src={linkedin} alt=""/></a>
                    </div>
                    <button className="connect" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}