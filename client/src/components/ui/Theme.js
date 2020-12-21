import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#fff',
        },
      },
    },
  },
  palette: {
    common: {
      adminMenuBG: '#042e41',
      menuBG: '#063950',
      //orange: `${arcOrange}`,
    },
    // primary: {
    //   main: '#3f51b5',
    // },
    secondary: {
      main: '#ca3136',
    },
  },
  typography: {
    fontFamily: '"Exo", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 0,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
