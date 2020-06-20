/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {Button, Container, Content, Item, Input, Text, Form} from 'native-base';
import {Formik} from 'formik';
import ErrorMessage from './ErrorMessage';
import {object, ref, string} from 'yup';
import Header from './Header';
import {register} from './../actions/auth.action';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
  active: 1,
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
    register(
      values,
      () => {
        Snackbar.show({
          text: 'Registeration Success!',
          duration: Snackbar.LENGTH_SHORT,
          textColor: '#fff',
          backgroundColor: 'green',
        });
        !!navigation && navigation.goBack();
      },
      () => {
        Snackbar.show({
          text: 'Registeration Failed!',
          duration: Snackbar.LENGTH_SHORT,
          textColor: '#fff',
          backgroundColor: 'red',
        });
      },
    );
  };
  return (
    <Container style={styles.container}>
      <Header showBack navigation={navigation} title="Register" />
      <Content contentContainerStyle={styles.content}>
        <Formik
          initialValues={initialValues}
          validationSchema={object({
            email: string()
              .required()
              .email(),
            first_name: string().required(),
            last_name: string().required(),
            password: string().required('Password is required'),
            confirm_password: string()
              .oneOf([ref('password'), null], "Passwords don't match")
              .required('Password confirm is required'),
          })}
          onSubmit={onSubmit}>
          {({errors, handleChange, handleSubmit, values, setFieldTouched}) => {
            return (
              <Form style={styles.form}>
                <Item floatingLabel style={styles.margin10}>
                  <Input
                    onChangeText={handleChange('first_name')}
                    onBlur={() => {
                      setFieldTouched('first_name');
                    }}
                    name="first_name"
                    value={values.first_name}
                    placeholder="First Name"
                  />
                  <ErrorMessage errorValue={errors.first_name} />
                </Item>
                <ErrorMessage errorValue={errors.first_name} />
                <Item floatingLabel style={styles.margin10}>
                  <Input
                    onChangeText={handleChange('last_name')}
                    onBlur={() => {
                      setFieldTouched('last_name');
                    }}
                    name="last_name"
                    value={values.last_name}
                    placeholder="Last Name"
                  />
                </Item>
                <ErrorMessage errorValue={errors.last_name} />
                <Item floatingLabel style={styles.margin10}>
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
                <Item floatingLabel style={styles.margin10}>
                  <Input
                    onChangeText={handleChange('confirm_password')}
                    onBlur={() => {
                      setFieldTouched('confirm_password');
                    }}
                    name="confirm_password"
                    value={values.confirm_password}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                  />
                </Item>
                <ErrorMessage errorValue={errors.confirm_password} />
                <Button onPress={handleSubmit} style={styles.margin10} block>
                  <Text>Request</Text>
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
