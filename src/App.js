import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import firebase from './firebase';

import SearchContainer from './components/SearchContainer';
// import asyncComponent from './hoc/asynComponent/asyncComponent';

class App extends React.Component {

  componentDidMount() {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.log("Token", data);
    })
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={SearchContainer} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
