<template lang="">
    <br/>
    <form>
    <input type="search" v-model="searchT" placeholder="Search articles by title" v-on:input="onSearchType">
    <!-- <input type="submit" value="Go" class="button"> -->
    </form>
  
    <div class="div"> <button @click="searchClose" class="close"><img style="width:14px" src="../assets/1486564399-close_81512.png"></button> 
    
    <div v-for="item in news"
    
    :key="item">
    <img  v-if="item.urlToImage" :src="item.urlToImage"> 
    <img v-else src="../assets/news.jpeg">
  <ul>
     
   <a class="title" :href="item.url" 
           target="_blank "><li>{{item.title}}</li></a>
          </ul>   
    
    </div> 
    </div>
</template>
<script>
// 1fb27fc9978d48ecadb4bdc77705325e API tech
import axios from 'axios';
export default {
    data(){
        return{
            news:[],
            searchT:''
        }
    },

  methods: {
    onSearchType: function(){
  
  const search = document.querySelector('.div').style.display='block'
       var url = 'https://newsapi.org/v2/everything?apiKey=3b78f002dbc4466fb5314c295e5f268b&pageSize=100' + '&q=' + this.searchT;
      
        axios
            .get(url)
            .then(response=>{
                this.news = response.data.articles
            })
            .catch(error=>{
            console.log(error)
            });
    },
    searchClose(){
      const searchClosed = document.querySelector('.div').style.display='none'
    }
  },
   
    
}
</script>
<style lang="scss" scoped>
.close{
  
  position: absolute;
  left: 272px;
  top:73px;
}

::placeholder{
  color: black;
  
}
ul{
  width: 250px;
}
img{
    width: 250px;
    // opacity: 0.7;
    
}
// img:hover{
//  opacity: 1;
// }
form {
position: relative;
  
}
// input[type='submit'] {
//   position: absolute;
//   right: 0;
//   top: 0;
//    width: 70px;
//    color: rgb(4, 4, 4);
   
// }
input{
 background: rgb(6, 6, 6);
 padding: 10px;
 border-bottom: 2px solid rgb(251, 1, 1);
//   margin-right: 50px;
width: 290px;
  height: 30px;
  color: white;
  // padding: 17px;
  font-weight: bold;
  // box-shadow: 0 0 20px 10px rgb(0 0 0 / 50%);
  border-radius: 7px;
  // position: relative;
//   width: 100%;
  outline: none;
//   border-bottom: 3px solid rgb(246, 3, 3);
}
   li{
    width: 250px;
    color: rgb(253, 249, 249);
    list-style: none;
   
   } 
   .title{
    text-decoration: none;
    color: black;
    // margin: 20px;
    font-weight: bold;
   }
   .title:hover{
    text-decoration: underline;
    // text-decoration-color: white;
    color: white;
    
   }
   .div{
    // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    border:2px solid white;
    display: none;
    width: 290px;
    margin-left: px;
    margin-right: 30px;
    margin-top: 15px;
    border-radius:5px;
    // overflow-y: scroll;
   
    padding: 20px;
    // max-height: calc(100vh - 56px);
    height:615px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #040d1d;
      color:rgb(3, 3, 3);
    //   z-index: 5;
    //   display: none;
   }
   
   ::placeholder{
    font-size: 17px;
    color: white;
    @media screen and (max-width: 500px){
      font-size: 24px;
    }
    @media screen and (max-width: 400px){
      font-size: 28px;
    }
   }
   input{
    @media screen and (max-width: 500px){
      width: 450px;
      font-size: 30px;
    }
    // @media screen and (max-width: 400px){
    //   width: 350px;
    // }
    
   }
   .div{
    @media screen and (max-width: 500px){
      width: 450px;
      padding: 0;
      
    }
    @media screen and (max-width: 350px){
      height: 950px;
    }
   }
   img,li,ul{
    @media screen and (max-width: 500px){
      width: 450px;
      margin-left: 7px;
    }
   }
   .close{
    @media screen and (max-width: 500px){
      left: 425px;
    }
   }
   .title{
    @media screen and(max-width: 500px){
      font-size: 24px;
    }
    @media screen and(max-width: 350px){
      font-size: 30px;
    }
   }
</style>