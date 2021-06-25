import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

import { confirmError, logoutUser } from '../../store/actions/authActions';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: '#063950',
  },
  logo: {
    width: '100px',
  },
  tabContainer: {
    margin: 'auto',
  },
  tab: {
    fontWeight: 700,
    fontSize: '13.5px',
    '&:hover': {
      color: '#fff',
    },
  },
  button: {
    color: '#fff',
  },
  drawer: {
    backgroundColor: '#063950',
  },
  drawerIconContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    color: '#fff',
  },
  drawerIcon: {
    height: '30px',
    width: '30px',
  },
  indicator: {
    backgroundColor: '#fff',
    height: '3px',
  },
  listClass: {
    '&:hover': {
      color: '#000',
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isSignIn = !!props.user;
  //const [openMenu, setOpenMenu] = useState(false);
  const tabValue = false;

  const snackBar = (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!props.error}
      onClose={() => props.confirmError(null)}
      message={props.error}
      key='key'
    />
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        value={tabValue}
        className={classes.tabContainer}
        textColor='#fff'
        classes={{
          indicator: classes.indicator,
        }}
      >
        <Tab
          style={{ textDecoration: 'none' }}
          className={classes.tab}
          label='Stats'
          component={Link}
          to='/stats'
        />
        <Tab
          style={{ textDecoration: 'none' }}
          className={classes.tab}
          label='Teams'
          component={Link}
          to='/teams'
        />
        <Tab
          style={{ textDecoration: 'none' }}
          className={classes.tab}
          label='Leagues'
          component={Link}
          to='/leagues'
        />
        <Tab
          style={{ textDecoration: 'none' }}
          className={classes.tab}
          label='Nations'
          component={Link}
          to='/countries'
        />
        <Tab
          style={{ textDecoration: 'none' }}
          className={classes.tab}
          label='Free Agents'
          component={Link}
          to='/freeagents'
        />
        <Tab
          style={{ textDecoration: 'none' }}
          className={classes.tab}
          label='Drafts'
          component={Link}
          to='/drafts'
        />
        {!isSignIn && (
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            label='Sign In'
            component={Link}
            to='/login'
          />
        )}
        {isSignIn && (
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            label='Sign Out'
            component={Link}
            to='/'
            onClick={() => {
              props.logoutUser();
              window.localStorage.clear();
            }}
          />
        )}
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        className={classes.test}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/'
          >
            <ListItemText
              disableTypography
              primary={<Typography style={{ color: '#fff' }}>Home</Typography>}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/'
          >
            <ListItemText
              disableTypography
              primary={<Typography style={{ color: '#fff' }}>Stats</Typography>}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/'
          >
            <ListItemText
              disableTypography
              primary={<Typography style={{ color: '#fff' }}>Teams</Typography>}
            />
          </ListItem>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/leagues'
          >
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#fff' }}>Leagues</Typography>
              }
            />
          </ListItem>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/countries'
          >
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#fff' }}>Nations</Typography>
              }
            />
          </ListItem>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/'
          >
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#fff' }}>Free Agents</Typography>
              }
            />
          </ListItem>
          <ListItem
            button
            onClick={() => setOpenDrawer(false)}
            component={Link}
            to='/'
          >
            <ListItemText
              disableTypography
              primary={
                <Typography style={{ color: '#fff' }}>Drafts</Typography>
              }
            />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Button component={Link} to='/'>
            <img src='/img/logo.png' alt='' className={classes.logo} />
          </Button>
          {matches ? drawer : tabs}
          <Button className={classes.button} component={Link} to='/leagues'>
            Test button
          </Button>
          {snackBar}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  error: state.authReducer.error,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, {
  confirmError,
  logoutUser,
})(Navbar);
