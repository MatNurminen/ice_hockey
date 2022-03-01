import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 140,
  },
  clubsLeftLabel: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  clubsRightLabel: {
    marginLeft: theme.spacing(3),
  },
});

export default (component) => withStyles(styles)(component);
