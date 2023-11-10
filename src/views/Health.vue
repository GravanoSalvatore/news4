<template lang="">
  <br/>
  <div class="container">
    <h3 class="fw-bold">HEALTH</h3><hr/>
    </div>
  <div>
    <br/>
    <health2/>
    <health/>
    <health7/>
    <health3/>
    <health4/>
   <health5/>
   <health6/>
    
  </div>
  <br/><br/>
</template>
<script>
import health from '../components/HealthMainPage/v-health.vue'
import health2 from '../components/HealthMainPage/v-health-2.vue'
import health3 from '../components/HealthMainPage/v-health-3.vue'
import health4 from '../components/HealthMainPage/v-health-4.vue'
import health5 from '../components/HealthMainPage/v-health-5.vue'
import health6 from '../components/HealthMainPage/v-health-6.vue'
import health7 from '../components/HealthMainPage/v-health-7.vue'
export default {
  components:{
   health,
   health2,
   health3,
   health4,
   health5,
   health6,
   health7
  }
  
}
</script>
<style lang="">
  
</style>