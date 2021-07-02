import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  logo: {
    width: '20%',
  },
});

export default (component) => withStyles(styles)(component);
