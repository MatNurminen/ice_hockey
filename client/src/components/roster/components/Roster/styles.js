import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  clubHead: {
    backgroundColor: '#fff',
    height: '80px',
  },
  mainHead: {
    backgroundColor: '#000',
  },
  headText: {
    color: '#fff',
  },
  teamlogo: {
    height: 60,
  },
  tblRow: {
    backgroundColor: '#fff',
    '&:nth-of-type(odd)': {
      backgroundColor: '#e5e5e5',
    },
  },
  dialogBtn: {
    margin: 10,
  },
  centerDiv: {
    textAlign: 'center',
  },
  endDiv: {
    marginRight: 50,
    textAlign: 'end',
  },
});

export default (component) => withStyles(styles)(component);
