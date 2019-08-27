import React, { useState, Fragment } from 'react';
import axios from 'axios';
import './home.scss';
import SearchBar from '../search-bar/SearchBar';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Card from '../user-info/Card';

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
        console.log(res);
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
      <div className='container'>
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
            : user && (
                //change to component?
                <div className='not-found'>
                  <img src='/images/empty_boxes.png' alt='error' />
                  <p>This user has no repositories!</p>
                </div>
              )}

          {error && (
            //change to component?
            <div className='error'>
              <img src='/images/bunny-error.png' alt='error' />
              <p>
                Sorry, We couldn't find that user! Are you sure you typed that
                right?
              </p>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
