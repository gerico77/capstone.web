import { Form, Button, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>role_name</Breadcrumb.Item>
                <Breadcrumb.Item active>Login</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
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