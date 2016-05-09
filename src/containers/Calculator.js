import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputWindowComponent from '../components/InputWindowComponent';

import enterValue from 'actions/calculator/enterValue';
import plus from 'actions/calculator/plus';

require('styles/Calculator.scss');

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.enterValue1 = props.actions.enterValue.bind(this, 1)
    this.enterValue2 = props.actions.enterValue.bind(this, 2)
    this.enterValue3 = props.actions.enterValue.bind(this, 3)
    this.enterValue4 = props.actions.enterValue.bind(this, 4)
    this.enterValue5 = props.actions.enterValue.bind(this, 5)
    this.enterValue6 = props.actions.enterValue.bind(this, 6)
    this.enterValue7 = props.actions.enterValue.bind(this, 7)
    this.enterValue8 = props.actions.enterValue.bind(this, 8)
    this.enterValue9 = props.actions.enterValue.bind(this, 9)
    this.enterValue0 = props.actions.enterValue.bind(this, 0)
    this.plus = props.actions.plus.bind(this)
  }
  render() {
    let {expression} = this.props;
    return (
      <div className="calculator-container">
        <InputWindowComponent expression={expression}/>
        <button onClick={this.plus}>+</button>
        <button onClick={this.enterValue1}>1</button>
        <button onClick={this.enterValue2}>2</button>
        <button onClick={this.enterValue3}>3</button>
        <button onClick={this.enterValue4}>4</button>
        <button onClick={this.enterValue5}>5</button>
        <button onClick={this.enterValue6}>6</button>
        <button onClick={this.enterValue7}>7</button>
        <button onClick={this.enterValue8}>8</button>
        <button onClick={this.enterValue9}>9</button>
        <button onClick={this.enterValue0}>0</button>
      </div>
    );
  }
}

Calculator.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = state.equation;
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    enterValue,
    plus
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
