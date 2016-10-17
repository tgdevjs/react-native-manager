import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import _ from 'lodash';

class EmployeeComponent extends Component {
  componentWillMount() {
    console.log('EmployeeComponent componetWillMount')
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('EmployeeComponent componentWillReceiveProps')
    this.createDataSource(nextProps);
  }
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }
  render() {
    console.log('EmployeeComponent: ',this.props.employees);
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
}

export default connect(mapStateToProps, { employeesFetch } )(EmployeeComponent);
