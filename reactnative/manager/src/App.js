import React from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDJBk4JPNWzn3WcqD9eD6IAoJuLnM_LWTE",
      authDomain: "manager-3450b.firebaseapp.com",
      databaseURL: "https://manager-3450b.firebaseio.com",
      projectId: "manager-3450b",
      storageBucket: "manager-3450b.appspot.com",
      messagingSenderId: "711384234620"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;