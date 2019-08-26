import React from 'react';

const SearchBar = props => {
  return (
    <section>
      <form onSubmit={e => props.submitHandler(e)}>
        <input
          type='text'
          placeholder='Search for a GitHub user!'
          value={props.query}
          onChange={e => props.changeHandler(e)}
        />
        <button type='submit'> Submit </button>
      </form>
    </section>
  );
};

export default SearchBar;
