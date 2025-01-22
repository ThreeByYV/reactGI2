import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';


const Layout = () => {
    return (
        <>
       <Navbar>
        <Container>
            <Navbar.Brand as={Link} to="/"></Navbar.Brand>
            <Nav className="me-auto absolute top-0 left-0 gap-20 w-screen flex justify-end items-center p-6">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                <Nav.Link as={Link} to="/todo">Create Todos</Nav.Link>
                <Nav.Link as={Link} to="/details">View your todos</Nav.Link>
            </Nav>
        </Container>
       </Navbar>

       <Outlet/>
       </>
    );
}

export default Layout;
