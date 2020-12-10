import React from 'react';
import Number from './Number';
import '../css/clock.css';
import Github from './Github';

export default class Clock extends React.Component {
  state = {
    hours: '',
    minutes: '',
    seconds: '',
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.getTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTime() {
    const now = new Date();
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    let seconds = now.getSeconds().toString();
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    this.setState({ hours, minutes, seconds });
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <>
        <Github github="" />
        <div className="container">
          <div className="numbers">
            <div className="hours">
              <Number number={hours[0]} />
              <Number number={hours[1]} />
            </div>
            <div className="minutes">
              <Number number={minutes[0]} />
              <Number number={minutes[1]} />
            </div>
            <div className="seconds">
              <Number number={seconds[0]} />
              <Number number={seconds[1]} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
