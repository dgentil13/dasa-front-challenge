import React, { useState, Fragment } from 'react';
import axios from 'axios';
import './home.scss';
import SearchBar from '../search-bar/SearchBar';
import Navbar from '../navbar/Navbar';
import Card from '../user-info/Card';

const Home = () => {
  const [user, setUser] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  // handles query submit and requests data
  const submitHandler = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${query}/repos`)
      .then(res => {
        console.log(res);
        setError(false);
        setUser(res.data);
        setQuery('');
      })
      .catch(err => {
        setError(true);
        setUser('');
      });
  };

  // handles typing value
  const changeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <section className='header'>
          <div className='search-side'>
            <h4> Find GitHub users repos!</h4>
            <SearchBar
              query={query}
              submitHandler={submitHandler}
              changeHandler={changeHandler}
            />
          </div>
          <img src='/images/search.png' alt='person with magnifying glass' />
        </section>

        <section>
          {user.length > 0 && <p>Check out {user[0].owner.login}'s Repos</p>}

          {user.length !== 0
            ? user.map((elem, idx) => {
                return <Card key={idx} repo={elem} />;
              })
            : user && <p> This user has no repos</p>}

          {error && <p> error </p>}
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
