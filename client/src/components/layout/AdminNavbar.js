import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, useMediaQuery } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PublicIcon from '@material-ui/icons/Public';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    margin: 'auto',
  },
  toolbar: {
    backgroundColor: '#042e41',
  },
  tab: {
    borderStyle: 'solid',
    borderLeft: '0.5px',
    '&:hover': {
      color: '#fff',
    },
  },
  lasttab: {
    borderStyle: 'solid',
    borderLeft: '0.5px',
    borderRight: '0.5px',
  },
  appbar: {
    marginBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1em',
    },
  },
}));

export default function AdminNavbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const tabValue = false;

  const tabs = (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Tabs
          value={tabValue}
          className={classes.tabContainer}
          textColor='#fff'
        >
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            icon={<PublicIcon />}
            component={Link}
            to='/countries'
            label='Nations'
          />
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            icon={<AllInboxIcon />}
            component={Link}
            //to='/leagues'
            to='/rosters?league=15&year=2019'
            label='Leagues'
          />
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            icon={<GroupIcon />}
            component={Link}
            to='/teams'
            label='Teams'
          />
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            icon={<PersonAddIcon />}
            label='Add Player'
          />
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            icon={<HowToRegIcon />}
            component={Link}
            to='/players'
            label='Edit Player'
          />
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.tab}
            icon={<GroupAddIcon />}
            label='Add Roster'
          />
          <Tab
            style={{ textDecoration: 'none' }}
            className={classes.lasttab}
            icon={<PostAddIcon />}
            label='Add Tournament'
          />
        </Tabs>
      </Toolbar>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AppBar className={classes.appbar} position='static'>
        {matches ? null : tabs}
      </AppBar>
    </React.Fragment>
  );
}
