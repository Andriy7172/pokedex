import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-eclipse">
        <div></div>
      </div>
    </div>
  );
}

export default Loader;