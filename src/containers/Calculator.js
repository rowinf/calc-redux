import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InputWindowComponent from '../components/InputWindowComponent';

require('styles/Calculator.scss');

class Calculator extends Component {
  render() {
    let {value} = this.props;
    return (
      <div className="calculator-container">
        <InputWindowComponent value={value}/>
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
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
