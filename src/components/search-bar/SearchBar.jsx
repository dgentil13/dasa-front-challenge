import React from 'react';
import './search.scss';

const SearchBar = props => {
  return (
    <div className='search'>
      <form onSubmit={e => props.submitHandler(e)}>
        <input
          type='text'
          placeholder='Search for a GitHub user!'
          value={props.query}
          onChange={e => props.changeHandler(e)}
        />
        <button type='submit'> Submit </button>
      </form>
    </div>
  );
};

export default SearchBar;
