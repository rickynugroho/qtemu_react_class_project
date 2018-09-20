import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
// import HeaderLink from '../../Molecules/HeaderLink';
// import Link from '../../Atoms/Link';

import 'typeface-roboto'
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
};

class Header extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         classTest: 'header',
    //     };
    // }

    // addClass() {
    //     let currentClass = this.state.classTest;
    //     this.setState({
    //         classTest: currentClass + ' ' + this.props.addClassOnClick,
    //     });
    // }

    render() {
        // const { classes } = props;
        return (
            <div className={styles.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        {/* 
                        <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton> 
                        */}
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            container spacing={12}
                        >
                            <Grid item xs={6}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                    spacing={12}
                                >
                                    <Grid item xs={3} xl={2}>
                                        <Typography className={styles.grow} variant="title" color="inherit">
                                            Qtemu
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} xl={2}>
                                        <Button color="inherit">Create Meetup</Button>
                                    </Grid>
                                    <Grid item xs={3} xl={2}>
                                        <Button color="inherit">Explore</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-end"
                                >
                                    <Button color="inherit">Login</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>

            // <div className={this.state.classTest} onClick={() => this.addClass()}>
            //     <HeaderLink>
            //         <Link text="Qtemu" className="title" />
            //         <Link text="Create Meetup" className="header-reg-link" />
            //         <Link text="Explore" className="header-reg-link" />
            //     </HeaderLink>
            //     <div>
            //         <Link text='Login' />
            //     </div>
            // </div>
        )
    }
}

export default withStyles(styles)(Header);