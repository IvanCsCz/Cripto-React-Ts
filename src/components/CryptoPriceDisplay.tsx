import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"

function CryptoPriceDisplay() {

  const currentCryptoPrice = useCryptoStore((state) => state.currentCryptoPrice)
  const loading = useCryptoStore((state) => state.loading)
  const hasResult = useMemo(
    () => !Object.values(currentCryptoPrice).includes(''), [currentCryptoPrice]
  )

  console.log(Object.values(currentCryptoPrice))

  return (
    <div className="result_wrapper">
      
      {loading ? <Spinner /> : hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <img 
              src={`https://cryptocompare.com/${currentCryptoPrice.IMAGEURL}`} 
              alt="Imagen Cryptomoneda" 
            />
            <div>
              <p>El precio es de: <span>{currentCryptoPrice.PRICE}</span></p>
              <p>Precio más alto del día: <span>{currentCryptoPrice.HIGHDAY}</span></p>
              <p>Precio más bajo del día: <span>{currentCryptoPrice.LOWDAY}</span></p>
              <p>Variacion últimas 24 horas: <span>{currentCryptoPrice.CHANGEPCT24HOUR}</span></p>
              <p>Ultima actualización: <span>{currentCryptoPrice.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CryptoPriceDisplay