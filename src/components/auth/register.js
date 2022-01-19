import { Form, Button, Row, Col, Breadcrumb, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setMessage } from '../../actions/message';


function Register({ message, props }) {
    const initialUserState = {
        username: "",
        password: "",
        confirmPassword: "",
    };

    const [user, setUser] = useState(initialUserState);
    const [successful, setSuccesful] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        console.log(props.role);

        const { username, password, confirmPassword } = user;

        if (password !== confirmPassword) {
            dispatch(setMessage("Password and confirm password does not match."));
        } else {
            dispatch(
                register(username, password, props.role)
            )
                .then(() => {
                    setSuccesful(true);
    
                    dispatch(setMessage("User has been successfully registered."));
                })
                .catch(() => {
                    setSuccesful(false);
                });
        }
        
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>{props.role}</Breadcrumb.Item>
                <Breadcrumb.Item active>Register</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={4}>
                    <Form onSubmit={handleRegister}>
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
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Button type="submit" variant="primary">
                            Register
                        </Button>
                        {" "}
                        <Link to={`/${props.role.toLowerCase()}/login`}>
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

function mapStateToProps(state, props) {
    const { message } = state.message;
    return {
        message,
        props,
    };
}

export default connect(mapStateToProps)(Register);