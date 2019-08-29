import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ repo }) => {
  // Formats numbers above 1k to look shorter
  const numFormat = num => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <p>{repo.name}</p>
        <a href={repo.html_url}>Go to this repo!</a>
      </div>

      <div className='stars'>{numFormat(repo.stargazers_count)}</div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  html_url: PropTypes.string,
  stargazers_count: PropTypes.number,
};

export default Card;
