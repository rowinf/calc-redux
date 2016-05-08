'use strict';

import React, { Component } from 'react';

require('styles/InputWindow.scss');

class InputWindowComponent extends Component {
  render() {
    let {value} = this.props;
    return (
      <div className="inputwindow-component">
        {value}
      </div>
    );
  }
}

InputWindowComponent.displayName = 'CalculatorInputWindowComponent';

// Uncomment properties you need
// InputWindowComponent.propTypes = {};
// InputWindowComponent.defaultProps = {};

export default InputWindowComponent;
