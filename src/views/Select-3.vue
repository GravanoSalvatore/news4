<template lang="">
   
    
    <div id="open-big">
      <!-- <button  class="button" @click="bigSizeClosed"><img class="img-closed" src="../assets/closed-7ab22f697e.png"></button> -->
      <div v-for="item in news"
    
    :key="item">
    <img class="img-big" :src="item.urlToImage">
    
    <br/>
    <div class="div-title-open">
   <a class="title-open" :href="item.url" 
                    target="_blank ">{{item.title}}</a>
    </div>
  
  







  
  </div>
    </div>




    <div class="div" >
      <!-- <button @click="bigSize" class="button-2"><img class="zoom" src="../assets/zo.png"></button> -->
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
    data(){
        return{
            news:[],
            // searchT:''
        }
    },
    // methods:{
    //   bigSize(){
    //     document.querySelector('.div').style.display='none'
    //     document.getElementById('open-big').style.display='block'
    //     document.getElementById('grid').style.display='none'
    //   },
    //   bigSizeClosed(){
    //     document.getElementById('open-big').style.display='none'
    //     document.querySelector('.div').style.display='block'
    //     document.getElementById('grid').style.display='block'
    //   }
    // },


   
mounted(){
      axios
      .get('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=100')
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
.zoom{
  width: 35px;
  padding: 2px;
  border-radius: 50px;
}
.zoom:hover,.img-closed:hover{
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}
.img-closed{
  width: 45px;
  // border-radius: 50%;
}
.button{
   position: sticky;
   top:0;
   width: 50px;
   
}
.div-title-open{
  width: 800px;
  margin: 30px;
}
#open-big{
  margin-top: 10px;
  position: absolute;
  display: none;
  overflow-x: hidden;
     overflow-y: auto;
     height: 600px;
     background-color: white;
     margin-left: 145px;
     box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
     z-index: 2;
    
}
.title-open{
  width: 700px;
 
  text-decoration: none;
    color: black;
    // margin: 20px;
    font-weight: bold;
}
.img-big{
  width: 950px;
  // margin: 28px;
}
button{
  position: absolute;
  width: 40px;
}
::placeholder{
  color: black;
}
img{
    width: 450px;
    
}
form {
position: relative;
  
}
input[type='submit'] {
  position: absolute;
  right: 0;
  top: 0;
   width: 70px;
   color: rgb(4, 4, 4);
   
}
input{
  // background: rgb(231, 231, 232);
 margin-left: 5px;
//   margin-right: 50px;
width: 450px;
  height: 50px;
  padding: 17px;
  font-weight: bold;
//   box-shadow: 0 0 20px 10px rgb(0 0 0 / 50%);
  border-radius: 7px;
  position: relative;
//   width: 100%;
  outline: none;
  border-bottom: 3px solid rgb(246, 3, 3);
}
   p{
    width: 450px;
    color: rgb(7, 7, 7);
    margin: 10px;
   } 
   .div-title{
    padding: 10px;
   }
   .title{
    text-decoration: none;
    color: black;
    // margin: 20px;
    font-weight: bold;
   
   }
   .title:hover,.title-open:hover{
    text-decoration: underline;
    // text-decoration-color: white;
    
   }
   .div{
    
    width: 450px;
  margin-top: 5px;
   height:600px;
      overflow-x: hidden;
     overflow-y: auto;
      background-color: white;
      color:rgb(3, 3, 3);
     opacity: 0.7;
    
   }
   .div:hover{
    opacity: 1;
    // border:3px solid red;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
   }
   ::placeholder{
    font-size: 17px;
   }
  //  img{
  //   @media screen and (max-width: 400px){
  //     width: 380px;
  //   }
  //  }
  //  .div{
  //   @media screen and (max-width: 400px){
  //     width: 380px;
  //   }
  //  }
   .div{
    @media screen and (max-width: 900px){
      width: 840px;
    }
    @media screen and (max-width: 700px){
      width: 660px;
    }
   }
   img{
    @media screen and(max-width: 900px){
      width: 840px;}
    @media screen and (max-width: 700px){
      width: 660px;
    }
   }
   .button-2{
    @media screen and (max-width: 900px){
      display: none;
    }
   }
</style>