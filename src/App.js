import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import { config } from '../config/firebaseConfig';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware( ReduxThunk ));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
