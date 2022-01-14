import DataTable from 'react-data-table-component';
import { Breadcrumb, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

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
        cell: () => <Button><FontAwesomeIcon icon={faInfoCircle} /></Button>,
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

export default function RequestLists() {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item active>Verifier</Breadcrumb.Item>
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
        </>
    );
};
