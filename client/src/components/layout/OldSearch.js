import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    //console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className='form-group form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
            onChange={this.onChange}
          ></input>
          <button className='btn btn-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
