import React, { Component } from 'react';
import InputName from './InputName';
import InputEmail from './InputEmail';
import SelectAge from './SelectAge';
import TextAreaAnecdote from './TextAreaAnecdote';
import CheckboxTerms from './CheckboxTerms';
import '../styles/Form.css';
export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.initialState = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };

    this.state = this.initialState;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState(this.initialState);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, anecdote, terms } = this.state;
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="Form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Informações pessoais</legend>
            <InputName value={name} onChange={this.handleChange} />
            <InputEmail value={email} onChange={this.handleChange} />
            <SelectAge value={age} onChange={this.handleChange} />
          </fieldset>
          <fieldset>
            <legend>Texto e arquivos</legend>
            <TextAreaAnecdote value={anecdote} onChange={this.handleChange} />
            <CheckboxTerms value={terms} onChange={this.handleChange} />
            <label>
              Upload file:
              <input type="file" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
