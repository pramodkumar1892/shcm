import {Box, Button, Paper, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import moment from 'moment'
import React from "react";
import useStyles from "./Login.style";
import Divider from '@material-ui/core/Divider';

/**
 * Defines a component Create CSR modal
 * @param props
 * @returns {*}
 * @constructor
 */

function CreateCsr(props) {
    const classes = useStyles();
    const { detail, onCancel } = props;
    return (
        <Paper component="div" className={classes.modalPaper + " modal"}>
            <div className="modal-container">
                <div className="modal-header">
                    <Typography component="h5" variant="h6">
                    {`${detail.user.first_name} ${detail.user.last_name}`}
                    </Typography>
                </div>
                <div className="modal-content">
                    <div className="modal-content-child">
                    {detail.collection.map(item => (
                        <>
                            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>{item.date}</Typography>
                                <Typography>{item.weekDay}</Typography>
                            </Box>
                            {item.tapCollection.map(tapItem => (
                                <React.Fragment key={tapItem.id}>
                                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography>{`Tap in - ${
                                            tapItem.tap_in
                                            ? moment(tapItem.tap_in).format('h:mm:ss A')
                                            : ''
                                        }`}</Typography>
                                        <Typography>{`Tap out - ${
                                            tapItem.tap_out
                                            ? moment(tapItem.tap_out).format('h:mm:ss A')
                                            : 'TBA'
                                        }`}</Typography>
                                    </Box>
                                    {tapItem.reason && <Typography>{`Reason: ${tapItem.reason}`}</Typography>}
                                    <Divider />
                                </React.Fragment>
                            ))}
                            <Box itemDivider>
                                <Typography>{item.workDuration}</Typography>
                            </Box>
                            <div style={{ height: '20px' }} />
                        </>
                    ))}
                    </div>
                </div>
                <Box className="modal-action" px={4} py={2} display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="primary"
                        onClick={onCancel}>
                    Cancel
                </Button>
            </Box>
            </div>
        </Paper>
    );


}

CreateCsr.propTypes = {
    siteObject:PropTypes.object,
	callback:PropTypes.func,
	closeCSRScreen: PropTypes.func
};

/**
 * Create CSR   modal component
 */
export default CreateCsr;