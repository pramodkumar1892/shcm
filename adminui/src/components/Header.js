import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
		float: "left",
		margin: "0 10px"
  },
  logout: {
      float: "right"
  },
  toolbar: {
      display: "flex",
      justifyContent: 'space-between'
  },
  linkItem: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
					<div>
						<Typography variant="h6" className={classes.title}>
            <Link className={classes.linkItem} to="/dashboard">Home</Link>
						</Typography>
						<Typography variant="h6" className={classes.title}>
              <Link className={classes.linkItem} to="/requests">Requests</Link>
						</Typography>
          </div>
          <Button onClick={() => { window.location = '/login' }} color="inherit" className={classes.logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}