import { currencies } from '../data'
import { useCryptoStore } from '../store'

function CriptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
  
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda: </label>
        <select
          id="currency"
          name="currency" 
        >
          <option value="">-- Seleccione --</option>
          {currencies.map(currency => (
            <option 
              key={currency.code} value={currency.code}>{currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda: </label>
        <select
          id="criptocurrency"
          name="criptocurrency" 
        >
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map(crypto => (
            <option 
              key={crypto.CoinInfo.Name} 
              value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}
            </option>
          ))

          }
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  )
}

export default CriptoSearchForm