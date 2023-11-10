<template>
  <v-app id="app">


    <navi />
   

    <div style="margin-top: 25px;">
      <router-view />
    </div>
    <!-- <boots6/>  -->
    <div class="mb-10">
    <coock/>
    </div>
    <geo/>
    <v-footer-component />
  </v-app>
</template>

<script>
import geo from './components/Geo.vue'
import coock from './components/Coockies.vue'
import boots6 from './components/BootstrapMainPage/v-boots-6.vue'
import vFooterComponent from './components/footer/v-footer-component.vue'
import navi from './components/nav/nav-2.vue';

export default {
  components: {
    // vNav,
    vFooterComponent,
    navi,
    boots6,
    coock,
    geo
    // search,
    // searchGrid,
    // vNavNav

  },
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Proverka, skrollili li my vverkh
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
}
</script>
<style lang="scss" scoped>



.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 50px;
  margin-left: 130px;
}

p {
  margin-left: 10px;
}

::placeholder {
  color: rgb(7, 7, 7);
}


ul {
  margin-left: 50px;
}

.brand {
  width: 100px;
}

.footer-logo {
  display: flex;
  margin: 0 auto;
}

li {
  font-weight: bold;
}

li:hover {
  text-decoration: underline;
}




#app {
  // margin-left: 20px;
  color: rgb(65, 46, 46);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.container {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
