import { Form, Button, Row, Col, Breadcrumb } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>role_name</Breadcrumb.Item>
                <Breadcrumb.Item active>Login</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={4}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        <Link to="/register">
                            <Button variant="link">
                                Create an account
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </>
    );
}