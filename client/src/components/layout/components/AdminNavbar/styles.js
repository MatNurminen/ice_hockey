import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  tabContainer: {
    margin: 'auto',
  },
  toolbar: {
    backgroundColor: '#042e41',
  },
  firsttab: {
    borderStyle: 'solid',
    borderLeft: '0.5px',
    borderRight: '0.5px',
  },
  tab: {
    borderStyle: 'solid',
    borderRight: '0.5px',
  },
  appbar: {
    marginBottom: '2em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1em',
    },
  },
});

export default (component) => withStyles(styles)(component);
