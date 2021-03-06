import React, {Fragment, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";

const axios = require('axios');
export default function Tweet() {
    const location = useLocation();
    const [tweet, setTweet] = useState(location.state.item.content);
    const [tweetID, setTweetID] = useState(location.state.item.id);
    /*{
    const [cookies] = useCookies(['userId']);
    const [Newtweet, setNewTweet] = useState("");
}*/
    const handleChange = (event) => {
        setTweet(event && event.target.value ? event.target.value: "");
    };

    const update = async (id) => {
        if (tweet) {
            axios.put('http://localhost:3005/tweets/update/' + id, {
                content: tweet,
            })
                .then(async (res) => {
                    window.location.href='/tweet'
                });
        }
        /*{
        axios.put('http://localhost:3005/tweets/update/' + id, {
            user_id: cookies.userId,
            content : Newtweet,
        });
        setNewTweet("")
        window.location.href ='/tweet';}*/
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
                            onChange={handleChange}
                           />
                        </Form.Group>
                        <Button 
                        ariant="primary" 
                        size="sm"
                        onClick={() => update(tweetID)}
                        >update
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

