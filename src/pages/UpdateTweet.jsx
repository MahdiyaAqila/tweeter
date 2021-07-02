import React, {Fragment,  Component, useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';


const axios = require('axios');
export default function Tweet() {
    const handleChange = (event) => {
        window.location.href ='/update';
    };

    return(
        <Fragment>           
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Tweet</title>
            </Helmet>       
            <Container>
                <Row>            
                    <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Update Tweet</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows="3" 
                            value={this.state.content} 
                           />
                        </Form.Group>
                        <Button 
                        ariant="primary" 
                        size="sm"
                        onClick={this.handleChange} 
                        >update
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

