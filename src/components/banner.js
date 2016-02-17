/**
 * Created by glenn on 13/02/16.
 */

import React from 'react';

function Banner() {

  return (
    <header className="navbar navbar-fixed-top bg-primary banner">
      <h1 className="display-4 audiowide">Bolpax</h1>
      <p className="lead">Transaction monitoring module solution for everyone.</p>
    </header>
  );
}

export { Banner as default, Banner };
