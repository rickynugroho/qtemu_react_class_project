import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
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
                        <Typography className={styles.title} variant="title" color="inherit">
                            Qtemu
                        </Typography>
                        <Button color="inherit">Create Meetup</Button>
                        <Button color="inherit">Explore</Button>
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