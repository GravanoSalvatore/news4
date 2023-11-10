<template lang="">
  <br/>
  <div class="container">
    <h3 class="fw-bold">SPORT</h3><hr/>
    </div>
  <div>
    <br/>
    <sport2/>
    <sport/>
    <sport7/>
    <sport3/>
    <sport4/>
    
    <sport5/>
    <sport6/>
  </div>
  <br/><br/>
</template>
<script>
import sport from '../components/SportMainPage/v-sport.vue'
import sport2 from '../components/SportMainPage/v-sport-2.vue'
import sport3 from '../components/SportMainPage/v-sport-3.vue'
import sport4 from '../components/SportMainPage/v-sport-4.vue'
import sport5 from '../components/SportMainPage/v-sport-5.vue'
import sport6 from '../components/SportMainPage/v-sport-6.vue'
import sport7 from '../components/SportMainPage/v-sport-7.vue'
export default {
  components: {
    sport,
    sport2,
    sport3,
    sport4,
    sport5,
    sport6,
    sport7
  }

}
</script>
<style lang="">
  
</style>