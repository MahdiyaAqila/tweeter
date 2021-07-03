import React,{ Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { useCookies } from 'react-cookie' ;
import routes from './conf/routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 
function App() {
  const [cookies,setCookie,removeCookie] = useCookies(['userId']);

  if (cookies && cookies.userId) {
    setCookie('userId', cookies.userId, {
        path: '/',
        maxAge: process.env.REACT_APP_ENV_COOKIES_MAX_AGE
    });
}

  function isLoggedIn(){
    return cookies.userId == 'undefined' || !cookies.userId ? false : true;
  }

    return (
    <Router>
      <Nav defaultActiveKey="/">
      {isLoggedIn() ?
          <Fragment>
              <Nav.Item as="li">
                <Nav.Link href="/tweet">Tweet</Nav.Link>
              </Nav.Item>

            <Nav.Item as="li">
              <Nav.Link onClick = {() => {
                  removeCookie('userId');
              }}>Logout</Nav.Link>
            </Nav.Item>
          </Fragment>
          
      :
      <Fragment>
          <Nav.Item as="li">
              <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link href="/registration">registrasi</Nav.Link>
          </Nav.Item>
      </Fragment>
      }
      </Nav>
      <Fragment>
        {routes.map(({ path, component, name}) => {
          return <Route exact path={path} key={name} component={component}   />
        })}
      </Fragment>
    </Router>
  );
}

export default App;
