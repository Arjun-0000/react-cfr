import React from 'react';
import { Description } from './Description';
import { Login } from './Login';
import './Header.css';
import { Col, Container, Row } from 'reactstrap';

export const Header = () => {
    return (
        <div className= "backgroundHead">
            <Container>
                <Row xs="2">
                    <Col xs="6" >
                        <Description />
                    </Col>
                    <Col xs="2" ></Col>
                    <Col xs="4" >
                        <Login />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;
