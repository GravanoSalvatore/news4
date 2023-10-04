 

<template>
  <div class="container">
    <br/><br/><br/><br/>
    <h1><strong>Top Cryptocurrencies</strong></h1>
    <div class="row">
  
   
      <div class="col-sm-3 mb-3 mb-sm-0" v-for="(crypto, index) in displayedCryptocurrencies" :key="crypto.id">
        <div class="card">
        <div class="card-body">
        <img :src="crypto.image" :alt="crypto.name" width="50" height="50"><br/>
        {{ (currentPage - 1) * perPage + index + 1 }}. <span class="name">{{ crypto.name }}</span> <span class="symbol">({{ crypto.symbol }})</span><br/>
        Price:${{ crypto.current_price }}<br/> (Market Cap: ${{ crypto.market_cap.toLocaleString() }})
        <span :class="{'positive-change': crypto.price_change_percentage_24h > 0, 'negative-change': crypto.price_change_percentage_24h < 0}"><br/>
          24h Change: {{ crypto.price_change_percentage_24h.toFixed(2) }}%
        </span><br/>
        24h Volume: ${{ crypto.total_volume.toLocaleString() }}
        
       
            
            <div v-if="crypto.exchange_with_max_volume">
              Largest Volume Exchange: {{ crypto.exchange_with_max_volume.name }} ({{ crypto.exchange_with_max_volume.symbol }})
              <br/>
              Volume: ${{ crypto.exchange_with_max_volume.volume.toLocaleString() }}
            </div>
      </div>
    </div>
</div>
</div>



    <div class="pagination">
      <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span class="page-numbers">{{ currentPage }} / {{ pageCount }}</span>
      <button class="next-bt" @click="nextPage" :disabled="currentPage === pageCount">Next</button>
    </div>



    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cryptocurrencies: [],
      currentPage: 1,
      perPage: 12, 
    };
  },
  computed: {
    displayedCryptocurrencies() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.cryptocurrencies.slice(startIndex, endIndex);
    },
    pageCount() {
      return Math.ceil(this.cryptocurrencies.length / this.perPage);
    },
  },
  mounted() {
    this.fetchCryptocurrencies();
  },
  methods: {
    async fetchCryptocurrencies() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,ripple,litecoin,cardano,polkadot,stellar,binancecoin,chainlink,bitcoin-cash,tezos,tron,theta-token,ethereum-classic,vechain,hedera-hashgraph,bitcoin-sv,neo,nem,helium,aave,decred,synthetix-network-token,elrond,icon,dai,solana,huobi-token,huobi-token,compound-ether,celsius-degree-token,yearn-finance,curve-dao-token,bittorrent,1inch,near-protocol,0x,maker,kyber-network,decentraland,quant-network,verge,shiba-inu,trust-wallet-token,ethereum-classic,siacoin,loopring,wax,sushiswap,ampleforth,fei-protocol,helium,terra,liquity-usd,aelf,injective-protocol,telos,electroneum,electric-coin-company,serum,binance-usd,augur,civic,trust-wallet-token,matic-network,tether', // Здесь добавлены идентификаторы для Matic (Polygon) и Tether (USDT)
              order: 'market_cap_desc',
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );
        this.cryptocurrencies = response.data;
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script> 









<style lang="scss" scoped>
.symbol{
  text-transform: uppercase;
}
.name{
  font-size: 20px;
  font-weight: bold;
}
li {
  list-style: none;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.prev-bt,
.next-bt {
  margin: 13px;
  background-color: white;
  color: rgb(248, 2, 2);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 2px;
  padding: 7px;
  font-weight: bold;
}
.card{
 
  margin: 10px;
}
.card:hover{
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}
.prev-bt:hover,
.next-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
}

.positive-change {
  color: green;
}

.negative-change {
  color: red;
}
</style>
