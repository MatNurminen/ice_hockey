import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeagues } from '../../store/actions/leagueActions';
import { getSeasons } from '../../store/actions/seasonActions';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  avimg: {
    marginRight: 20,
    height: 30,
  },
});

export class leaguesForMain extends Component {
  componentDidMount() {
    this.props.getLeagues();
  }

  render() {
    const { classes, leagues } = this.props;
    if (!leagues) {
      return <h1>WAIT!</h1>;
    }
    return (
      <div className='bg-white'>
        <div className='text-white mainNav mb-3'>
          <h6 className='font-weight-bold my-0 p-3'>LEAGUE PAGES</h6>
        </div>
        <List aria-label='secondary mailbox folders'>
          {leagues.map((league) => (
            <ListItem
              button
              component={Link}
              to={`/rosters?league=${league.league_id}&year=2020`}
            >
              <img className={classes.avimg} alt='' src={league.logo} />
              <ListItemText key={league.league_id} primary={league.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  leagues: state.leagueReducer.leagues,
});

export default connect(mapStateToProps, { getLeagues, getSeasons })(
  withStyles(styles)(leaguesForMain)
);
