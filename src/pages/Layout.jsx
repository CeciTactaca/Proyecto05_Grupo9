import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/Layout.css';

function Layout() {

    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-info text-dark fw-semibold fs-5">
                    <Container>
                        <Navbar.Brand href="/">Grupo 9</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/games">Games</Nav.Link>

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/aboutus">AboutUs</NavDropdown.Item>
                                    <NavDropdown.Item href="/Error">Pagina de error</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/JuegoEstrellas">
                                        Atrapa Estrellas
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main>
                <h1></h1>
                <Outlet></Outlet>
            </main>
        </>
    )
};
export default Layout;