import React from 'react';

const Card = ({ repo }) => {
  return (
    <div>
      <p>
        name: {repo.name}
        last updated: {repo.updated_at}
        stars: {repo.stargazers_count}
      </p>
    </div>
  );
};

export default Card;
