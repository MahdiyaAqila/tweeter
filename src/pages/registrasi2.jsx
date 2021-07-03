
class registrasi2 extends Component {
    constructor(props) {
        super(props);

        this.axios = require('axios');
        this.state ={
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    loginProcess = () => {
        if (this.state.isAuthenticating){
            const username = this.state.email;
            const password = this.state.password;

            const token = Buffer.from(`${username}:${password}`,'utf8').toString('base64');
            const url = 'http://localhost:3005/authenticate';

            this.axios.post(url, {}, {
                headers : {
                    'Authorization' :`Basic ${token}`
                }
            })
            .then((response) => {
                this.setState(prevState => {
                    return Object.assign({}, prevState, {
                        isAuthenticating :false
                    });
                }, () => {
                    if (response.data.id){
                        this.setUserCookie(response.data.id);
                        window.location.href ='/tweet';
                    }else {
                        this.setState(prevState => {
                            return Object.assign({}, prevState, {
                                errorMessage: response.data.message
                            });
                        });
                    }
                });
            })

            .catch((response) => {
                this.setState(prevState => {
                    return Object.assign({}, prevState, {
                            isAuthenticating : false
                    });
                })
            });
        }
    }

    handleChange = (event) => {
        let { name , value } = event.target;
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                [name] : value
            });
        });
    }

    render(){
        return(
            <Fragment>
            <Helmet>
                <title>REGISTER Page</title>
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
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password..."
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.login} >
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
}

export default registrasi2;