import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: {},
    }
  }

  handleChange(val) {
    let object = {
      type: 'select',
      fieldKey: this.props.fieldKey,
      data: val,
    };
    this.setState({
      val
    });
    if(val) {
      this.props.onChange(object);
    } else {
      this.props.onReset(this.props.fieldKey);
    }
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
      />
      </div>
    );
  }
}

export default SelectFilter;
