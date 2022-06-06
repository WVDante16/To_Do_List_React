import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Person.css';
import './Popup.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            LastName: '',
            Email: '',
            Phone: '',
            Open: false,

            errors: {
                Name: false,
                LastName: false
            }
        };
    }

    handleOnChange = e => {
        const {target: {value, name}} = e;
        
        this.setState({
            [name]: value
        })

        console.log(value)
    }
    
    handleOnSubmit = e => {
        e.preventDefault();
        const {Name, LastName, Email, Phone} = this.state;
        
        this.setState({
            errors: {
                Name: Name.trim() === '',
                LastName: LastName.trim() === ''
            }
        })

        if (Name.trim() && LastName.trim()) {
            const data = {
                Name,
                LastName,
                Email,
                Phone 
            };

            this.setState({
                Open: true
            })
            console.log('Data: ', data);
        } 

        setTimeout(() => {
            this.setState({
                errors: {
                    Name: false,
                    LastName: false,
                },
            })
        }, 3000)
    }

    render() {
        return (
            <div className='Person'>
                
                <Popup open={this.state.Open} modal nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={() => {
                                this.setState({
                                    Open: false
                                })
                                close();
                            }}>
                                &times;
                            </button>

                            <div className="header">
                                <h1>Person Information</h1>
                            </div>

                            <div className="content">
                                <h1>Name: <span>{this.state.Name}</span><span>{this.state.LastName}</span></h1>
                                <h1>Email: <span>{this.state.Email}</span></h1>
                            </div>
                        </div>
                    )}
                </Popup>
                
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>
                            <p><strong>Nombre: </strong></p>
                            <input 
                                name="Name"
                                type="text" 
                                value={this.state.Name}
                                onChange = {this.handleOnChange}
                                className={
                                    this.state.errors.Name ? 'error': ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.Name
                            &&
                            <div className='errorMessage'>Required</div>
                        }
                    </div>
                    <div>
                        <label>
                            <p><strong>Apellido: </strong></p>
                            <input 
                                name="LastName"
                                type="text" 
                                value={this.state.LastName}
                                onChange = {this.handleOnChange}
                                className={
                                    this.state.errors.LastName ? 'error': ''
                                }
                            />
                        </label>
                        {
                            this.state.errors.LastName
                            &&
                            <div className='errorMessage'>Required</div>
                        }
                    </div>
                    <div>
                        <label>
                            <p><strong>Email: </strong></p> 
                            <input 
                                name="Email"
                                type="email" 
                                value={this.state.Email}
                                onChange = {this.handleOnChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p><strong>Phone: </strong></p> 
                            <input 
                                name="Phone"
                                type="tel" 
                                value={this.state.Phone}
                                onChange = {this.handleOnChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button type='submit'>Guardar UwU</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Person;