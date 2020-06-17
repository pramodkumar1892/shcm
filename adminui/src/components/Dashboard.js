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
	import React from 'react'
	import Header from './Header'
	import useStyles from './Login.style'
 
  function Dashboard(props) { 
		const classes = useStyles()
    return (
      <Container component="main" className={classes.root}>
        <CssBaseline />
        <Paper elevation={0}>
          <Header />
					Dashboard
        </Paper>
      </Container>
    )
    // }
  }
  
  /**
   *  @exports connect function of redux
   */
  export default Dashboard
  