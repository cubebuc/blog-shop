import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ReactNavbar from 'react-bootstrap/Navbar';
import Brand from 'react-bootstrap/NavbarBrand';
import Toggle from 'react-bootstrap/NavbarToggle';
import Collapse from 'react-bootstrap/NavbarCollapse';
import ReactLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';

import CartButton from './CartButton';
import DarkMode from './DarkMode';

function Navbar()
{
    return (
        <ReactNavbar expand="lg" sticky='top' className="bg-body-tertiary">
            <Container>
                <Brand as={Link} to="/blog-shop">React Bootstrap</Brand>
                <Toggle aria-controls="basic-navbar-nav" />
                <Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <ReactLink as={Link} to="/blog-shop">Home</ReactLink>
                        <ReactLink as={Link} to="/blog-shop/blog">Blog</ReactLink>
                        <ReactLink as={Link} to="/blog-shop/shop">Shop</ReactLink>
                    </Nav>
                    <CartButton />
                    <DarkMode />
                </Collapse>
            </Container>
        </ReactNavbar>
    );
}

export default Navbar;