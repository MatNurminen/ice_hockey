import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  player: {
    backgroundColor: '#0b3548',
    color: '#fff',
  },
  tableHead: {
    backgroundColor: '#0b3548',
  },
  tableCell: {
    color: '#fff',
  },
  boxTable: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  boxTblItem: {
    fontSize: 16,
    fontWeight: 600,
  },
  redHeader: {
    backgroundColor: '#ca3136',
  },
  boxRedItem: {
    fontSize: 14,
    fontWeight: 600,
  },
  cardHeight: {
    height: '100%',
  },
  imgFlag: {
    height: theme.spacing(15),
    width: 'auto',
  },
  hr: {
    marginTop: '20px',
    marginBottom: '20px',
    borderTop: '0.5px',
  },
  btn: {
    backgroundColor: '#00a651',
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      background: '#118442',
    },
  },
});

export default (component) => withStyles(styles)(component);
