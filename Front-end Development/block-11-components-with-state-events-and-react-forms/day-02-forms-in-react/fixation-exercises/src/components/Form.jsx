import React, { Component } from 'react';
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
            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={name}
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={email}
              />
            </label>

            <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                onChange={this.handleChange}
                value={age}
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>
            <label htmlFor="anecdote">
              Anedota:
              <textarea
                id="anecdote"
                name="anecdote"
                onChange={this.handleChange}
                value={anecdote}
              />
            </label>

            <label htmlFor="terms">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                onChange={this.handleChange}
                checked={terms}
              />
              Concordo com termos e acordos
            </label>
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
