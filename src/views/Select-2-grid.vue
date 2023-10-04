<template lang="">
    <div class="wrap">

     


    <section class="col-4-grid">
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
export default{
  data(){
    return{
      info2:null
    }
  },
//   mounted(){
//       axios
//        .get('https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=4')
//       // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
//        .then(response=>{
//            this.info2 = response.data.articles
//       })
//       .catch(error=>{
//         console.log(error)
//       })
//   }
mounted(){
    axios
   // .get('https://api.markets.sh/api/v1/clusters/800e5c32-4aaf-47aa-a281-fdd0dfed6c4f?api_token=d43fa08589cb6be0b6603b633e27052a')
    .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=2')
    .then(responce=>{
        this.info2 = responce.data.articles

    })
    .catch(error=>{
        console.log(error)
    })
}
}
  
</script>
<style lang="scss" scoped>
.sport-logo{
  width: 300px;
}
li{
  margin-left: 20px;
}
    .wrap{
        // padding-left: 20px;
        // padding-right: 20px;
        margin-top: 0px;
        font-weight: bold;
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
   .col-4-grid{
   margin-top: px;
   }
 .col-4-grid__block-grid{
  display: grid;
  grid-template-columns:repeat(1,1fr);
  margin-top: 0px;
  margin-left: 100px;
  }
.img{
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    
  width: 270px;
  // height: 150px;

}
.col-grid-4__block-grid-content-paragraph{
 margin: 10px;
 font-size: 14px;
 width: 270px;
 
}
.col-grid-4__block-grid-content-paragraph-link{
  text-decoration: none;
  color: black;
  width: 270px;
  font-weight: bold;
  }
  .col-grid-4__block-grid-content-paragraph-link:hover{
  text-decoration: underline;
}

</style>