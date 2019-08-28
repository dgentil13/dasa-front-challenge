import React from 'react';
import './error.scss';

const Error = () => {
  return (
    <div className='error'>
      <img src='/images/bunny-error.png' alt='error' />
      <p>
        Sorry, We couldn't find that user! Are you sure you typed that right?
      </p>
    </div>
  );
};

export default Error;
