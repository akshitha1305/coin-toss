// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    isHeads: 'True',
    img: headImage,
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickTossButt = () => {
    const {isHeads} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState({isHeads: 'True'})
    } else {
      this.setState({isHeads: 'False'})
    }

    if (isHeads === 'True') {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState({
        img: headImage,
      })
    } else if (isHeads === 'False') {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
      this.setState({
        img: tailImage,
      })
    }
  }

  render() {
    const {img, isHeads, totalCount, headsCount, tailsCount} = this.state
    console.log(isHeads)
    console.log('headcount', headsCount)
    console.log('tailcount', tailsCount)
    return (
      <div className="bg-container">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={img} className="coin-img" alt="toss result" />
          <button
            onClick={this.onClickTossButt}
            type="button"
            className="toss-button"
          >
            Toss Coin
          </button>
          <div className="count-result-container">
            <p className="count-para">Total:{totalCount}</p>
            <p className="count-para">Heads:{headsCount}</p>
            <p className="count-para">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
