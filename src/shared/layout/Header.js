import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <a href={this.props.url}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            <h1>{this.props.title}</h1>
      </header>
        );
    }
}

export default Header;