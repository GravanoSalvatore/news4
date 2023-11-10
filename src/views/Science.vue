<template lang="">
  
  <div>
   
    <div class="container">
    <h3 class="fw-bold">SCIENCE</h3><hr/>
    </div>
    <science2/>
    <science/>
   <science7/>
   <!-- <anime/> -->
    <science3/>
    <science4/>
    <science5/>
    <science6/>
  </div>
  <br/><br/>
</template>
<script>
import anime from '../components/anime.vue'

import science from '../components/ScienceMainPage/v-science.vue'
import science2 from '../components/ScienceMainPage/v-science-2.vue'
import science3 from '../components/ScienceMainPage/v-science-3.vue'
import science4 from '../components/ScienceMainPage/v-science-4.vue'
import science5 from '../components/ScienceMainPage/v-science-5.vue'
import science6 from '../components/ScienceMainPage/v-science-6.vue'
import science7 from '../components/ScienceMainPage/v-science-7.vue'
export default {
  components:{
    science,
    science2,
    science3,
    science4,
    science5,
    science6,
    science7,
    anime
  }
  
}
</script>
<style lang="scss">
  h3{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>