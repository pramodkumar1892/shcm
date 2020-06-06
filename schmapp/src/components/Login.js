/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {Button, Container, Label, Content, Form, Item, Input, Text} from 'native-base';
import Header from './Header'
import { login } from './../actions/auth.action'

const styles = StyleSheet.create({
    container: {
		},
		content: {
			display: "flex",
			// alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			height: '100%',
			marginLeft: 10,
			marginRight: 10,
			// backgroundColor: 'red',
    },
    form: {
		},
		margin10: {
			marginTop: 10,
			marginBottom: 10
		},
    temp: {
			backgroundColor: 'red',
    },
  });

const App = ({ navigation  }) => {
  const [registerState, setRegisterState] = useState({
    email: '',
    password: ''
  })
  const onChange = (field) => (value) => {
    setRegisterState({
      ...registerState,
      [field]: value
    })
  }
  const onSubmit = () => {
    login(registerState, () => {
      Snackbar.show({
        text: 'SignIn Success!',
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
        backgroundColor: 'green'
      });
      navigation.navigate('Dashboard')
    }, () => {
      Snackbar.show({
        text: 'SignIn Failed!',
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
        backgroundColor: 'red'
      });
    })
  }
	const onRegister = function () {
		navigation.navigate('Register')
	}
  return (
    <Container style={styles.container}>
      <Header title='Signin' />
      <Content contentContainerStyle={styles.content}>
        <Form style={styles.form}>
          <Item floatingLabel style={styles.margin10}>
            <Label>Email</Label>
            <Input onChangeText={onChange('email')} name='email' value={registerState.email} placeholder="Email" />
          </Item>
          <Item floatingLabel style={styles.margin10}>
            <Label>Password</Label>
            <Input onChangeText={onChange('password')} name='password' value={registerState.password} secureTextEntry={true} placeholder="Password" />
          </Item>
          <Button onPress={onSubmit} style={styles.margin10} block>
            <Text>Login</Text>
          </Button>
          <Button onPress={onRegister} style={styles.margin10} block>
            <Text>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default App;
