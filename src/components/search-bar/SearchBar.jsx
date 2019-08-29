import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  return (
    <div className='search'>
      <form onSubmit={props.submitHandler} className={`${props.changeClass}`}>
        <input
          type='text'
          placeholder='Search for a GitHub user!'
          value={props.query}
          onChange={props.changeHandler}
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
  submitHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default SearchBar;
