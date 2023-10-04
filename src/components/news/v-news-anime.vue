<template>
  <div class="block">






    <p v-for="item in info" :key="item" class="currency">

      <span class="">
        <img class="main-img" :src='item.urlToImage' :alt='alt'>
        <!-- Last news:  {{item.title}} -->
      </span>
    </p>


  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: null,

    };
  },

  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=7')
      .then(response => {
        this.info = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })

  }



}

</script>
     
<style lang="css" scoped>
.main-img {
  width: 100px;
}

.block {
  display: flex;
  align-items: flex-start;
}

.block {
  /* display: grid;
     grid-template-columns: repeat(3,1fr); */
  height: 40px;
  margin-top: 100px;
  width: 100%;
  margin: 0 auto;
  background: #020202;
  position: fixed;
  box-shadow: 0 5px 10px white;
  z-index: 1;
}

.block p {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-top: 5px;
  animation: text 15s infinite linear;
  padding-left: 100%;
  white-space: nowrap;
}

@keyframes text {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-60%, 0);
  }
}
</style>
       
   
   