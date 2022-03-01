import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  tableCell: {
    color: '#fff',
  },
  rowHeader: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  hr: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

export default (component) => withStyles(styles)(component);
