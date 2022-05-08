import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
    padding: '10px',
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  flag: {
    width: '24px',
    //marginRight: '10px',
  },
  tblRow: {
    backgroundColor: '#fff',
    '&:nth-of-type(odd)': {
      backgroundColor: '#ecf1f3',
    },
  },
});

export default (component) => withStyles(styles)(component);
