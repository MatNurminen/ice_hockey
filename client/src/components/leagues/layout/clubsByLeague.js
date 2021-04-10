import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  logo: {
    width: 80,
  },
});

export class ClubsByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
    };
  }
  render() {
    const { clubs, classes } = this.props;

    if (!clubs) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <List dense={true}>
          {clubs.map((club) => (
            <ListItem>
              <Link component={RouterLink} to={'/clubs/' + club.club_id}>
                {club.club}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  clubs: state.leagueReducer.clubsByLeague,
});

export default connect(mapStateToProps)(withStyles(styles)(ClubsByLeague));
