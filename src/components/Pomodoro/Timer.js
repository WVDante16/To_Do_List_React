import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        //Initial State
        this.state = {
            alert: {
                type: '',
                message: '',
            }, 

            time: 0,
            pause: false,
            running: false
        };

        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300, //5 min
            longBreak: 900, //15 min
        }
    }

    componentDidMount() {
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    //Buttons
    setTimeWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING! UnU',
                running: true
            },
            running: true
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break UwU',
            },
            running: true
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break UwUr',
            },
            running: true
        })

        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if (this.state.time === 0) {
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeep',
                }
            })
        }
        else if (this.state.pause === false) {
            this.setState({
                time: this.state.time - 1,
            })
        }
    }

    handlePause = () => {
        if (this.state.pause === false) {
            this.setState({
                pause: true
            })
        }
        else {
            this.setState({
                pause: false
            })
        }
    }

    handleReload = () => {
        this.setState({
            running: false
        })
        window.location.reload()
    }

    displayTimer(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }

    render() {
        const {alert: {message, type}, time} = this.state;

        return (
            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
                    <button
                        className = "start"
                        onClick = {this.setTimeWork}
                    >
                        Start Working
                    </button>

                    <button
                        className = "short"
                        onClick = {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>

                    <button
                        className = "long"
                        onClick = {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>

                <span>
                    {this.state.running ? (
                        <div>
                            <button
                                className = "pause"
                                onClick = {this.handlePause}
                            >
                            <i className = {this.state.pause ? 'fa fa-play' : 'fa fa-pause'} ></i>   
                            </button>
                            <button
                                className = "restart"
                                onClick = {this.handleReload}
                            >
                                <i class="fa fa-square" aria-hidden="true"></i>
                            </button>
                        </div>
                    ) : ''}
                </span>
            </div>
        )
    }
}

export default Timer;