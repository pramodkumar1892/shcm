import { makeStyles } from '@material-ui/core/styles'

import { StyleVariables } from './../helpers/StyleVariable'

/**
 * Material UI framework styling object
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    height: '100vh',
    marginTop: '20px'
  },
  paper: {
    marginTop: theme.spacing(0),
    display: StyleVariables.displayFlex,
    flexDirection: StyleVariables.flexDirectionRow,
    alignItems: StyleVariables.alignCenter,
    height: StyleVariables.fullHeight,
  },
  form: {
    width: StyleVariables.fullWidth, // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  spaceTop: {
    marginTop: theme.spacing(3),
  },
  linkItem: {
    color: StyleVariables.mutedColor,
    textDecoration: StyleVariables.none,
    '&:hover': {
      textDecoration: StyleVariables.underline,
    },
  },
  staticLink: {
    color: StyleVariables.whiteColor,
    textDecoration: StyleVariables.none,
    margin: theme.spacing(0, 1, 1),
    '&:hover': {
      textDecoration: StyleVariables.underline,
    },
  },
  brandLogo: {
    alignItems: StyleVariables.alignCenter,
    justifyContent: StyleVariables.alignCenter,
    width: StyleVariables.fullWidth,
    display: StyleVariables.displayFlex,
    height: StyleVariables.fullHeight,
  },
  panelRight: {
    width: '65%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  panelLeft: {
    width: '35%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  authInnerForm: {
    textAlign: StyleVariables.alignCenter,
    margin: StyleVariables.alignAuto,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
    },
  },
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}))

export default useStyles
