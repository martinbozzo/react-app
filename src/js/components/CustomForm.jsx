import React, { Component } from 'react';

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textarea: '',
      checkbox: true,
      select: 'A'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Text: ' + this.state.text);
    console.log('Textarea: ' + this.state.textarea);
    console.log('Select: ' + this.state.select);
    console.log('Checkbox: ' + this.state.checkbox);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <input
            name="text"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          TextArea:
          <textarea
            name="textarea"
            type="textarea"
            value={this.state.textarea}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Checkbox:
          <input
            name="checkbox"
            type="checkbox"
            value={this.state.checkbox}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Select:
          <select
            name="select"
            value={this.state.select}
            onChange={this.handleInputChange}
          >
            <option value="A"></option>
            <option value="B"></option>
            <option value="C"></option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CustomForm;
