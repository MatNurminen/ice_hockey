import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#00a651',
    color: '#fff',
    fontWeight: '700',
  },
}));

const TokenButton = ({ children }) => {
  const token =
    window.localStorage.getItem('user') &&
    JSON.parse(window.localStorage.getItem('user')).token;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const childProps = !token ? { onClick: handleClick } : {};

  return (
    <>
      {React.cloneElement(children, childProps)}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        modifiers={{
          flip: {
            enabled: true,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'scrollParent',
          },
          arrow: {
            enabled: true,
            //element: arrowRef,
          },
        }}
      >
        <Typography variant='body2' className={classes.typography}>
          You need to Sign In to access this feature.
        </Typography>
        <Grid container justify='center'>
          <Button
            className={classes.button}
            size='small'
            variant='contained'
            component={RouterLink}
            to={'/login'}
          >
            Sign In
          </Button>
        </Grid>
      </Popover>
    </>
  );
};

export default TokenButton;
