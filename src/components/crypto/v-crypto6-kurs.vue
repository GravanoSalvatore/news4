<template>
  <div class="wrap">
    <div class="block">
      <p v-for="(price, currency) in info" :key="currency" class="currency">
        <strong>{{ currency.toUpperCase() }}/USD:</strong>
        <span class="lighten">
          <strong>{{ price.usd | currencydecimal }}</strong>
        </span>
      </p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  // filters: {
  //   currencydecimal(value) {
  //     return value.toFixed(2);
  //   },
  // },
  mounted() {
  
axios
  .get('https://api.coingecko.com/api/v3/simple/price', {
    params: {
      ids: 'bitcoin,ethereum,solana',
      vs_currencies: 'usd',
    },
  })
  .then((response) => {
    this.info = response.data;
  })
  .catch((error) => {
    console.error(error);
    this.errored = true;
  })
  .finally(() => (this.loading = false));

}}
</script>

<style lang="scss" scoped>
.wrap {
  margin-right: 20px;
}

.footer-social-link-three {
  margin: 7px;
}

.brand {
  width: 150px;
}

.footer-social-block-three {
  margin-left: auto;
}

.block {
  display: flex;
  height: 30px;
  margin-top: 0px;
  width: 100%;
  background: white;
  // position: fixed;
  box-shadow: 10px 15px 10px white;
  z-index: 1;}
  

.block p {
  text-align: center;
  color: #080808;
  // text-transform: uppercase;
  // padding-top: 5px;
  // animation: text 15s infinite linear;
  // padding-left: 100%;
  white-space: nowrap;
  margin: 10px;
}

// @keyframes text {
//   0% {
//     transform: translate(0, 0);
//   }

//   100% {
//     transform: translate(-160%, 0);
//   }
// }
</style>
