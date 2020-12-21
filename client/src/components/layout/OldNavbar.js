import React from 'react';

const axios = require('axios');

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leagueList: [],
    };
  }

  getLeagueList = () => {
    axios.get('/leagues').then((res) => {
      const leagueList = res.data;
      this.setState({
        leagueList,
      });
    });
  };

  componentDidMount() {
    this.getLeagueList();
  }

  render() {
    let leagueList = this.state.leagueList;
    return (
      <div className='mainNav d-flex flex-row'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-dark'>
            <a className='navbar-brand' href='/'>
              <img
                src='/img/logo.png'
                width='80'
                height='80'
                className='d-inline-block align-top'
                alt=''
              ></img>
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2012'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2012-13
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2012'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2012'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2013'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2013-14
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2013'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2013'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2014'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2014-15
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2014'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2014'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2015'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2015-16
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2015'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2015'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2016'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2016-17
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2016'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2016'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2017'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2017-18
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2017'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2017'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2018'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2018-19
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2018'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2018'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown2019'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    2019-20
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown2019'
                  >
                    {leagueList.map((league) => (
                      <a
                        className='dropdown-item'
                        key={league.league_id}
                        href={
                          '/roster?league=' + league.league_id + '&year=2019'
                        }
                      >
                        {league.s_name}
                      </a>
                    ))}
                  </div>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='/reports'>
                    REPORTS
                  </a>
                </li>
                <li className='nav-item active'>
                  <a
                    className='nav-link btn-sign font-weight-bold'
                    href='/login'
                  >
                    Sign in
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
