import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Home</h1>
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <a href="https://github.com/">GitHub</a>

                    <div>
                        <button style= {{
                            backgroundColor: 'red', 
                            border: '1px solid red',
                        }}>
                            click
                        </button>
                        
                    </div>
            </div>
        );
    }
}

export default Home;