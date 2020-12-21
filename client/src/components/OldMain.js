import React, { Component } from 'react';
//import Navbar from './layout/Navbar';
import LeaguesForMain from './leagues/leaguesForMain';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <div className='jumbotron p-3'>
                <a href='/'>
                  <div className='card text-dark mb-3'>
                    <div className='img-scale'>
                      <img
                        src='/img/nhl19.jpg'
                        className='card-img-top'
                        alt=''
                      ></img>
                    </div>
                    <div className='card-body'>
                      <h3 className='card-title'>Season 2019-20</h3>
                    </div>
                  </div>
                </a>
                <div className='row row-cols-1 row-cols-md-2'>
                  <div className='col'>
                    <a href='/'>
                      <div className='card text-dark mb-3'>
                        <img
                          src='/img/nhl18.jpg'
                          className='card-img-top'
                          alt=''
                        ></img>
                        <div className='card-body'>
                          <h3 className='card-title'>Season 2018-19</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='col'>
                    <a href='/'>
                      <div className='card text-dark mb-3'>
                        <img
                          src='/img/nhl17.jpg'
                          className='card-img-top'
                          alt=''
                        ></img>
                        <div className='card-body'>
                          <h3 className='card-title'>Season 2017-18</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='col'>
                    <a href='/'>
                      <div className='card text-dark mb-3'>
                        <img
                          src='/img/nhl16.jpg'
                          className='card-img-top'
                          alt=''
                        ></img>
                        <div className='card-body'>
                          <h3 className='card-title'>Season 2016-17</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='col'>
                    <a href='/'>
                      <div className='card text-dark mb-3'>
                        <img
                          src='/img/nhl15.jpg'
                          className='card-img-top'
                          alt=''
                        ></img>
                        <div className='card-body'>
                          <h3 className='card-title'>Season 2015-16</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='col'>
                    <a href='/'>
                      <div className='card text-dark mb-3'>
                        <img
                          src='/img/nhl14.jpg'
                          className='card-img-top'
                          alt=''
                        ></img>
                        <div className='card-body'>
                          <h3 className='card-title'>Season 2014-15</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='col'>
                    <a href='/'>
                      <div className='card text-dark mb-3'>
                        <img
                          src='/img/nhl13.jpg'
                          className='card-img-top'
                          alt=''
                        ></img>
                        <div className='card-body'>
                          <h3 className='card-title'>Season 2013-14</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <a href='/'>
                  <div className='card text-dark mb-3'>
                    <div className='img-scale'>
                      <img
                        src='/img/nhl12.jpg'
                        className='card-img-top'
                        alt=''
                      ></img>
                    </div>
                    <div className='card-body'>
                      <h3 className='card-title'>Season 2012-13</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-4 mt-4'>
              <LeaguesForMain />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
