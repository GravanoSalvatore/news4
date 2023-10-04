<template lang="">
    <div class="wrap">
      <!-- <v-crypto7/> -->
    <div class="home1">


<!-- <div class="top">
<v-crypto7/>
</div>  -->
   <!--  -->
    
    <!-- <v-crypto8/> -->
   
   
   
    <!-- <div class="text">
     
    <h2>Crypto Media Hub: Your Ultimate Source for Fresh Updates on Cryptocurrencies and Stock Markets</h2>
    <div class="grid">
    <p>Since the emergence of the first cryptocurrency, Bitcoin, in 2009, the world has witnessed a revolution in the financial landscape. Cryptocurrencies and blockchain technologies have brought new opportunities and challenges for investors, financial analysts, and society as a whole. In this dynamic and rapidly evolving realm, information is a crucial resource. One of the leading sources of news and analysis in the realm of cryptocurrencies and stock markets is the CryptoNews website.
<strong>Crypto Media Hub</strong> offers a wide range of information, covering various aspects of cryptocurrencies and financial markets. From the latest news about major price changes in Bitcoin and other popular cryptocurrencies to analytical reviews of stock indices and significant economic events.

</p>
<img src="../../assets/coins.png" class="img">
<p><strong>Crypto Media Hub</strong> offers a wide range of information, covering various aspects of cryptocurrencies and financial markets. From the latest news about major price changes in Bitcoin and other popular cryptocurrencies to analytical reviews of stock indices and significant economic events.
</p> 
      </div>
      <div class="gri">
    <p><strong>Crypto Media Hub</strong> offers a wide range of information, covering various aspects of cryptocurrencies and financial markets. From the latest news about major price changes in Bitcoin and other popular cryptocurrencies to analytical reviews of stock indices and significant economic events.
</p> 
   <p><strong>Crypto Media Hub</strong> serves as your reliable source for fresh updates on the world of cryptocurrencies. With regular updates, you will always stay informed about the latest events in the industry. Whether it's a major update in the protocol of a cryptocurrency, a new legislative proposal affecting the crypto sphere, or a statement from a prominent figure in the financial world, <strong>Crypto Media Hub</strong> will promptly provide you with the details.
</p>
      </div>
    </div>  -->
    <v-crypto4/>
    <v-crypto6/>
    <v-crypto2/> 
    <br/>
    <v-crypto3 :itemsPerPage="10"></v-crypto3>

<!-- <v-crypto5/> -->

     </div>
     </div>
    <br />
  </template>
<script >
import axios from 'axios'
import vCrypto2 from '../../components/crypto/v-crypto2.vue'
import vCrypto3 from './v-crypto3.vue'
import vCrypto4 from './v-crypto4.vue'
import vCrypto5 from './v-crypto5.vue'
import vCrypto6 from './v-crypto6-kurs.vue'
import vCrypto7 from './v-crypto7-top.vue'
import vCrypto8 from './v-crypto8video.vue'
import vCryptoAnimation from './v-crypto-animation.vue'
export default {
   components: {
      vCrypto2,
      vCrypto3,
      vCrypto4,
      vCrypto5,
      vCrypto6,
      vCrypto7,
      vCrypto8,
      vCryptoAnimation
   },




   data() {
      return {
      }
   },
}
</script>





<style lang="scss" scoped>
.top {
   margin-top: px;
}

h2 {
   margin-top: 50px;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.wrap {
   font-weight: 500;
}

.home1 {
   margin-top: 0px;
   color: rgb(65, 46, 46);
}

.text {
   // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
   padding: 10px;
   font-size: 20px;
   
   margin-top: 33px;
}

p {
   // font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.grid {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
}

.img {
   width: 400px;
}
.grid {
   @media screen and(max-width:850px){
      grid-template-columns: repeat(1, 1fr);
   }
   
   
}
.img{
   @media screen and (max-width: 400px){
      width: 300px;
   }
}
</style>