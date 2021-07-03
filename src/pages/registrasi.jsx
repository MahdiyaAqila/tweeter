import React, {Fragment,  useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


const axios = require('axios');
export default function Tweet() {
    const [NewEmail, setNewEmail] = useState("");
    const [NewPassword, setNewPassword] = useState("");

    const handleChangeEmail = (event) => {
        setNewEmail(event && event.target.value ? event.target.value: "");
    };

    const handleChangePassword = (event) => {
        setNewPassword(event && event.target.value ? event.target.value: "");
    };

    const register = async () => {
        console.log(NewEmail);
        console.log(NewPassword);
        axios.post('http://localhost:3005/registration', {
            email: NewEmail,
            password: NewPassword
        })
            .then(async (res) => {
                setNewEmail(null);
                setNewPassword(null);
                window.location.href='/login'
            });
    };

        return(
            <Fragment>
                <Helmet>
                    <title>Register Page</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col>
                            <h2>REGISTER</h2>
                            <Form>
                            <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email address..."
                                        name="email"
                                        onChange={handleChangeEmail}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password..."
                                        name="password"
                                        onChange={handleChangePassword}
                                    />
                                </Form.Group>
                                <Button 
                                variant="primary" 
                                type="button" 
                                onClick={register} >
                                    regitser
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    } 
