import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
});

export default (component) => withStyles(styles)(component);
