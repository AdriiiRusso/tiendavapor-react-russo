import React, { Component } from 'react'

import {Nav, Navbar, NavDropdown, Container, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import CartWidget from './CartWidget'

export default class Barra extends Component {
    render() {
        return (
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container fluid>
                    <Link to='/'>
                        <Navbar.Brand href="/">Tienda Vapor</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to='/'>
                            <Nav.Link href="/">Principal</Nav.Link>
                        </Link>
                        <Link to='/about'>
                            <Nav.Link href="/about">A cerca de nosotros</Nav.Link>
                        </Link>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <Link to='categorias/mods'>
                            <NavDropdown.Item href="categorias/mods">Mods</NavDropdown.Item>
                        </Link>
                        <Link to='categorias/atos'>    
                            <NavDropdown.Item href="categorias/atos">Atos</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
                        <Link to='categorias/acc'>
                            <NavDropdown.Item href="categorias/acc">Accesorios</NavDropdown.Item>
                        </Link>
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
