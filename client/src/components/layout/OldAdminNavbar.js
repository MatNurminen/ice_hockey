import React from 'react';
//import Search from './Search';
import SearchPlayer from '../../components/players/searchPlayer';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class AdminNavbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h4'>Test</Typography>
          </Toolbar>
        </AppBar>
        <div className='adminNav d-flex flex-row mb-4'>
          <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item active'>
                    <a className='nav-link' href='/'>
                      PREMIUM <span className='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Countries
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/leagues'>
                      Leagues
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/players/create/new'>
                      Add Player
                    </a>
                  </li>
                </ul>
                <SearchPlayer />
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
