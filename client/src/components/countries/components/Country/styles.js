import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  img: {
    marginTop: 10,
    width: '80%',
  },
  item: {
    backgroundColor: '#778899',
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  headText: {
    color: '#ffffff',
  },
  jerseyAva: {
    display: 'flex',
  },
});

export default (component) => withStyles(styles)(component);
