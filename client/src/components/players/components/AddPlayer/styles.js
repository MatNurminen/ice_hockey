import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  num_pos: {
    '& > *': {
      margin: theme.spacing(2),
      width: '10ch',
    },
  },
  names: {
    '& > *': {
      marginTop: 0,
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
  more_fields: {
    '& > *': {
      marginTop: 0,
      margin: theme.spacing(2),
      width: '12ch',
    },
  },
  buttons: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      margin: theme.spacing(2),
    },
  },
  btnSubmit: {
    backgroundColor: '#00a651',
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      background: '#118442',
    },
  },
  btnCancel: {
    fontWeight: 'bold',
  },
});

export default (component) => withStyles(styles)(component);
