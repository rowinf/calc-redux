'use strict';

import React, { Component } from 'react';

require('styles/InputWindow.scss');

class InputWindowComponent extends Component {
  render() {
    let {expression} = this.props;
    return (
      <div className="inputwindow-component">
        {expression}
      </div>
    );
  }
}

InputWindowComponent.displayName = 'CalculatorInputWindowComponent';

// Uncomment properties you need
// InputWindowComponent.propTypes = {};
// InputWindowComponent.defaultProps = {};

export default InputWindowComponent;
