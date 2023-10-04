<template lang="">
  <section class="col-4-grid">
      <div class="col-4-grid__block">
      <div class="col-4-grid__block-grid"
     
      >
        <ul class="col-grid-4__block-grid-content"
        v-for="item in info2"
      :key="item"><span>
         
          <li class="col-grid-4__block-grid-content-paragraph">
            <a class="col-grid-4__block-grid-content-paragraph-link" 
            :href="item.url" 
            target="_blank "> {{ item.title }} </a>
          </li>
       </span> </ul>
       
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
      .get('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=d205e0353aed4e42b97d11c1a88207f0&pageSize=8')
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
ul{
  margin-left: 20px;
}
.col-4-grid {
  // margin-top: 50px;
  width: auto;
  background-color: rgb(219, 225, 231);
  margin-left: 20px;
  margin-right: 20px;
}

.col-4-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
}

.col-grid-4__block-grid-content-image {
  width: 230px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
  /* margin-right: 20px;
 margin-left: 20px; */

}

.col-grid-4__block-grid-content-paragraph {
  /* margin-right: 20px;
 margin-left: 20px; */
  font-size: 18px;
  width: 200px;
  margin: 10px;
  /* padding-left: 10px;
  padding-right: 10px; */
  font-weight: bold;
}

.col-grid-4__block-grid-content-paragraph-link {
  text-decoration: none;
  color: black;
  width: 200px;
}

.col-grid-4__block-grid-content-paragraph-link:hover {
  text-decoration: underline;
}

.col-4-grid__block-grid {
  @media screen and(max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and(max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
li{
  @media screen and(max-width: 400px){
    width: 180px;
    font-size: 28px;
    margin-left: 100px;
  }
}
  // @media screen and(max-width: 800px)
  // {display: grid;
  // grid-template-columns:repeat(3,1fr);
  // }
  
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
</style> 



