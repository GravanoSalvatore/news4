<template lang="">
  <br/><br/>
  <div>
    <br/>
   
    <enter2/>
   
    
    <div class="enter-3">
    <enter3/>
    <enter4/>
    <enter/>
    </div>
  </div>
  <br/><br/>
</template>
<script>
import enter from '../components/EntertainmentMainPage/v-enter.vue'
import enter2 from '../components/EntertainmentMainPage/v-enter-2.vue'
import enter3 from '../components/EntertainmentMainPage/v-enter-3.vue'
import enter4 from '../components/EntertainmentMainPage/v-enter-4.vue'
export default {
  components:{
    enter,
    enter2,
    enter3,
    enter4
  }}
  

</script>
<style lang="scss">
  // .enter-3{
  //   @media screen and(max-width: 350px){
  //     display: none;
  //   }
  // }
</style>