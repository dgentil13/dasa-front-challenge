import React, { useState, Fragment } from 'react';
import axios from 'axios';
import SearchBar from '../search-bar/SearchBar';
import Navbar from '../navbar/Navbar';
import Card from '../user-info/Card';

const Home = () => {
  const [user, setUser] = useState('');
  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${query}/repos`)
      .then(res => {
        console.log(res);
        setUser(res.data);
        setQuery('');
      })
      .catch(err => console.log(err));
  };

  const changeHandler = e => {
    setQuery(e.target.value);
  };

  return (
    <Fragment>
      <header>
        <Navbar />
        <SearchBar
          query={query}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
      </header>
      <section>
        {user.length !== 0
          ? user &&
            user.map((elem, idx) => {
              return <Card key={idx} repo={elem} />;
            })
          : user && <p> not existing</p>}
      </section>
    </Fragment>
  );
};

export default Home;
