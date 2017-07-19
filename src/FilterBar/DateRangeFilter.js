import React from 'react';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

class DateRangeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      focusedInput: null,
    }
  }

  handleDateChange(startDate,endDate) {
    let object = {
      type: 'date-range',
      fieldKey: this.props.fieldKey,
      data: [startDate, endDate]
    }
    this.setState({
      startDate,
      endDate,
    });
    this.props.onChange(object);
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          onDatesChange={({ startDate, endDate }) => this.handleDateChange( startDate, endDate )} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          showClearDates={true}
        />
        </div>
      </div>
    );
  }
}

export default DateRangeFilter;
