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

            time: 0
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
                message: 'WORKING! UnU'
            }
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break UwU'
            }
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Long Break UwU'
            }
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
        else {
            this.setState({
                time: this.state.time - 1,
            })
        }
    }

    displayTimer(seconds) {
        var min = Math.floor(seconds / 60);
        var sec = (seconds - (min * 60));

        console.log(seconds);

        if(min < 10){
            if(sec < 10){
                return "0" + min + ":0" + sec;
            }

            else{
                return "0" + min + ":" + sec;
            } 
        }

        if(sec < 10){
            return min + ":0" + sec;
        }

        else{
            return min + ":" + sec;
        }
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
            </div>
        )
    }
}

export default Timer;