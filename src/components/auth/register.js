import { Form, Button, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>role_name</Breadcrumb.Item>
                <Breadcrumb.Item active>Register</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        {" "}
                        <Link to="/">
                            <Button variant="secondary">Cancel</Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </>
    );
}