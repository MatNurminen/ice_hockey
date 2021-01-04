import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLeagues } from '../../store/actions/leagueActions';
import { getSeasons } from '../../store/actions/seasonActions';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  mainBackground: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ca3136',
    color: '#fff',
  },
  fontHeader: {
    fontWeight: 600,
    padding: 15,
  },
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
      <div className={classes.mainBackground}>
        <div className={classes.header}>
          <Typography variant='h6' className={classes.fontHeader}>
            LEAGUE PAGES 2020/21
          </Typography>
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
