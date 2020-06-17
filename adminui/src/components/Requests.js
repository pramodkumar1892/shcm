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
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
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

function createData(first_name, last_name, email) {
  return { first_name, last_name, email };
}

const rows = [
  createData('Adam', 'Gilchrist', 'adam@aus.com'),
  createData('max', 'miller', 'max@aus.com'),
];
 
function Requests(props) { 
	const classes = useStyles()
	const onApprove = (event) => {
    const dataId = event.currentTarget.id
  }

  const onReject = (event) => {
    const dataId = event.currentTarget.id
  }
	const acceptIcon = (row) => {
    return (
      <Tooltip title='Accept'>
        <IconButton
          onClick={onApprove}
          aria-label='Accept'
          id={row.id}
        >
          {row.status === 'Approved' || row.status === 'Registered' ? (
            <ThumbUpAltIcon fontSize="small" color="primary" />
          ) : (
            <ThumbUpAltOutlinedIcon fontSize="small" color="primary" />
          )}
        </IconButton>
      </Tooltip>
    )
  }
  const rejectIcon = (row) => {
    return (
      <Tooltip title='Reject'>
        <IconButton
          onClick={onReject}
          aria-label='Reject'
          id={row.id}
        >
          {row.status === 'Rejected' ? (
            <ThumbDownAltIcon fontSize="small" color="secondary" />
          ) : (
            <ThumbDownOutlinedIcon fontSize="small" color="secondary" />
          )}
        </IconButton>
      </Tooltip>
    )
  }
	return (
		<Container component="main" className={classes.root}>
			<CssBaseline />
			<Paper elevation={0}>
				<Header />
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
								{acceptIcon({})}
								{rejectIcon({})}
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
export default Requests
  