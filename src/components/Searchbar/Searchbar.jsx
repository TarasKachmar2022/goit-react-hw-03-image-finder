import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchName: '',
  };

  onInputChange = e => {
    this.setState({ searchName: e.currentTarget.value.trim().toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName === '') {
      toast.error('Введіть значення для пошуку!');
      //   alert('Введіть значення для пошуку!');
      return;
    }

    this.props.onSubmit(this.state.searchName);
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <BiSearch />
          </button>

          <input
            type="text"
            value={this.state.value}
            onChange={this.onInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
