<template lang="">
  <section class="col-4-grid">
      <div class="col-4-grid__block">
      <div class="col-4-grid__block-grid"
     
      >
        <div class="col-grid-4__block-grid-content"
        v-for="item in info2"
      :key="item"><span>
          <img class="col-grid-4__block-grid-content-image img"
          v-if="item.urlToImage"
           :src='item.urlToImage' 
           :alt=' alt'>
           <img class="col-grid-4__block-grid-content-image img"
            v-else 
            src="../../assets/E!_News_current_logo.png">

          <p class="col-grid-4__block-grid-content-paragraph">
            <a class="col-grid-4__block-grid-content-paragraph-link" 
            :href="item.url" 
            target="_blank "> {{ item.title }} </a>
          </p>
       </span> </div>
       
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
      .get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=d205e0353aed4e42b97d11c1a88207f0&pageSize=8')
      // .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb237649c2594555a26f68e392086d40&pageSize=10')
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
.col-4-grid {
  margin-top: 50px;
  width: auto;
}

.col-4-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  margin-left: 20px;
}

.col-grid-4__block-grid-content-image {
  width: 265px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
  /* margin-right: 20px;
 margin-left: 20px; */

}

.col-grid-4__block-grid-content-paragraph {
  /* margin-right: 20px;
 margin-left: 20px; */
  font-size: 16px;
  width: 265px;
  /* padding-left: 10px;
  padding-right: 10px; */
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
  @media screen and(max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  // @media screen and(max-width: 800px)
  // {display: grid;
  // grid-template-columns:repeat(3,1fr);
  // }
  @media screen and(max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

}

.img {
  @media screen and (max-width:1000px) {
    width: 245px;
  }

  // @media screen and (max-width:800px)
  // {
  //   width: 250px;}

  @media screen and (max-width:600px) {
    width: 950px;
  }

}

//   .col-grid-4__block-grid-content-paragraph{
//   @media screen and (max-width:600px){
//     display: none;
//   }
// }
.col-grid-4__block-grid-content-paragraph {
  @media screen and (max-width: 800px) {
    font-size: 130%;

  }

  @media screen and (max-width: 600px) {
    width: 1000px;
    font-size: 150%;
  }

  @media screen and (max-width: 500px) {
    font-size: 180%;
  }

  @media screen and (max-width: 400px) {
    font-size: 240%;
  }
}
</style> 



