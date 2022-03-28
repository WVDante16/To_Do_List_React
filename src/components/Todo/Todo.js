import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

class Todo extends Component {
    constructor() {
        super();
        
        this.state = {
            task: '',
            items: [
                {
                    id: uuidv4(),
                    task: 'Estudiar Web',
                    complete: false,
                },

                {
                    id: uuidv4(),
                    task: 'Hacer Tarea',
                    complete: false,
                },

                {
                    id: uuidv4(),
                    task: 'Ver Al Juan Pies',
                    complete: false,
                },
            ],
        }
    }

    handleOnChange = e => {
        const {target:{value}} = e;
        this.setState({
            task: value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();

        if (this.state.task.trim() != '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            })
        }
    }

    render() {
        console.log(this.state.items);
        //console.log(this.state.task);
        return (
            <div className="Todo">
                <h1>Nueva Tarea</h1>

                <form onSubmit = {this.handleOnSubmit}>
                     <input
                        type = "text"
                        value = {this.state.task}
                        onChange = {this.handleOnChange}
                     />
                </form>

                <ul>
                    {
                        this.state.items.map((item) => (
                            <li>
                                {item.task}
                                 <div>
                                     <span>Icono check</span>
                                     <span>Icono basurero</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Todo;