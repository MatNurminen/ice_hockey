import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { moduleName as leaguesModule } from '../../../../../store/duck/leagues';

export class ClubsByLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
    };
  }
  render() {
    const { clubs } = this.props;

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
  clubs: state[leaguesModule].clubsByLeague,
});

export default connect(mapStateToProps)(ClubsByLeague);
