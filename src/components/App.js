import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './layouts/Header';
import firebase from 'firebase';
import Login from './Login';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Spinner from './common/Spinner';

class App extends Component {
  state = {
    loggedIn: null,
  };

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

    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  displayContent() {
    const {loggedIn} = this.state;
    console.log(loggedIn);
    switch (loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              value={'Log Out'}
              onPress={() => firebase.auth().signOut()}
            />
          </CardSection>
        );

      case false:
        return <Login />;

      default:
        return <Spinner size={'large'} />;
    }
  }

  render() {
    return (
      <View>
        <Header header={'Auth'} />
        {this.displayContent()}
      </View>
    );
  }
}

export default App;
