import React from 'react';

function Spinner({ shouldShow }) {
  return (
    shouldShow
      ? <div>Loading ...</div>
      : null
  );
}

export default Spinner;
