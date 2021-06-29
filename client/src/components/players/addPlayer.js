import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { createPlayer } from '../../store/actions/playersActions';

class addPlayer extends Component {
  state = {
    name: '',
    num: '',
    pos: '',
    country_id: '',
    birth: '',
    height: '',
    weight: '',
    m: '',
    pos_num: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeNum = (e) => {
    this.setState({ [e.target.name]: e.target.value * 1 });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    //console.log(this.state);
    await this.props.createPlayer(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='container bg-white my-5 py-3'>
        <h3>New player</h3>
        <form>
          <div className='form-row'>
            <div className='form-group col-8'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={this.onChange}
              ></input>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-1'>
              <label htmlFor='num'>#</label>
              <input
                type='text'
                className='form-control'
                placeholder='Num'
                name='num'
                value={this.state.num}
                onChange={this.onChangeNum}
              ></input>
            </div>
            <div className='form-group col-1'>
              <label htmlFor='pos'>Pos</label>
              <input
                type='text'
                className='form-control'
                placeholder='Pos'
                name='pos'
                value={this.state.pos}
                onChange={this.onChange}
              ></input>
            </div>
            <div className='form-group col-1'>
              <label htmlFor='country_id'>Country</label>
              <input
                type='text'
                className='form-control'
                name='country_id'
                value={this.state.country_id}
                onChange={this.onChangeNum}
              ></input>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group col-1'>
              <label htmlFor='birth'>Birth</label>
              <input
                type='text'
                className='form-control'
                placeholder='Birth'
                name='birth'
                value={this.state.birth}
                onChange={this.onChangeNum}
              ></input>
            </div>
            <div className='form-group col-1'>
              <label htmlFor='height'>Height</label>
              <input
                type='text'
                className='form-control'
                placeholder='Height'
                name='height'
                value={this.state.height}
                onChange={this.onChangeNum}
              ></input>
            </div>
            <div className='form-group col-1'>
              <label htmlFor='weight'>Weight</label>
              <input
                type='text'
                placeholder='Weight'
                className='form-control'
                name='weight'
                value={this.state.weight}
                onChange={this.onChangeNum}
              ></input>
            </div>
            <div className='form-group col-1'>
              <label htmlFor='m'>M</label>
              <input
                type='text'
                className='form-control'
                name='m'
                value={this.state.m}
                onChange={this.onChange}
              ></input>
            </div>
            <div className='form-group col-1'>
              <label htmlFor='pos_num'>Pos_num</label>
              <input
                type='text'
                className='form-control'
                name='pos_num'
                value={this.state.pos_num}
                onChange={this.onChangeNum}
              ></input>
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

//export default connect(null, { createPlayer })(addPlayer);
export default addPlayer;
