<template lang="">
  <section class="col-4-grid">
      <div class="col-4-grid__block">
      <div class="col-4-grid__block-grid"
     
      >
        <div class="col-grid-4__block-grid-content"
        style=""
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
      .get('https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=d205e0353aed4e42b97d11c1a88207f0&pageSize=14')
      //  .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb237649c2594555a26f68e392086d40&pageSize=8')
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
.col-4-grid {
  margin-top: 50px;
  @media screen and(max-width: 1000px){
    display: none;
  }
}

.col-4-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  padding-right: 150px;
}

.img {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
  width: 250px;
  /* margin-right: 20px;
 margin-left: 20px; */

}

.col-grid-4__block-grid-content-paragraph {
  /* margin-right: 20px;
 margin-left: 20px; */
  font-size: 100%;
  /* padding-left: 10px;
  padding-right: 10px; */
  width: 250px;
}

.col-grid-4__block-grid-content-paragraph-link {
  text-decoration: none;
  color: black;
  
  font-weight: bold;
}

.col-grid-4__block-grid-content-paragraph-link:hover {
  text-decoration: underline;
}

.col-4-grid__block-grid {
  @media screen and(max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  // @media screen and(max-width: 600px)
  // {display: grid;
  // grid-template-columns:repeat(2,1fr);
  // }
}

.img {
  @media screen and (max-width:1000px) {
    width: 320px;
  }

  // @media screen and (max-width:600px)
  // {
  //   width: 290px;
  // }
}

.col-grid-4__block-grid-content-paragraph {

  .col-grid-4__block-grid-content-paragraph-link {
    @media screen and (max-width: 800px) {
      font-size: 120%;
      width: 270px;
    }

    @media screen and (max-width: 600px) {
      font-size: 130%;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 140%;
  }

  @media screen and (max-width: 400px) {
    font-size: 170%;
  }
}</style> 



