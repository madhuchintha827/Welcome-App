// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: true}

  onClickMe = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  render() {
    const {subscribe} = this.state
    const buttonText = subscribe ? 'Subscribe' : 'Subscribed'
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onClickMe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
