import React, { useState, Fragment } from 'react';
import axios from 'axios';
import SearchBar from '../search-bar/SearchBar';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Card from '../user-info/Card';
import Error from './error-handler/Error';
import NotFound from './error-handler/NotFound';

const Home = () => {
  const [user, setUser] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [changeClass, setChange] = useState('search-input');

  // handles query submit and requests data
  const submitHandler = e => {
    e.preventDefault();
    setChange('search-input');
    axios
      .get(`https://api.github.com/users/${query}/repos`)
      .then(res => {
        setError(false);
        setUser(res.data);
        setQuery('');
      })
      .catch(err => {
        setError(true);
        setUser('');
        setQuery('');
      });
  };

  // handles typing value
  const changeHandler = e => {
    setQuery(e.target.value);
  };

  // handles on click from search page
  const clickHandler = () => {
    setChange('clicked-search');
  };

  return (
    <Fragment>
      <Navbar />
      <section className='header'>
        <div className='search-side'>
          <h4> Find GitHub users repos!</h4>
          <SearchBar
            query={query}
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            clickHandler={clickHandler}
            changeClass={changeClass}
          />
        </div>
        <img src='/images/search.png' alt='person with magnifying glass' />
      </section>

      <section className='main-info'>
        {user.length > 0 && <h2>Check out {user[0].owner.login}'s Repos</h2>}

        {user.length !== 0
          ? user.map((elem, idx) => {
              return <Card key={idx} repo={elem} />;
            })
          : user && <NotFound />}

        {error && <Error />}
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
