import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import './Header2.css'

const Header2 = () => {

    const [scrolled, setscrolled] = useState(false)


    useEffect(() => {

        const scrolfun = () => {

            if (window.scrollY > 60) {
                console.log("true")
                setscrolled(true)
            }
            else {
                console.log("false")
                setscrolled(false)
            }

        }

        window.addEventListener("scroll", scrolfun)

    }, [scrolled])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            {/* className={scrolled ? "bg-grey tofiexd" : "bg-white" }  */}
                
            <section className="" style={{ position: "absolute", width: "100%" }}>

            <Navbar collapseOnSelect expand="md" className={scrolled ? " fixed-top bg-white " : "bg-transparent "} >
                <Container>
                    <Navbar.Brand className={scrolled ? "navbar-light navbar-brand black" : "navbar-light navbar-brand white" }  href="#home" >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id={scrolled ? "responsive-navbar-nav fixed-top bg-white " : "responsive-navbar-nav bg-dark  " } >
                        <Nav className="m-auto">
                            <Nav.Link className={scrolled ? "mx-2 navbar-light navbar-nav nav-link black" : " mx-2 navbar-light navbar-nav nav-link white"} href="#features"  >Home</Nav.Link>
                            <Nav.Link href="#pricing" className={scrolled ? "mx-2 navbar-light navbar-nav nav-link black" : " mx-2 navbar-light navbar-nav nav-link white"} >Reservation</Nav.Link>
                            <Nav.Link href="#pricing" className={scrolled ? "mx-2 navbar-light navbar-nav nav-link black" : " mx-2 navbar-light navbar-nav nav-link white"} >History</Nav.Link>
                            <Nav.Link href="#pricing" className={scrolled ? "mx-2 navbar-light navbar-nav nav-link black" : " mx-2 navbar-light navbar-nav nav-link white"} >Profile</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className={scrolled ? "mx-2 navbar-light navbar-nav nav-link black" : " mx-2 navbar-light navbar-nav nav-link white"}   href="#deets">More deets</Nav.Link>
                            <Nav.Link className={scrolled ? "mx-2 navbar-light navbar-nav nav-link black" : " mx-2 navbar-light navbar-nav nav-link white"}  eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

          
          </section>
          


        </>
    )
}

export default Header2