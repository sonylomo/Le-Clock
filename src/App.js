import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTiming();
  }
  
  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTiming, this.setTimer, this.countDown);
  }

  getTiming() {
    const currentTime = new Date();
    const fromDate = new Date ("Apr 27, 2020 17:08:00").getTime();
    const difference = currentTime - fromDate;

    return {
      hrs: currentTime.getHours(),
      min: currentTime.getMinutes(),
      sec: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',

      days : Math.floor(difference / (1000*60*60*24)),
      hours : Math.floor((difference % (1000*60*60*24)) / (1000*60*60)),
      minutes : Math.floor((difference % (1000*60*60)) / (1000*60)),
      seconds : Math.floor((difference % (1000*60)) / 1000)
    }
  }


  render() {
    
    const {hrs, min, sec, ampm, days, hours, minutes, seconds} = this.state;
    return (
      <div className="App">
        <div className="superInner">
          <h2>My Time.</h2>
          <div className="Inner">
            {hrs === 0 ? 12 : hrs > 12 ? hrs - 12 : hrs} :
            {min > 9 ? min : `0${min}`} : 
            {sec > 9 ? sec : `0${sec}`} {ampm}
          </div>
        </div>
        <div className="superCounter">
          <h2>*Time Elapsed: <span>{days} days {hours} hrs {minutes} min {seconds} sec</span></h2> 
        </div>
      </div>
    );
  }
}


export default App;
