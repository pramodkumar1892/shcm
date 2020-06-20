/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {
  Button,
  Container,
  Label,
  Content,
  Form,
  Item,
  Input,
  Text,
} from 'native-base';
import {Formik} from 'formik';
import ErrorMessage from './ErrorMessage';
import {object, string} from 'yup';
import Header from './Header';
import {login} from './../actions/auth.action';

const initialValues = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {},
  content: {
    display: 'flex',
    // alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    marginLeft: 10,
    marginRight: 10,
    // backgroundColor: 'red',
  },
  form: {},
  margin10: {
    marginTop: 10,
    marginBottom: 10,
  },
  temp: {
    backgroundColor: 'red',
  },
});

const App = ({navigation}) => {
  const onSubmit = values => {
    login(
      values,
      () => {
        Snackbar.show({
          text: 'SignIn Success!',
          duration: Snackbar.LENGTH_SHORT,
          textColor: '#fff',
          backgroundColor: 'green',
        });
        navigation.navigate('Dashboard');
      },
      () => {
        Snackbar.show({
          text: 'SignIn Failed!',
          duration: Snackbar.LENGTH_SHORT,
          textColor: '#fff',
          backgroundColor: 'red',
        });
      },
    );
  };
  const onRegister = function() {
    navigation.navigate('Register');
  };
  return (
    <Container style={styles.container}>
      <Header title="Signin" />
      <Content contentContainerStyle={styles.content}>
        <Formik
          initialValues={initialValues}
          validationSchema={object({
            email: string()
              .required()
              .email(),
            password: string().required('Password is required'),
          })}
          onSubmit={onSubmit}>
          {({errors, handleChange, handleSubmit, values, setFieldTouched}) => {
            return (
              <Form style={styles.form}>
                <Item floatingLabel style={styles.margin10}>
                  <Label>Email</Label>
                  <Input
                    onChangeText={handleChange('email')}
                    onBlur={() => {
                      setFieldTouched('email');
                    }}
                    name="email"
                    value={values.email}
                    placeholder="Email"
                  />
                </Item>
                <ErrorMessage errorValue={errors.email} />
                <Item floatingLabel style={styles.margin10}>
                  <Label>Password</Label>
                  <Input
                    onChangeText={handleChange('password')}
                    onBlur={() => {
                      setFieldTouched('password');
                    }}
                    name="password"
                    value={values.password}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </Item>
                <ErrorMessage errorValue={errors.password} />
                <Button onPress={handleSubmit} style={styles.margin10} block>
                  <Text>Login</Text>
                </Button>
                <Button onPress={onRegister} style={styles.margin10} block>
                  <Text>Register</Text>
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Content>
    </Container>
  );
};

export default App;
