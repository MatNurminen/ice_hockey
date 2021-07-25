import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
  },
  totalRow: {
    backgroundColor: '#ca3136',
    color: '#ffffff',
  },
  tblMargin: {
    marginTop: 20,
    marginBottom: 30,
  },
});

export default (component) => withStyles(styles)(component);
