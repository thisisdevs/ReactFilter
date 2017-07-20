import React from 'react';
import './styles.css';
import TextFilter from './TextFilter';
import SelectFilter from './SelectFilter';
import MultiSelectFilter from './MultiSelectFilter';
import DateRangeFilter from './DateRangeFilter';
import DateFilter from './DateFilter';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStatus: [],
    };
  }

  handleUpdate(object) {
    let filterStatus = this.state.filterStatus;
    let currentFilterArray = filterStatus.filter(filter => filter.fieldKey === object.fieldKey);
    let currentFilterObject;
    let index;
    if(currentFilterArray.length === 0){
      filterStatus.push(object);
      this.setState({filterStatus});
    } else {
      currentFilterObject = currentFilterArray[0];
      index = filterStatus.indexOf(currentFilterObject);
      filterStatus[index].data = object.data;
      this.setState({filterStatus});
    }
  }

  resetStatus(fieldKey) {
    let filterStatus = this.state.filterStatus;
    let currentFilterArray = filterStatus.filter(filter => filter.fieldKey === fieldKey);
    let index = filterStatus.indexOf(currentFilterArray[0]);
    if (index > -1) {
      filterStatus.splice(index, 1);
    }
    this.setState({ filterStatus });

  }

  handleApply = (e) => {
    console.log(this.state.filterStatus);
    this.props.onUpdateFilter(this.state.filterStatus)
  }

  _renderTextFilter(option) {
    const data = option.data;
    return (
      <TextFilter
        label={data.label}
        fieldKey={data.fieldKey}
        onChange={this.handleUpdate.bind(this)}
        onReset={this.resetStatus.bind(this)}
      />
    );
  }

  _renderSelectFilter(option) {
    const data=option.data;
    return (
      <SelectFilter
        options={data.options}
        label={data.label}
        fieldKey={data.fieldKey}
        onChange={this.handleUpdate.bind(this)}
        onReset={this.resetStatus.bind(this)}
      />
    );
  }

  _renderMultiSelectFilter(option) {
    const data = option.data;
    return (
      <MultiSelectFilter
        options={data.options}
        label={data.label}
        fieldKey={data.fieldKey}
        onChange={this.handleUpdate.bind(this)}
        onReset={this.resetStatus.bind(this)}
      />
    );
  }

  _renderDateRangeFilter(option) {
      const data = option.data;
      return (
        <DateRangeFilter
          label={data.label}
          fieldKey={data.fieldKey}
          onChange={this.handleUpdate.bind(this)}
          onReset={this.resetStatus.bind(this)}
        />
    );
  }

  _renderDateFilter(option) {
    const data = option.data;
    return (
      <DateFilter
        label={data.label}
        fieldKey={data.fieldKey}
        onChange={this.handleUpdate.bind(this)}
        onReset={this.resetStatus.bind(this)}
      />
    );
  }
  _renderFilter(option) {
    let filter = <span />;
    switch (option.type) {
      case 'text':
        filter = this._renderTextFilter(option);
        break;
      case 'select':
        filter = this._renderSelectFilter(option);
        break;
      case 'multi-select':
        filter = this._renderMultiSelectFilter(option);
        break;
      case 'date-range':
        filter = this._renderDateRangeFilter(option);
        break;
      case 'date':
        filter = this._renderDateFilter(option);
        break;
      default:
        break;
    }
    return filter;
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className='row'>
            {this.props.settings.map((option, index) => (
              <div className='col-md-3 col-sm4 col-xs-6' key={index}>
                {this._renderFilter(option)}
              </div>
            ))}
          </div>
          <button className='btn btn-primary apply_btn' onClick={this.handleApply.bind(this)}>Apply Filters</button>
        </div>
      </div>
    );
  }
}

export default FilterBar
