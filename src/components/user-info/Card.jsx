import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ repo }) => {
  // Formats numbers above 1k to look shorter
  const numFormat = num => {
    return num > 999
      ? (num / 1000).toFixed(1) + 'k'
      : num;
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
