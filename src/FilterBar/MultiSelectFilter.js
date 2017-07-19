import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class MultiSelectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: [],
    }
  }

  handleChange(val) {
    let object = {
      type: 'multi-select',
      fieldKey: this.props.fieldKey,
      data: val,
    };
    this.setState({
      val
    });
    this.props.onChange(object);
  }

  render() {
    return (
      <div>
      <label>{this.props.label}</label>
      <Select
        name='selectable'
        options={this.props.options}
        clearable={true}
        autoFocus={true}
        onChange={this.handleChange.bind(this)}
        value={this.state.val}
        multi={true}
      />
      </div>
    );
  }
}

export default MultiSelectFilter;
