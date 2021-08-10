import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 140,
  },
  clubsLabel: {
    marginLeft: theme.spacing(3),
  },
});

export default (component) => withStyles(styles)(component);
