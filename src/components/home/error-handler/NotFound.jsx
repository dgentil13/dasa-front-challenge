import React from 'react';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src='/images/empty_boxes.png' alt='Not found' />
      <p>This user has no repositories!</p>
    </div>
  );
};

export default NotFound;
