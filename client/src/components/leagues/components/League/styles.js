import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  logo: {
    width: 80,
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
