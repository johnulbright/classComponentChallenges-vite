import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sitebar = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand>
                <Link to="/">Home</Link>
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/cats" className="site-link">Cats</Link>
                </NavItem>
                &emsp;
                <NavItem>
                    <Link to="/search" className="site-link">Search</Link>
                </NavItem>
                &emsp;
                <NavItem>
                    <Link to="/dogs" className="site-link">Dogs</Link>
                </NavItem>
                &emsp;
                <NavItem>
                    <Link to="/todo" className="site-link">ToDo</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Sitebar;