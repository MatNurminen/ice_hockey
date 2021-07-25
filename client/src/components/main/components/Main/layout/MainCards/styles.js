import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  boxMain: {
    borderRadius: 10,
    margin: 10,
    position: 'relative',
    display: 'inline - block',
    overflow: 'hidden',
  },
  imgMain: {
    width: '100%',
    transition: '0.3s',
    display: 'block',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  img: {
    borderRadius: 10,
    width: '100%',
  },
  cardLabel: {
    position: 'absolute',
    color: 'white',
    bottom: 5,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  fontMain: {
    fontWeight: 600,
  },
});

export default (component) => withStyles(styles)(component);
