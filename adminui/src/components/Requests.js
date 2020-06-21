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
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import {connect} from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import Header from './Header'
import useStyles from './Login.style'
import { fetchRequests, updateUser } from './../actions/shcm.action'

function createData(first_name, last_name, email) {
  return { first_name, last_name, email };
}

const rows = [
  createData('Adam', 'Gilchrist', 'adam@aus.com'),
  createData('max', 'miller', 'max@aus.com'),
];
 
function Requests({ updateUser }) { 
  const classes = useStyles()
  const [requests, setRequests] = useState([])
  useEffect(() => {
    fetchRequests((data) => {
      setRequests(data)
    })
  }, [])
	const onApprove = (event) => {
    const dataId = event.currentTarget.id
    updateUser(dataId, () => {
      fetchRequests((data) => {
        setRequests(data)
      })
    })
  }
	const acceptIcon = (row) => {
    return (
      <Tooltip title='Accept'>
        <IconButton
          onClick={onApprove}
          aria-label='Accept'
          id={row.id}
        >
            <ThumbUpAltIcon fontSize="small" color="primary" />
        </IconButton>
      </Tooltip>
    )
  }
	return (
		<Container component="main" className={classes.root}>
			<CssBaseline />
			<Paper elevation={0}>
				<Header selected="requests" />
				<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">FirstName</TableCell>
            <TableCell align="center">LastName</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
								{acceptIcon(row)}
							</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
			</Paper>
		</Container>
	)
	// }
}
const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {
    updateUser,
  },
)(Requests);
  