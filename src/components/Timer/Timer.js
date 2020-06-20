import React from "react";
import './Timer.css'

class Timer extends React.Component {

    state = {
        second: 0,
        minute: 0,
        hour: 0,
        timer: null
    }

    createCounter() {
        return setInterval(() => {
            let second = this.state.second;
            let minute = this.state.minute;
            let hour = this.state.hour;
            second++;
            if (second === 60) {
                second = 0;
                minute++;
            }
            if (minute === 60) {
                minute = 0;
                hour++;
            }
            this.setState({second: second, minute, hour})
        }, 1000)
    }

    startTimer() {
        if (this.state.timer !== null) {
            return
        }
        this.setState({
            timer: this.createCounter()
        })
    }

    stopTimer() {
        clearInterval(this.state.timer);
        this.setState({timer: null})
    }

    resetTimer() {
        this.stopTimer();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0
        })
    }

    render() {
        return <div className="timer-wrapper">
            <div className="timer">
                <div className="counter">{
                    this.state.hour > 10 ? this.state.hour : "0" + this.state.hour}:{
                    this.state.minute > 10 ? this.state.minute : "0" + this.state.minute
                }:{
                    this.state.second > 10 ? this.state.second : "0" + this.state.second
                }</div>
                <div className="btn-group">
                    <button className="start-btn m-bt" onClick={() => this.startTimer()}>START</button>
                    <button className="pause-btn m-bt" onClick={() => this.stopTimer()}>PAUSE</button>
                    <button className="restart-btn m-bt" onClick={() => this.resetTimer()}>RESTART</button>
                </div>
            </div>
        </div>
    }
}

export default Timer;