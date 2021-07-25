import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  footer: {
    marginTop: '2rem',
    backgroundColor: theme.palette.common.black,
    width: '100%',
    height: '200px',
  },
  logo: {
    width: '80px',
  },
  mainContainer: {
    position: 'absolute',
    height: '200px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      color: '#fff',
    },
  },
  gridItem: {
    marginLeft: '3em',
  },
});

export default (component) => withStyles(styles)(component);
