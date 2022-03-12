import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, List, Row } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';


const Structure = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs="12">
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        <BreadcrumbItem active>Classes classVariableHere</BreadcrumbItem>
                        <BreadcrumbItem >subjectVariableHere!</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col xs="3">
                    <List type="unstyled" style={topics}>
                        <h4>Topics</h4>
                        <li>First <span className="fa fa-angle-down"></span></li>
                        <li>Second <span className="fa fa-angle-down"></span></li>
                        <li>Third <span className="fa fa-angle-down"></span></li>
                        <li>Fourth <span className="fa fa-angle-down"></span></li>
                    </List>
                </Col>
                <Col xs={{ size: 9, offset: 0 }}>
                    <Row xs="2">
                        <Col xs="12">
                            <div style={{ border: "1px dotted black" }}>
                                Topics Content here
                            </div>
                        </Col>
                        <Col>
                            <Button color="primary">Prev</Button>
                            <Button color="primary">Next</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const topics = {
    width: "300px",
    border: "1px solid red"
}

export default Structure;
