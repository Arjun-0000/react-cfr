import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, CardFooter } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    return (
        <div>
            <Card style={cardStyle}>
                <CardHeader><h3>Sign-In</h3></CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup row className="input-group mt-3">
                            <Col sm={1} >
                                <Label className="input-group-prepend input-group-text" htmlFor="email"><span className="fa fa-user"></span></Label>
                            </Col>
                            <Col sm={11}>
                                <Input type="email" name="email" id="email" placeholder="Email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="input-group mt-3">
                            <Col sm={1}>
                                <Label className="input-group-prepend input-group-text" htmlFor="password" sm={1}><span className="fa fa-key"></span></Label>
                            </Col>
                            <Col sm={11}>
                                <Input type="password" name="password" id="password" placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row className="mt-3">
                            <Col sm={{ offset: 1 }}>
                                <Input type="checkbox" />Remember Me!
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 8 }}>
                                <Button color="success">Login</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter>
                    Don't have an account?<a href="/">Sign Up</a>
					<br />
					<a href="/">Forgot Your Password?</a>
                </CardFooter>
            </Card>
        </div>
    )
}

const cardStyle = {
    minWidth: "360px",
    height: "350px",
    backgroundColor: "rgba(20,20,20,0.5)",
    color: "#ffffff",
    marginTop: "100px"
}
