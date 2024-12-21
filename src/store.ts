import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getCryptos, getCurrentCryptoPrice } from "./services/CryptoService";
import { CryptoCurrency, Pair } from "./types";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
  cryptoCurrencies: [],

  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  },

  fetchData: async (pair) => {
    // const cryptoData = await getCryptoInfo()
    await getCurrentCryptoPrice(pair)
  }

})))