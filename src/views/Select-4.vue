<template lang="">
   
<div class="div" id="open">
     
    <div v-for="item in news"
    
    :key="item">
    <img class="" :src="item.urlToImage">
   
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
    data(){
        return{
            news:[],
            // searchT:''
        }
    },
    methods:{
      bigSize(){
        document.getElementById('open').style.display='none'
        document.getElementById('open-big').style.display='block'
        document.getElementById('grid').style.display='none'
      },
      bigSizeClosed(){
        document.getElementById('open-big').style.display='none'
        document.getElementById('open').style.display='block'
        document.getElementById('grid').style.display='block'
      }
    },


mounted(){
      axios
      .get('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=d205e0353aed4e42b97d11c1a88207f0&pageSize=100')
       //.get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
        // .get(' https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?TenantId=1&Language=52&Country=41&CategoryId=3&Page=1&PageSize=10')
       .then(response=>{
           this.news = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  } 
}
</script>
<style lang="scss" scoped>





     
    

.title-open{
  width: 700px;
 
  text-decoration: none;
    color: black;
    // margin: 20px;
    font-weight: bold;
}


img{
    width:350px;
    
}
form {
position: relative;
  
}

   p{
    width: 350px;
   
    margin: 10px;
   } 
   .div-title{
    padding: 10px;
    width:350px ;
   }
   .title{
    
    text-decoration: none;
    color: rgb(250, 247, 247);
    // margin: 20px;
    font-weight: bold;
   
   }
   .title:hover,.title-open:hover{
    text-decoration: underline;
    // text-decoration-color: white;
    
   }
   .div{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 800px;
   margin-top: 50px;
   height:1000px;
      overflow-x: hidden;
     overflow-y: auto;
     
      color:rgb(3, 3, 3);
    //  opacity: 0.7;
    
   }
   
   
</style>