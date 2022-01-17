import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Breadcrumb, Row, Col, Button, Modal, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function RequestLists() {
    const initialRow = {
        id: null,
        recordType: '',
        firstName: '',
        lastName: '',
        requestedOn: '',
        status: ''
    };

    const [currentRow, setCurrentRow] = useState(initialRow);

    const ActionComponent = ({ row, onClick }) => {
        const clickHandler = () => onClick(row);

        return <Button onClick={clickHandler}><FontAwesomeIcon icon={faInfoCircle} /></Button>;
    };

    const [show, setShow] = useState(false);

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
            name: 'First Name',
            selector: row => row.firstName,
        },
        {
            name: 'Last Name',
            selector: row => row.lastName,
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
            firstName: 'John',
            lastName: 'Doe',
            requestedOn: 'January 13, 2022',
            status: 'Pending for Issuer'
        },
        {
            id: 2,
            recordType: 'Credit Scores',
            firstName: 'Gerico',
            lastName: 'Villegas',
            requestedOn: 'January 14, 2022',
            status: 'Pending for Verifier'
        },
    ]

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>Issuer</Breadcrumb.Item>
                <Breadcrumb.Item active>Requests List</Breadcrumb.Item>
            </Breadcrumb>
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
                                Full name: <strong>{currentRow.firstName + ' ' + currentRow.lastName}</strong>
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
