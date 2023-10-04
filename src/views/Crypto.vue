<template lang="">
    <div>
        <!-- <v-crypto5/> -->
        
       
        <v-crypto1/>
        <v-crypto3/>
        <v-crypto4/>
        <v-crypto2/>
       
    </div>
</template>
<script>
import vCrypto5 from '../components/CryptoMainPage/v-crypto5.vue';
import vCrypto4 from '../components/CryptoMainPage/v-crypto4.vue';
import vCrypto3 from '../components/CryptoMainPage/v-crypto3.vue';
import vCrypto2 from '../components/CryptoMainPage/v-crypto2.vue';
import vCrypto1 from '../components/CryptoMainPage/v-crypto1.vue';
export default {
    components:{
        vCrypto4,
        vCrypto2,
        vCrypto1,
        vCrypto3,
        vCrypto5
       
        
    }
    
}
</script>
<style lang="">
    
</style>