<template lang="">
   
   


    <div class="div" id="open">
      <!-- <button @click="bigSize"><img class="zoom" src="../assets/search-icon-customer-icon-11564158924ifw7wyjtfu.png"></button> -->
    <div v-for="item in news"
    
    :key="item">
    <img class="" :src="item.urlToImage">
    <!-- <img v-else src="../assets/news.jpeg"> -->
    <br/>
    <div class="div-title">
   <a class="title" :href="item.url" 
                    target="_blank ">{{item.title}}</a>
    </div>
    <br/>
    </div> 
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      news: [],
      // searchT:''
    }
  },
  methods: {
    bigSize() {
      document.getElementById('open').style.display = 'none'
      document.getElementById('open-big').style.display = 'block'
      document.getElementById('grid').style.display = 'none'
    },
    bigSizeClosed() {
      document.getElementById('open-big').style.display = 'none'
      document.getElementById('open').style.display = 'block'
      document.getElementById('grid').style.display = 'block'
    }
  },

  // 
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=d205e0353aed4e42b97d11c1a88207f0&pageSize=100')
      //.get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
      // .get(' https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?TenantId=1&Language=52&Country=41&CategoryId=3&Page=1&PageSize=10')
      .then(response => {
        this.news = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style lang="scss" scoped>
.button {
  position: sticky;
  top: 0;

}

.div-title-open {
  width: 500px;
  margin: 30px;
}




.title-open {
  width: 700px;

  text-decoration: none;
  color: black;
  // margin: 20px;
  font-weight: bold;
}

.img-big {
  width: 950px;
  margin: 28px;
}

button {
  position: absolute;
}

::placeholder {
  color: black;
}

img {
  width: 600px;

}

form {
  position: relative;

}

p {
  width: 450px;
  color: rgb(7, 7, 7);
  margin: 10px;
}

.div-title {
  padding: 10px;
}

.title {
  width: 400px;
  text-decoration: none;
  color: black;
  // margin: 20px;
  font-weight: bold;

}

.title:hover,
.title-open:hover {
  text-decoration: underline;
  // text-decoration-color: white;

}

.div {

  width: 650px;
  margin-top: 50px;
  height: 1700px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  color: rgb(3, 3, 3);
  //  opacity: 0.7;

}</style>