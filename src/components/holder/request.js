import { Form, Button, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { connect } from "react-redux";

function Request({ user }) {

    if (!user) {
        return <Navigate to="/holder/login" />;
    }

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/holder/list" }}>Holder</Breadcrumb.Item>
                <Breadcrumb.Item active>Request Record</Breadcrumb.Item>
            </Breadcrumb>
            <Row className='mt-3'>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBirthday">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="text" placeholder="Birthday" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formRecordType">
                            <Form.Label>Record Type</Form.Label>
                            <Form.Check
                                type="checkbox"
                                id="identityDetails"
                                label="Identity Details"
                            />
                            <Form.Check
                                type="checkbox"
                                id="creditScores"
                                label="Credit Scores"
                            />
                            <Form.Check
                                type="checkbox"
                                id="educationRecords"
                                label="Education Records"
                            />
                            <Form.Check
                                type="checkbox"
                                id="employmentHistory"
                                label="Employment History"
                            />
                            <Form.Check
                                type="checkbox"
                                id="criminalRecords"
                                label="Criminal Records"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        {" "}
                        <Link to="/holder/list">
                            <Button variant="secondary">Back</Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Request);