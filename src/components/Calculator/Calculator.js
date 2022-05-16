import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: '',
            number2: '',
            result: ''
        }
    }

    handleNumberChange1 = e => {
        const {target: {value}} = e;

        this.setState({
            number1: value,
        })

        console.log(value)
    }

    handleNumberChange2 = e => {
        const {target: {value}} = e;

        this.setState({
            number2: value,
        })

        console.log(value)
    }

    //Buttons
    suma = () => {
        const value = number1 + number2;

        this.setState({
            result: value,
        })

        console.log(value)
    }

    render() {
        const {result} = this.state;

        return (
            <div className="Calculator">
                <input 
                    type = "number"
                    value = {this.state.number1}
                    onChange = {this.handleNumberChange1}
                />

                <button onClick={this.suma}>+</button>

                <input 
                    type = "number"
                    value = {this.state.number2}
                    onChange = {this.handleNumberChange2}
                />
            </div>
        )
    }
}

export default Calculator;