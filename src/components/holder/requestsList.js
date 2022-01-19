import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Breadcrumb, Row, Col, Button, Modal, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { connect } from "react-redux";

function RequestsList({ user }) {
    const initialRow = {
        id: null,
        recordType: '',
        requestedOn: '',
        status: ''
    };

    const [currentRow, setCurrentRow] = useState(initialRow);
    const [show, setShow] = useState(false);

    if (!user) {
        return <Navigate to="/holder/login" />;
    }

    const ActionComponent = ({ row, onClick }) => {
        const clickHandler = () => onClick(row);

        return <Button onClick={clickHandler}><FontAwesomeIcon icon={faInfoCircle} /></Button>;
    };

    const handleClose = () => setShow(false);
    const handleShow = (row) => {
        setShow(true);
        setCurrentRow(row);
    };


    const columns = [
        {
            name: 'Record Type',
            selector: row => row.recordType,
        },
        {
            name: 'Requested on',
            selector: row => row.requestedOn,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            button: true,
            cell: (row) => <ActionComponent row={row} onClick={handleShow} />,
        },
    ];

    const data = [
        {
            id: 1,
            recordType: 'Identity Details',
            requestedOn: 'January 13, 2022',
            status: 'Pending for Issuer'
        },
        {
            id: 2,
            recordType: 'Credit Scores',
            requestedOn: 'January 14, 2022',
            status: 'Pending for Verifier'
        },
    ]

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>Holder</Breadcrumb.Item>
                <Breadcrumb.Item active>Requests List</Breadcrumb.Item>
            </Breadcrumb>

            <Link to="/holder/request">
                <Button variant="success"><FontAwesomeIcon icon={faPlusCircle} /> Request Record</Button>
            </Link>

            <Row className='mt-3'>
                <Col>
                    <DataTable
                        pagination
                        columns={columns}
                        data={data}
                    />
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentRow.recordType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentRow ? (
                        <ListGroup>
                            <ListGroup.Item>
                                Id: <strong>{currentRow.id}</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Request date: <strong>{currentRow.requestedOn}</strong>
                            </ListGroup.Item>
                        </ListGroup>
                    ) : ''}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Approve
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Reject
                    </Button>
                    <Button variant="light" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(RequestsList);