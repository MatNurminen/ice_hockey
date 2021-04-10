import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';

import Main from './components/Main';
import Login from './components/login/Login';
import Roster from './components/Roster';
import PlayerDetail from './components/players/PlayerDetail';
import Leagues from './components/leagues/leagues';
import League from './components/leagues/league';
import Countries from './components/countries/countries';
import Country from './components/countries/country';
import Club from './components/clubs/club';
import AddPlayer from './components/players/addPlayer';
import AdminNavbar from './components/layout/AdminNavbar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Players from './components/players/players';
import FreeAgents from './components/players/FreeAgents';

//import SearchPlayers from './components/layout/Search';

import LeaguesReport from './reports/leagues';
import WorkBookPlayers from './reports/workbook';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <AdminNavbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/rosters' component={Roster} />

          <Route exact path='/players/:player_id' component={PlayerDetail} />
          <Route exact path='/players/create/new' component={AddPlayer} />

          <Route exact path='/leagues' component={Leagues} />
          <Route exact path='/leagues/:league_id' component={League} />
          <Route exact path='/leagues/:league_id/:season' component={League} />

          <Route exact path='/clubs/:club_id' component={Club} />
          <Route exact path='/clubs/:club_id/:season' component={Club} />

          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:country_id' component={Country} />
          <Route exact path='/players' component={Players} />
          <Route exact path='/freeagents' component={FreeAgents} />

          <Route exact path='/reports/leagues' component={LeaguesReport} />
          <Route exact path='/reports/workbook' component={WorkBookPlayers} />
        </Switch>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
