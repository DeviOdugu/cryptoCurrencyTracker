// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptoCurrencyDetails

  return (
    <li className="a">
      <div className="b">
        <img
          className="image"
          src={currencyLogo}
          alt={currencyName}
          height="25px"
          width="25px"
        />
        <p> {currencyName} </p>
      </div>
      <div className="b">
        <p className="value"> {usdValue} </p>
        <p className="value"> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
