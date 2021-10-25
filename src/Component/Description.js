import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

export const Description = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="12">
                        Your courses to Success
                        Build skills with courses, certificates, and degrees online from class.
                    </Col>
                    <Col>
                        <Button color="primary">Join For Free</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
