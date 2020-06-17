import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import brandLogoBig from './../appicon.PNG'
import useStyles from './Login.style'

function Login(props) {
  const formInitialState = {
    username: '',
    password: '',
  }
  const validationSchema = object({
    username: string().required(),
    password: string().required('Password is required'),
  })
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = (values, { resetForm, setErrors }) => {
    if (values.username === 'admin' && values.password === 'admin') {
			resetForm()
			enqueueSnackbar('Login Successful!', { variant: 'success' })
    } else {
			enqueueSnackbar("'Login Failed!", {
          variant: 'error',
        })
		}
  }

  return (
    <Container component="main" className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={0}>
        <Box
          height="100%"
          p={3}
          display={{ xs: 'none', sm: 'none', md: 'flex' }}
          className={classes.panelLeft + ' auth-left-panel'}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className={classes.brandLogo}>
            <img className="brand-logo" src={brandLogoBig} alt="" />
          </div>
        </Box>
        <Box
          height="100%"
          py={5}
          px={{ xs: 3, sm: 4, md: 5, xl: 10 }}
          display="flex"
          alignItems="center"
          className={classes.panelRight + ' auth-right-panel'}
        >
          <div className={classes.authInnerForm}>
            <Typography
              className="auth-title"
              component="h1"
              variant="h4"
              gutterBottom
            >
              Login
            </Typography>
            <Typography component="p" variant="subtitle2">
              Please login into admin account.
            </Typography>
            <Formik
              validationSchema={validationSchema}
              initialValues={formInitialState}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className={classes.form} noValidate autoComplete={'off'}>
                  <Field
                    name="username"
                    margin="normal"
                    as={TextField}
                    label="UserName"
                    fullWidth
                    id="username"
                    autoComplete="username"
                  />
                  <ErrorMessage name="username">
                    {(msg) => <span className="error">{msg}</span>}
                  </ErrorMessage>
                  <Field
                    name="password"
                    margin="normal"
                    type="password"
                    as={TextField}
                    label="Password"
                    fullWidth
                    id="password"
                    autoComplete="password"
                  />
                  <ErrorMessage name="password">
                    {(msg) => <span className="error">{msg}</span>}
                  </ErrorMessage>
                  <Grid
                    container
                    alignItems="center"
                    justify="space-between"
                    className={classes.spaceTop}
                  >
                    <Grid item>
                      <Button
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Paper>
    </Container>
  )
  // }
}

/**
 *  @exports connect function of redux
 */
export default Login
