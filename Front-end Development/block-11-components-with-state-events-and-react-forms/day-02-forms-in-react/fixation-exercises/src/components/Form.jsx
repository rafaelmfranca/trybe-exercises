import React, { Component } from 'react';
import '../styles/Form.css';

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estadoFavorito, idade, vaiComparecer } = this.state;
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="Form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            <textarea
              name="estadoFavorito"
              value={estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="number"
            name="idade"
            value={idade}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            checked={vaiComparecer}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
