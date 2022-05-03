import React, {Component} from 'react';
import './Coins.css';

class Coins extends Component {
    constructor() {
        super();
        this.state = {
            dollars: "",
            coins: 0,
            message: "",
            type: "",
        }
    }
    
    handleOnChange = e => {
        const {target: {value}} = e;

        console.log(value);

        //Evitar que la pagina se recargue presionando enter
        if(e.keyCode === 13) {
            e.preventDefault();
        }
        
        this.setState({
            dollars: value
        });
    }

    handleOnClick = () => {
        const dollar = this.state.dollars;
        let text = this.state.message;
        let clase = this.state.type;
        let coin = dollar / 10;

        if (dollar % 10 === 0 && dollar > 0) {
            text = "";
            clase = "";
        }
        else {
            coin = 0;
            text = "No aceptamos numeros que no sean multiplos de 10";
            clase = "Error";
        }

        this.setState({
            coins: coin,
            message: text,
            type: clase,
        })
    }

    render() {
        return (
            <div className="Coins">               
                <h1>Compra Crypto Coins!</h1>

                <form>
                    <input 
                        placeholder = "Dolares a invertir"                             type="number"
                        value = {this.state.dollars}
                        onChange={this.handleOnChange}
                    />
                    <button onClick = {this.handleOnClick}>Confirmar</button>
                </form>
    
                <h3>Precio de Cripto moneda: $10</h3>
                <h2>Puedes comprar: {this.state.coins} Crypto coins</h2>
                <h3 className = {`type ${this.state.type}`}>{this.state.message}</h3>
            </div>
        );
    }
}

export default Coins;