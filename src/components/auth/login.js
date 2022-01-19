import { Form, Button, Row, Col, Breadcrumb, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { login } from '../../actions/auth';
import { clearMessage } from '../../actions/message';

function Login({ message, props }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const initialUserState = {
        username: "",
        password: "",
    };

    const [user, setUser] = useState(initialUserState);
    // const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // setLoading(true);

        const { username, password } = user;

        dispatch(
            login(username, password)
        )
            .then(() => {
                navigate(`/${props.role.toLowerCase()}/list`);
            })
            .catch(() => {
                // setLoading(false);
            });
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>{props.role}</Breadcrumb.Item>
                <Breadcrumb.Item active>Login</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={4}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={user.username}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Button type="submit" variant="primary">
                            Login
                        </Button>

                        <Link to={`/${props.role.toLowerCase()}/register`}>
                            <Button variant="link">
                                Create an account
                            </Button>
                        </Link>

                        {message && (
                            <Alert className="mt-3" variant="danger">
                                {message}
                            </Alert>
                        )}
                    </Form>
                </Col>
            </Row>
        </>
    );
}

function mapStateToProps(state, props) {
    const { message } = state.message;
    return {
        message,
        props
    };
}

export default connect(mapStateToProps)(Login);