import React, { Component } from 'react';
import { connect } from 'redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeList extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>Save Changes</Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect()(EmployeeList);
