class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
  
    this.intervalId = setInterval(() => {
      this.currentTime ++
      if (printTimeCallback){
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return (Math.floor(this.currentTime / 6000))
  }

  getSeconds() {
    return (Math.floor((this.currentTime / 100) % 60))
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length < 2) {
      return `0${value}`
    } return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let milSec = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${milSec}`
  }
}

const chronometer1 = new Chronometer();
chronometer1.start()

console.log(setInterval(() => {
  chronometer1.getSeconds()
},60000))