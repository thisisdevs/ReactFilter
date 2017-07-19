import React from 'react';

class TextFilter extends React.Component {
  handleChange(e, scope) {
    var object = {
      type: 'text',
      fieldKey: this.props.fieldKey,
      data: e.target.value,
    };
    this.props.onChange(object);
  }

  render() {
    return (
      <div>
        <label htmlFor='field'>{this.props.label}</label>
        <input id='field' type='text' className='form-control' onChange={(e) => { this.handleChange(e, this)}} />
      </div>
    );
  }
}

export default TextFilter;
