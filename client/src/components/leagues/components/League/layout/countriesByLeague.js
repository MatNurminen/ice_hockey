import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { moduleName as leaguesModule } from '../../../../../store/duck/leagues';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  rowHeader: {
    backgroundColor: '#0b3548',
  },
  tableHead: {
    backgroundColor: '#ca3136',
  },
  headText: {
    textTransform: 'uppercase',
  },
  flag: {
    width: '22px',
    marginRight: '10px',
  },
});
export class CountriesByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  render() {
    const { countries, classes } = this.props;

    if (!countries) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <Typography className={classes.headText}>
          <Box fontWeight='fontWeightBold'>Player Nationalities</Box>
        </Typography>
        <List dense={true}>
          {countries.map((country) => (
            <ListItem>
              <img className={classes.flag} src={'/' + country.flag} alt='' />
              {country.count} players
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state[leaguesModule].countriesByLeague,
});

export default connect(mapStateToProps)(withStyles(styles)(CountriesByLeague));
