import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
    }
  }

  handleDateChange(date) {
    let object = {
      type: 'date-range',
      fieldKey: this.props.fieldKey,
      data: date
    }
    this.setState({
      date
    });
    this.props.onChange(object);
  }

  render() {
    return (
      <div>
      <label>{this.props.label}</label>
      <div>
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.handleDateChange(date)} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        showClearDate={true}
      />
      </div>
      </div>
    );
  }
}

export default DateFilter;
