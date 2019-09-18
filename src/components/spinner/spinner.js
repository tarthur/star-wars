import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-box">
      <div className="lds-css">
        <div className="lds-double-ring">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
