import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, value}) => {
  const {button, text} = styles;

  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },

  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};
export default Button;