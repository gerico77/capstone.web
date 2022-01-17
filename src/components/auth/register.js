import { Form, Button, Row, Col, Breadcrumb, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { register } from '../../actions/auth';

function Register({ message }) {
    const initialUserState = {
        username: "",
        password: "",
    };

    const [user, setUser] = useState(initialUserState);
    const [successful, setSuccesful] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const registerUser = (e) => {
        const form = e.currentTarget;

        setSuccesful(false);

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        const { username, password } = user;

        dispatch(
            register(username, password)
        )
            .then(() => {
                setSuccesful(true);
            })
            .catch(() => {
                setSuccesful(false);
            });
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>role_name</Breadcrumb.Item>
                <Breadcrumb.Item active>Register</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={4}>
                    <Form>
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

                        <Button onClick={registerUser} variant="primary">
                            Register
                        </Button>
                        {" "}
                        <Link to="/">
                            <Button variant="secondary">Back</Button>
                        </Link>
                        {message && (
                            <Alert className='mt-3' variant={successful ? "primary" : "danger"}>
                                {message}
                            </Alert>
                        )}
                    </Form>
                </Col>
            </Row>
        </>
    );
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(Register);