import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { Grid } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import HeaderLink from '../../Molecules/HeaderLink';
// import Link from '../../Atoms/Link';

import './style.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        textTransform: 'none',
        fontSize: '1.1em',
        padding:0,
        minHeight: 50,
        minWidth: 0,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* 
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton> 
                    */}
                    <Typography variant="title" color="inherit" className={classes.grow}>
                        <Button className={classes.title} variant="text" color="inherit">QTemu</Button>
                    </Typography>
                    <Button color="inherit">Create Meetup</Button>
                    <Button color="inherit">Explore</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
