import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './layouts/Header';
import firebase from 'firebase';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDKF_otgQvi8YmrLdPO-sKnu1W4Vh-wPrc',
      authDomain: 'auth-b6e23.firebaseapp.com',
      databaseURL: 'https://auth-b6e23.firebaseio.com',
      projectId: 'auth-b6e23',
      storageBucket: '',
      messagingSenderId: '1055693031913',
      appId: '1:1055693031913:web:3cfaed449ce2d603352378',
    });
  }

  render() {
    return (
      <View>
        <Header header={'Auth'} />
        <Login/>
      </View>
    );
  }
}

export default App;
