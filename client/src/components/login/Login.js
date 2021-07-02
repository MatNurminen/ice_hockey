import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, moduleName as authModule } from '../../store/duck/auth';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  form: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(4),
      width: '100%',
    },
  },
  btn: {
    marginTop: theme.spacing(4),
    backgroundColor: '#00a651',
    color: '#fff',
    fontWeight: 'bold',
    '&:hover': {
      background: '#118442',
    },
  },
});

export class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    const { classes } = this.props;
    if (this.props.user) {
      return <Redirect to='/' />;
    }
    return (
      <Container>
        <Paper className={classes.root}>
          <Typography align='center' variant='h4'>
            <Box fontWeight='fontWeightBold'>Sign In</Box>
          </Typography>
          <form
            className={classes.form}
            noValidate
            autoComplete='off'
            onSubmit={this.onSubmit}
          >
            <Grid container spacing={3}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <TextField
                  size='small'
                  label='Login'
                  variant='outlined'
                  value={this.state.login}
                  onChange={this.onChange}
                  name='login'
                />

                <TextField
                  size='small'
                  type='password'
                  label='Password'
                  variant='outlined'
                  value={this.state.password}
                  onChange={this.onChange}
                  name='password'
                />
                <Button
                  type='submit'
                  className={classes.btn}
                  variant='contained'
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </form>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state[authModule].user,
});

export default connect(mapStateToProps, { loginUser })(
  withStyles(styles)(Login)
);
