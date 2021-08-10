import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#00a651',
    color: '#fff',
    fontWeight: '700',
  },
});

export default (component) => withStyles(styles)(component);
