import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const {target: {value, name}} = e;

        this.setState({
            [name]: value
        })
    }

    handleResult = e => {
        const {number1, number2, selector} = this.state;

        this.setState({
            result: calculateResult(number1, number2, selector)
        })
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