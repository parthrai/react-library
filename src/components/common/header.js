import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import {Link} from 'react-router-dom'

const Header=()=>{

    return (
        <div className="row">
            <div className="col-lg-12">



                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Library</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Link to="/">
                              <Nav className="nav-link">Home</Nav>
                            </Link>

                            <NavDropdown title="Books" id="basic-nav-dropdown">

                                <Link to="/books">
                                    <Nav.Item className="dropdown-item">List</Nav.Item>
                                </Link>

                                <NavDropdown.Divider />

                                <Link to="/books/create">

                                    <Nav.Item className="dropdown-item">Create</Nav.Item>

                                </Link>
                            </NavDropdown>

                            <NavDropdown title="Authors" id="basic-nav-dropdown">
                                <Link to="/authors/">

                                    <Nav.Item className="dropdown-item">List Authors</Nav.Item>

                                </Link>
                                <NavDropdown.Divider />

                                <Link to="/author/create">

                                    <Nav.Item className="dropdown-item">Add new Author</Nav.Item>

                                </Link>

                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    )
}

export default Header