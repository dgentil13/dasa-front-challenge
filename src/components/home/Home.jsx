import React, { useState, Fragment } from 'react';
import axios from 'axios';
import SearchBar from '../search-bar/SearchBar';
import Navbar from '../navbar/Navbar';
import Card from '../user-info/Card';

const Home = () => {
  const [user, setUser] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

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
        {user && <p>Check out {user[0].owner.login}'s Repos</p>}
        {user.length !== 0
          ? user.map((elem, idx) => {
              return <Card key={idx} repo={elem} />;
            })
          : user && <p> This user has no repos</p>}

        {error && <p> error </p>}
      </section>
    </Fragment>
  );
};

export default Home;
