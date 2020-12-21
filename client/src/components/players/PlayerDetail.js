import React, { Component } from 'react';

const axios = require('axios');

export default class playerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
    };
  }

  getPlayer = () => {
    const player_id = this.props.match.params.player_id;
    axios.get(`/api/players/${player_id}`).then((res) => {
      const player = res.data;
      const last = player.length - 1;
      this.setState({
        pl_first_name: player[last].first_name,
        pl_last_name: player[last].last_name,
        pl_num: player[last].num,
        pl_flag: player[last].flag,
        pl_club: player[last].club,
        pl_sname: player[last].s_name,
        pl_season: player[last].season,
        pl_country: player[last].country_name,
        pl_pos: player[last].pos,
        pl_birth: player[last].birth,
        pl_age: player[last].age,
        pl_height: player[last].height,
        pl_weight: player[last].weight,
        pl_retires: player[last].end_year,
        player,
      });
    });
  };

  componentDidMount() {
    this.getPlayer();
  }

  render() {
    const player = this.state.player;
    return (
      <div>
        <div className='container bg-white mt-4'>
          <div className='row'>
            <div className='col-6 text-white mainNav m-3 py-3'>
              <div className='row'>
                <div className='col-2'>
                  <img
                    className='mx-auto d-block'
                    width='60px'
                    src={'../' + this.state.pl_flag}
                    alt=''
                  ></img>
                </div>
                <div className='col-1'>
                  <h2>{this.state.pl_num}</h2>
                </div>
                <div className='col-9'>
                  <h2>
                    {this.state.pl_first_name} {this.state.pl_last_name}
                  </h2>
                </div>
              </div>

              <h5 className='mt-2'>
                {this.state.pl_club} / {this.state.pl_sname} -{' '}
                {this.state.pl_season}-{this.state.pl_season - 1999}
              </h5>
            </div>

            <div className='col-5 mt-3'>
              <div className='text-white mainNav'>
                <h6 className='font-weight-bold my-0 py-3 pl-2'>
                  Player Facts
                </h6>
              </div>
              <table className='table table-bordered mb-4'>
                <tbody className='h6'>
                  <tr>
                    <th className='font-weight-normal font-italic col-5'>
                      Nation
                    </th>
                    <td>{this.state.pl_country}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Position</th>
                    <td>{this.state.pl_pos}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>
                      Year of Birth
                    </th>
                    <td>{this.state.pl_birth}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Age</th>
                    <td>{this.state.pl_age}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Height</th>
                    <td>{this.state.pl_height}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Weight</th>
                    <td>{this.state.pl_weight}</td>
                  </tr>
                  <tr>
                    <th className='font-weight-normal font-italic'>Retires</th>
                    <td>{this.state.pl_retires}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='text-white mainNav'>
            <h6 className='font-weight-bold my-0 py-3 pl-2'>
              Player Statistics
            </h6>
          </div>
          <table className='table table-striped table-bordered mb-4'>
            <thead className='adminNav h6 text-white'>
              <tr>
                <th className='col-2'>Season</th>
                <th className='col-1 text-center'>Age</th>
                <th className='col-4'>Team</th>
                <th className='col-2'>League</th>
                <th className='col-2 text-center'>Goals</th>
              </tr>
            </thead>
            <tbody>
              {player.map((details, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      {details.season} - {details.season - 1999}
                    </td>
                    <td className='text-center'>{details.age}</td>
                    <td>{details.club}</td>
                    <td>{details.s_name}</td>
                    <td className='text-center'>{details.goals}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
