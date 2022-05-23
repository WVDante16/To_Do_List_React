import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
            number1: 0,
            number2: 0,
            result: 0,
            selector: ''
        }
    }

    handleOnChange = e => {
        const {target: {value, name, type}} = e;
        const val = type === 'text'? Number(value) : value;
        
=======
            number1: '',
            number2: '',
            operation: '',
            result: ''
        }
    }

    handleOnClick = () => {
        const num1 = this.state.number1;
        const num2 = this.state.number2;
        const operation = this.state.operation;
        let res;

        if (operation === '+') {
            res = Number(num1) + Number(num2);
        }
        else if (operation === '-') {
            res = num1 - num2;
        }
        else if (operation === 'x') {
            res = num1 * num2;
        }
        else if (operation === '/') {
            res = num1 / num2;
        }

        this.setState({result: res})
    }

    handleNumberChange1 = e => {
        const {target: {value}} = e;

>>>>>>> 1cb635cbbdbb1a188e1e74c045424d1091b4dac3
        this.setState({
            [name]: val
        })
    }

    handleResult = e => {
        const {number1, number2, selector} = this.state;

        this.setState({
            result: calculateResult(number1, number2, selector)
        })
<<<<<<< HEAD
    }

    render() {
        return (
            <div className="Calculator">
                <input 
                    onChange = {this.handleOnChange}
                    name = "number1"
                    type = "text"
                    value = {this.state.number1}
                />

                <select name="selector" value={this.state.selector} onChange={this.handleOnChange}>
                    <option value="addition">+</option>
                    <option value="substraction">-</option>
                    <option value="multiplication">x</option>
                    <option value="division">/</option>
                </select>

                <input 
                    onChange = {this.handleOnChange}
                    name = "number2"
                    type = "text"
                    value = {this.state.number2}
                />

                <p>
                    <button onClick={this.handleResult}>=</button>
                </p>

                <p className="result">{this.state.result}</p>
=======
    }

    handleChangeOperation = e => {
        const {target: {value}} = e;

        this.setState({
            operation: value
        })
    }

    render() {
        const {number1, number2, operation, result} = this.state;

        return (
            <div className="Calculator">
                <p>Calculadora</p>
                <div>
                    <input 
                        type = "number"
                        value = {this.state.number1}
                        onChange = {this.handleNumberChange1}
                    />

                    <form>
                        <label>
                            <select value={operation} onChange={this.handleChangeOperation}>
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="x">x</option>
                                <option value="/">/</option>
                            </select>
                        </label>
                    </form>

                    <input 
                        type = "number"
                        value = {this.state.number2}
                        onChange = {this.handleNumberChange2}
                    />
                </div>
                <p>Resultado: {result} </p>
                <button onClick={this.handleOnClick}>Calcular</button>
>>>>>>> 1cb635cbbdbb1a188e1e74c045424d1091b4dac3
            </div>
        );
    }
}

function calculateResult(number1, number2, selector) {
    switch (selector) {
        case "addition":
            return number1 + number2;
        case "substraction":
            return number1 - number2;
        case "multiplication":
            return number1 * number2;
        case "division":
            return (number1 / number2).toFixed(2);

        default:
            return number1 + number2
    }
}

export default Calculator;