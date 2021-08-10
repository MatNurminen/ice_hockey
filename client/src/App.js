import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';

import NotFound from './components/notFound/notFound';
import Main from './components/main/components/Main/Main';
import Login from './components/login/Login';
import Roster from './components/roster/components/Roster';
import PlayerDetail from './components/players/components/PlayerDetail';
import Leagues from './components/leagues/components/Leagues';
import League from './components/leagues/components/League';
import Countries from './components/countries/components/Countries';
import Country from './components/countries/components/Country';
import Club from './components/clubs/club';
import PlayerForm from './components/players/components/PlayerForm';
import AdminNavbar from './components/layout/components/AdminNavbar';
import Navbar from './components/layout/components/Navbar';
import Footer from './components/layout/components/Footer';
import Players from './components/players/players';
import FreeAgents from './components/players/components/FreeAgents';
import EditChamp from './components/champs/components/EditChamp';

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

          <Route exact path='/players' component={Players} />
          <Route exact path='/players/:player_id' component={PlayerDetail} />
          <Route exact path='/players/create/new' component={PlayerForm} />
          <Route exact path='/players/:player_id/edit' component={PlayerForm} />

          <Route exact path='/leagues' component={Leagues} />
          <Route exact path='/leagues/:league_id' component={League} />
          <Route exact path='/leagues/:league_id/:season' component={League} />

          <Route exact path='/clubs/:club_id' component={Club} />
          <Route exact path='/clubs/:club_id/:season' component={Club} />

          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:country_id' component={Country} />

          <Route exact path='/freeagents' component={FreeAgents} />

          <Route exact path='/reports/leagues' component={LeaguesReport} />
          <Route exact path='/reports/workbook' component={WorkBookPlayers} />

          <Route exact path='/champ' component={EditChamp} />

          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
