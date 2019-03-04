import React from 'react'

export default class Countdown extends React.Component {

  constructor(props) {
    super(props)

    this.getRemainingTime()
    // this.state = {
    //   interval: this.getRemainingTime()
    // }
  }

  getRemainingTime() {
    let now = new Date,
        newYear = new Date(now.getFullYear() + 1, 0, 1)
    console.log(newYear);
  }

  render() {
    return (
      <section className="hero is-primary is-bold has-text-centered is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Countdown
            </h1>
            <h2 className="subtitle">
              Deadline is coming real quick!
            </h2>
            <div className="section">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Days</p>
                    <p className="title">101</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Hours</p>
                    <p className="title">23</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Minutes</p>
                    <p className="title">59</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Seconds</p>
                    <p className="title">59</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
