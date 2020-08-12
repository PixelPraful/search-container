import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

import SearchContainer from './components/SearchContainer';
// import asyncComponent from './hoc/asynComponent/asyncComponent';

class App extends React.Component {

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
