import React, { Component } from 'react';
import data from './MOCK_DATA';
import FilterBar from './FilterBar';
import './App.css';

const FILTER_CONFIGURATION = [

  {
    type: 'text',
    data: {
      label: 'First Name',
      fieldKey: 'first_name'
    }
  },
  {
    type: 'select',
    data: {
      label: 'Gender',
      fieldKey: 'gender',
      options: [
        { value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'}
      ]
    }
  },
  {
    type: 'multi-select',
    data: {
      label: 'Grade',
      fieldKey: 'grade',
      options: [
        { value: 'A', label: 'A'},
        { value: 'B', label: 'B'},
        { value: 'C', label: 'C'},
        { value: 'D', label: 'D'},
        { value: 'E', label: 'E'},
      ]
    }
  },
  {
    type: 'date-range',
    data: {
      label: 'Date of birth',
      fieldKey: 'dob'
    }
  },
  {
    type: 'date',
    data: {
      label: 'Date of birth',
      fieldKey: 'dob_single'
    }
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      filter: []
    }
  }

  handleChange(object) {
    this.setState({
      filter: object,
    });
  }

  render() {
    return (
      <div>
      <FilterBar
        settings={FILTER_CONFIGURATION}
        onUpdateFilter={this.handleChange.bind(this)}
      />
      </div>
    );
  }
}

export default App;
