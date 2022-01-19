import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import { useDispatch, connect } from 'react-redux';
import { logout } from './actions/auth';
import Login from "./components/auth/login"
import Register from "./components/auth/register";
import Request from "./components/holder/request";
import HolderRequestsList from "./components/holder/requestsList";
import IssuerRequestsList from "./components/issuer/requestsList";
import VerifierRequestsList from "./components/verifier/requestsList";

function App({ user }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>APPDS</Navbar.Brand>

                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <Nav.Link as={NavLink} to="/holder/list">Holder</Nav.Link>
                                <Nav.Link as={NavLink} to="/issuer/list">Issuer</Nav.Link>
                                <Nav.Link as={NavLink} to="/verifier/list">Verifier</Nav.Link>
                            </>
                        )}
                    </Nav>
                    {user && (
                        <Nav>
                            <NavDropdown title={user.username} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    )}
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/holder/login" element={<Login role="Holder" />} />
                            <Route path="/holder/list" element={<HolderRequestsList />} />
                            <Route path="/holder/register" element={<Register role="Holder" />} />
                            <Route path="/holder/request" element={<Request />} />

                            <Route path="/issuer/login" element={<Login role="Issuer" />} />
                            <Route path="/issuer/register" element={<Register role="Issuer" />} />
                            <Route path="/issuer/list" element={<IssuerRequestsList />} />

                            <Route path="/verifier/login" element={<Login role="Verifier" />} />
                            <Route path="/verifier/register" element={<Register role="Verifier" />} />
                            <Route path="/verifier/list" element={<VerifierRequestsList />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );

}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user
    };
}

export default connect(mapStateToProps)(App);