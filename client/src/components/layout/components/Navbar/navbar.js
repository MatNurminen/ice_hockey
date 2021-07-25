import React, { useState, useMemo } from 'react';
import styles from './styles';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

function Navbar({ classes, user, error, confirmError, logoutUser }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isSignIn = !!user;
  const tabValue = false;

  const snackBar = (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!error}
      onClose={() => confirmError(null)}
      message={error}
      key='key'
    />
  );

  const tabItems = useMemo(
    () => [
      { label: 'Home', to: '/', disabled: true },
      { label: 'Stats', to: '/stats' },
      { label: 'Teams', to: '/teams' },
      { label: 'Leagues', to: '/leagues' },
      { label: 'Nations', to: '/countries' },
      { label: 'Free Agents', to: '/freeagents' },
      { label: 'Drafts', to: '/drafts' },
      { label: 'Sign In', to: '/login', disabled: isSignIn },
      {
        label: 'Sign Out',
        to: '/',
        disabled: !isSignIn,
        onClick: () => {
          logoutUser();
          window.localStorage.clear();
        },
      },
    ],
    [isSignIn, logoutUser]
  );

  const tabs = useMemo(
    () => (
      <React.Fragment>
        <Tabs
          value={tabValue}
          className={classes.tabContainer}
          textColor='#fff'
          classes={{
            indicator: classes.indicator,
          }}
        >
          {tabItems.map((tab, key) => (
            <Tab
              key={key}
              style={{
                textDecoration: 'none',
                display: tab.disabled ? 'none' : 'inherit',
              }}
              className={classes.tab}
              label={tab.label}
              component={Link}
              {...tab}
            />
          ))}
        </Tabs>
      </React.Fragment>
    ),
    // eslint-disable-next-line
    [isSignIn]
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
          {tabItems.map((list, key) => (
            <ListItem
              key={key}
              button
              onClick={() => setOpenDrawer(false)}
              component={Link}
              to={list.to}
            >
              <ListItemText
                disableTypography
                primary={
                  <Typography style={{ color: '#fff' }}>
                    {list.label}
                  </Typography>
                }
              />
            </ListItem>
          ))}
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
          {snackBar}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default styles(Navbar);
