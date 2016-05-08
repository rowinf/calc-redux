require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Calculator from '../containers/Calculator';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Calculator</div>
        <div className="content">
          <Calculator />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
