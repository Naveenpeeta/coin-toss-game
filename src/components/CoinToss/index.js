import {Component} from 'react'
import './index.css'

const headUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImageResult: headUrl, head: 0, tail: 0}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {head, tail} = this.state
    let latestHead = head
    let latestTail = tail
    let tossImage = ''

    if (tossResult === 0) {
      latestHead += 1
      tossImage = headUrl
    } else {
      latestTail += 1
      tossImage = tailUrl
    }

    this.setState({
      head: latestHead,
      tail: latestTail,
      tossImageResult: tossImage,
    })
  }

  render() {
    const {head, tail, tossImageResult} = this.state
    const total = head + tail

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossImageResult}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" onClick={this.onClickToss} className="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">{`total: ${total}`}</p>
            <p className="count">{`Heads: ${head}`}</p>
            <p className="count">{`Tails: ${tail}`}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
