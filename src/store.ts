import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, getCurrentCryptoPrice } from "./services/CryptoService";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  currentCryptoPrice: CryptoPrice,
  loading: boolean,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [],
  currentCryptoPrice: {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: '',
  },
  loading: false,
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  },

  fetchData: async (pair) => {
    set(() => ({
      loading: true
    }))
    const currentCryptoPrice =  await getCurrentCryptoPrice(pair)
    set(() => ({
      currentCryptoPrice,
      loading: false
    }))
  }

})))