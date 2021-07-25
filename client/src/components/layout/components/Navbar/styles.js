import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
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
});

export default (component) => withStyles(styles)(component);
