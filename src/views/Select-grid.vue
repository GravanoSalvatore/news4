<template lang="">
    <div class="wrap">

     


    <section class="col-4-grid" id="grid">
        <div class="col-4-grid__block">
        <div class="col-4-grid__block-grid"
       
        >
          <div class="col-grid-4__block-grid-content"
          v-for="item in info2"
        :key="item">
            <img class="col-grid-4__block-grid-content-image img" 
                 v-if="item.urlToImage" 
                 :src='item.urlToImage' 
                 :alt='alt'>
              <img  class="col-grid-4__block-grid-content-image img" 
                    v-else src="../assets/sport.jpeg" alt="img"> 
            <p class="col-grid-4__block-grid-content-paragraph">
              <a class="col-grid-4__block-grid-content-paragraph-link" :href="item.url" target="_blank "> {{ item.title }} </a>
            </p>
          </div>
         
        </div>
      </div>
    
  </section> 



    















       
 </div>
</template>



<script>
import axios from 'axios'
// 2e9a3f2dafb44777a86c64914a83abf1 API sport
export default {
  data() {
    return {
      info2: null
    }
  },

  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=10')
      .then(responce => {
        this.info2 = responce.data.articles

      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>
<style lang="scss" scoped>
.sport-logo {
  width: 300px;
}

// li{
//   margin-left: 20px;
// }
.wrap {
  // padding-left: 10px;
  // padding-right: 10px;
  margin-top: 17px;
  font-weight: bold;
  // width: 500px;
}

// .img{
//     width: 100%;
// }

//    img{
//     width: 500px;
//    } 
//    .defi-logo{
//     display: grid;
//     grid-template-columns: repeat(1,1fr);
//    }
.col-4-grid {
  margin-top: 20px;
}

.col-4-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-right: 100px;
}

.img {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
  width: 200px;
  // height: 150px;

}

.col-grid-4__block-grid-content-paragraph {
  margin: 10px;
  font-size: 14px;
  width: 200px;

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
  @media screen and(max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and(max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.img {
  @media screen and(max-width: 900px) {
    width: 285px;
  }

  @media screen and(max-width: 600px) {
    width: 280px;
  }

  @media screen and(max-width: 400px) {
    width: 400px;
  }
}</style>