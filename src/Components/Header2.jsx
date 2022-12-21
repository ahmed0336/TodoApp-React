import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
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
            <Navbar collapseOnSelect expand="md" className={scrolled ? " fixed-top bg-white" : "bg-transparent text-white"} >
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features" className='mx-2' >Home</Nav.Link>
                            <Nav.Link href="#pricing" className='mx-2'>Reservation</Nav.Link>
                            <Nav.Link href="#pricing" className='mx-2'>History</Nav.Link>
                            <Nav.Link href="#pricing" className='mx-2'>Profile</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


          


        </>
    )
}

export default Header2