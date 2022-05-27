import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            LastName: '',
            Email: '',
            Phone: '',

            errors: {
                Name: false,
                LastName: false
            }
        }
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
                Name: Name === '',
                LastName: LastName === ''
            }
        })

        if (Name && LastName) {
            const data = {
                Name, 
                LastName, 
                Email, 
                Phone
            }
    
            console.log('Data: ', data);
        }
    }

    render() {
        return (
            <div className='Person'>
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
                            <div>Required</div>
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
                            <div>Required</div>
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
                        <button>Guardar UwU</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Person;