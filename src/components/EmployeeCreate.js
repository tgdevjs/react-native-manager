import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onLoginButtonPress(){
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }
  render() {
    const { name, phone, shift } = this.props;
    console.log('render employee create: ', this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection >
          <Button onPress={this.onLoginButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect( mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
