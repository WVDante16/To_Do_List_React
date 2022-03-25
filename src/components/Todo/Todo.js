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

    render() {
        console.log(this.state-items);
        return (
            <div className="Todo">
                <h1>Nueva Tarea</h1>
            </div>
        );
    }
}

export default Todo;