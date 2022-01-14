import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Login from "./components/auth/login"
import Register from "./components/auth/register";
import Request from "./components/holder/request";
import IssuerRequestLists from "./components/issuer/requestsList";
import VerifierRequestLists from "./components/verifier/requestsList";

export default function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">APPDS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/holder">Holder</Nav.Link>
                        <Nav.Link as={NavLink} to="/issuer">Issuer</Nav.Link>
                        <Nav.Link as={NavLink} to="/verifier">Verifier</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Routes>
                            {/* insert authentication */}
                            {<Route path="/" element={<Login />} />}
                            {<Route path="/register" element={<Register />} />}
                            {<Route path="/holder" element={<Request />} />}
                            {<Route path="/issuer" element={<IssuerRequestLists />} />}
                            {<Route path="/verifier" element={<VerifierRequestLists />} />}
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );

}