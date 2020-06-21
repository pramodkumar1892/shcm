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
  import Table from '@material-ui/core/Table';
  import TableBody from '@material-ui/core/TableBody';
  import TableCell from '@material-ui/core/TableCell';
  import TableContainer from '@material-ui/core/TableContainer';
  import TableHead from '@material-ui/core/TableHead';
  import TableRow from '@material-ui/core/TableRow';
  import {connect} from 'react-redux';
	import React from 'react'
	import Header from './Header'
  import useStyles from './Login.style'
  import { fetchTap, fetchSingleTap } from './../actions/shcm.action'
  import isEmpty from 'lodash/isEmpty'
  import TapDetail from './TapDetail'

 const mapHistory = function(history) {
    return history
      .map(item => item[Object.keys(item)[0]])
      .map(item => {
        return {
          ...item,
          tapCollection: Array.isArray(item.tapCollection)
            ? item.tapCollection
            : Object.keys(item.tapCollection).map(
                mItem => item.tapCollection[mItem],
              ),
        };
      });
  };
 
  function Dashboard({ fetchTap, users }) { 
    const classes = useStyles()
    const [showDetail, setShowDetail] = React.useState(false)
    const [detail, setDetail] = React.useState({})
    React.useEffect(() => {
      if (isEmpty(users)) {
        fetchTap()
      }
    }, [])
    const handleRowClick = function (e) {
      const id = e.currentTarget.attributes['data-id'].value
      fetchSingleTap(id, (data) => {
        setDetail({
          user: users.find(user => user.id.toString() === id),
          collection: mapHistory(data)
        })
        setShowDetail(true)
      })
    }
    const closeDetail = () => {
      setDetail({})
      setShowDetail(false)
    }
    if (showDetail) {
      return <TapDetail detail={detail} onCancel={closeDetail} />
    }
    return (
      <Container component="main" className={classes.root}>
			<CssBaseline />
			<Paper elevation={0}>
				<Header selected="dashboard" />
				<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id} data-id={row.id} hover onClick={handleRowClick}>
              <TableCell align="center" component="th" scope="row">
                {`${row.first_name} ${row.last_name}`}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.active === 1 ? 'Yes' : 'No'}</TableCell>
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
    users: state.users,
  });
  
  /**
   *  connect function of redux
   */
  export default connect(
    mapStateToProps,
    {
      fetchTap,
    },
  )(Dashboard);
  