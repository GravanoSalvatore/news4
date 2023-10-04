<template lang="">
  <h2>Sceince</h2>
  <section class="col-4-grid">
      <div class="col-4-grid__block">
      <div class="col-4-grid__block-grid"
     
      >
        <div class="col-grid-4__block-grid-content"
        v-for="item in info2"
      :key="item">
          <img class="col-grid-4__block-grid-content-image img" :src='item.urlToImage' :alt=' alt'>
          <p class="col-grid-4__block-grid-content-paragraph">
            <a class="col-grid-4__block-grid-content-paragraph-link" :href="item.url" target="_blank "> {{ item.title }} </a>
          </p>
        </div>
       
      </div>
    </div>
  
</section> 
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      info2: null
    }
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=d205e0353aed4e42b97d11c1a88207f0&pageSize=8')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
      .then(response => {
        this.info2 = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>
<style  lang="scss" scoped>
.route-link{
  text-decoration: none;
  color: black;
}
.col-4-grid {}

.col-4-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
}

.img {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 10px;
  width: 295px;
  /* margin-right: 20px;
 margin-left: 20px; */

}

.col-grid-4__block-grid-content-paragraph {
  margin: 8px;
  /* margin-right: 20px;
 margin-left: 20px; */
  font-size: 14px;
  /* padding-left: 10px;
  padding-right: 10px; */
  width: 270px;
}

.col-grid-4__block-grid-content-paragraph-link {
  text-decoration: none;
  color: black;
  width: 200px;
  font-weight: bold;
}

.col-grid-4__block-grid-content-paragraph-link:hover {
  text-decoration: underline;
}
.col-4-grid__block-grid {
  @media screen and(max-width:900px){
  
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;}

  @media screen and(max-width:600px){
  
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;}
  @media screen and(max-width:400px){
  
  grid-template-columns: repeat(1, 1fr);
  margin-top: 30px;}
}
.img {
  @media screen and(max-height:400px){
    width: 360px;
    
  }
}
</style> 



