// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))
    this.setState({
      cryptoData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="heading"> Cryptocurrency Tracker </h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              height="200px"
              width="400px"
              className="crypto-image"
            />
            <div className="card">
              <div className="c">
                <h1 className="coin-type"> Coin Type </h1>
                <div className="d">
                  <h1 className="usd"> USD </h1>
                  <h1 className="euro"> EURO </h1>
                </div>
              </div>
              <ul>
                {cryptoData.map(eachItem => (
                  <CryptocurrencyItem
                    key={eachItem.id}
                    cryptoCurrencyDetails={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
