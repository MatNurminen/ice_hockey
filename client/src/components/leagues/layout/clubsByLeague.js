import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import { getClubsByLeague } from '../../../store/actions/leagueActions';

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
  componentDidMount() {
    //const league_id = this.props.match.params.league_id;
    //console.log('TEST: ' + this.props.match.params.league_id);
    const league_id = 2;
    this.props.getClubsByLeague(league_id);
  }
  render() {
    const { clubs, classes } = this.props;

    if (!clubs) {
      return <h1>WAIT!</h1>;
    }

    return (
      <Container>
        <List>
          {clubs.map((club) => (
            <ListItem component={Link} to={'/clubs/' + club.club_id}>
              {club.club}
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

export default connect(mapStateToProps, { getClubsByLeague })(
  withStyles(styles)(ClubsByLeague)
);
