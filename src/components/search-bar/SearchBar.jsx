import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

const SearchBar = props => {
  return (
    <div className='search'>
      <form
        onSubmit={e => props.submitHandler(e)}
        className={`${props.changeClass}`}
      >
        <input
          type='text'
          placeholder='Search for a GitHub user!'
          value={props.query}
          onChange={e => props.changeHandler(e)}
          onClick={props.clickHandler}
        />
        <button type='submit'>
          <img src='./images/search-solid.svg' alt='magnifying glass' />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  changeClass: PropTypes.string,
  query: PropTypes.string,
};

export default SearchBar;
