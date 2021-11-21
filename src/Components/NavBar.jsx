import React, { Component } from 'react'

import {Nav, Navbar, NavDropdown, Container, Form, FormControl, Button} from 'react-bootstrap'

import CartWidget from './CartWidget'

export default class Barra extends Component {
    render() {
        return (
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Tienda Vapor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Principal</Nav.Link>
                        <Nav.Link href="#action2">A cerca de nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Mods</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Atos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Accesorios
                        </NavDropdown.Item>
                        </NavDropdown>
                        {/*<Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>*/}
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar productos"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                        <CartWidget />
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
