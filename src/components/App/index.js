import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import SignUp from '../SignUp';
import LogIn from '../LogIn';
import ErrorPage from '../ErrorPage';
import Welcome from '../Welcome';
import ForgetPassword from '../ForgetPassword';

import '../../App.css';

function App() {
  return (
    <Router>
      <Header />


        <Switch>

          <Route exact path = "/" component = {Landing} />
          <Route path = "/welcome" component = {Welcome} />
          <Route path = "/login" component = {LogIn} />
          <Route path = "/signup" component = {SignUp} />
          <Route path = "/forgetpassword" component = {ForgetPassword} />
          <Route component = {ErrorPage} />
    

        </Switch>


      <Footer />
    </Router>
  );
}

export default App;
