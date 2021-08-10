import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
  },
});

export default (component) => withStyles(styles)(component);
