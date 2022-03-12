import React from 'react';
import { BrowserRouter as Router , Link, Route } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import Background from './Special/Background';

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
                    <Col xs = "12"> 
                        <a href="./Special"><Button className="btn btn-secondary">Try JS</Button></a>   
                        <Router>
                            <Link to="/Special" className="btn btn-danger">Special</Link>
                            <Route path="/Special" component={Background} >
                                
                            </Route>
                        </Router>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
