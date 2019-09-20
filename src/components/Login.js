/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Button from '../components/common/Button';
import Input from './common/Input';
import firebase from 'firebase';
import {Text} from 'react-native';
import Spinner from './common/Spinner';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress = () => {
    this.setState({
      error: '',
      loading: true,
    });
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            //show user the error
            this.setState({
              error: 'authentication failed',
              loading: false,
            });
          });
      });
  };

  displayButton() {
    const {loading} = this.state;
    if  (loading) {
      return <Spinner size={'small'} />;;
    }

    return <Button value={'login'} onPress={this.onButtonPress.bind(this)} />;
   
  }

  render() {
    const {error} = this.state;
    const {errors} = styles;

    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder="user@gmail.com"
            label={'Email'}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder="password"
            label={'Password'}
            secureTextEntry
          />
        </CardSection>

        <Text styles={errors}>{error}</Text>

        <CardSection>{this.displayButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errors: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};
export default Login;
