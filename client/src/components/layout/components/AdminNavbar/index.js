import React from 'react';
import styles from './styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PublicIcon from '@material-ui/icons/Public';
import GroupIcon from '@material-ui/icons/Group';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { useTheme } from '@material-ui/core/styles';

function AdminNavbar({ classes }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const tabValue = false;

  const tabItems = [
    { label: 'Nations', path: '/countries', icon: <PublicIcon /> },
    { label: 'Leagues', path: '/leagues', icon: <AllInboxIcon /> },
    { label: 'Teams', path: '/teams', icon: <GroupIcon /> },
    {
      label: 'Add Player',
      path: '/players/create/new',
      icon: <PersonAddIcon />,
    },
    { label: 'Edit Player', path: '/players', icon: <HowToRegIcon /> },
    { label: 'Add Roster', path: '', icon: <GroupAddIcon /> },
    { label: 'Add Tournament', path: '', icon: <PostAddIcon /> },
  ];

  const tabs = (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Tabs
          value={tabValue}
          className={classes.tabContainer}
          textColor='#fff'
        >
          {tabItems.map((tab, key) => {
            if (key === 0) {
              return (
                <Tab
                  key={key}
                  style={{ textDecoration: 'none' }}
                  className={classes.firsttab}
                  icon={tab.icon}
                  component={Link}
                  to={tab.path}
                  label={tab.label}
                />
              );
            } else {
              return (
                <Tab
                  key={key}
                  style={{ textDecoration: 'none' }}
                  className={classes.tab}
                  icon={tab.icon}
                  component={Link}
                  to={tab.path}
                  label={tab.label}
                />
              );
            }
          })}
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

export default styles(AdminNavbar);
