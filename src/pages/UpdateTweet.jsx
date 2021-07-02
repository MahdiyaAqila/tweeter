import React, {Fragment,  Component, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useCookies } from 'react-cookie';


const axios = require('axios');
export default function Tweet() {
    const [cookies] = useCookies(['userId']);
    const [tweet, setTweet] = useState("");
    const [Newtweet, setNewTweet] = useState("");

    const update = async (id) => {
        axios.put('http://localhost:3005/tweets/update/' + id, {
            user_id: cookies.userId,
            content : Newtweet,
        });
        setNewTweet("")
        window.location.href ='/tweet';
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
                            onChange ={(e) => {
                                setNewTweet(e.target.value);
                            }}
                           />
                        </Form.Group>
                        <Button 
                        ariant="primary" 
                        size="sm"
                        onClick={()=> {update(cookies.userId)}}
                        >update
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

