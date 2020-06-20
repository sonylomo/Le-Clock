import React from 'react';
import './App.css';
//import { render } from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }
  
  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hrs: currentTime.getHours(),
      min: currentTime.getMinutes(),
      sec: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
      
    }
  }

  render() {
    const {hrs, min, sec, ampm} = this.state;
    return (
      <div className="App">
        <h2>My Time.</h2>
        <div className="Inner">
        {hrs === 0 ? 12 : hrs > 12 ? hrs - 12 : hrs} :
        {min > 9 ? min : `0${min}`} : 
        {sec > 9 ? sec : `0${sec}`} {ampm}
        </div>
      </div>
    );
  }
}


export default App;
