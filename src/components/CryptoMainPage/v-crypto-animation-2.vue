<template>
   
    <div class="block">
    
     
 
   
     
 
     <p
       
       v-for="item in info"
       :key="item"
       class="currency"
     >
    
        <span class="">
          <!-- <img 
     class="main-img"
     :src='item.urlToImage' :alt=' alt'> -->
       Last news BBC:  {{item.title}}
       </span> 
     </p>
 
  
 </div>
   </template>
     <script>
     import axios from 'axios'
     
     export default{
       data() {
     return {
       info: null,
       
     };
   },
   
   mounted(){
    axios
    .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=1')
    .then(response=>{
         this.info = response.data.articles
    })
    .catch(error=>{
      console.log(error)
    })

  }
      
      
    
     }
       
     </script>
     
     <style lang="scss" scoped>
     .main-img{
      width: 100px;
     }
     .block{
      display: flex;
      align-items: flex-start;
     }
   .block{
     display: grid;
     grid-template-columns: repeat(3,1fr);
   height: 30px;
   margin-top: 00px;
   width:100%;
    /* margin:0 auto;  */
  // 
  background: white;
   position: fixed;
   box-shadow: 10 15px 10px white;
   z-index: 1;}
  
   

 .block p{
   text-align:center;
   color:rgb(14, 87, 139);
   text-transform: uppercase;
   padding-top: 5px;
   animation: text 15s infinite linear;
   padding-left: 100%;
   white-space: nowrap;
   font-weight: bold;
 }
 @keyframes text {
   0%{
     transform: translate(0, 0);
   }
   
   100%{
     transform: translate(-160%, 0);
   }
 }
  //  .block, p{
  //   @media screen and (max-width: 600px){
  //   height: 40px;
  //   font-size: 26px;
  // }
  // @media screen and (max-width: 400px){
  //   height: 60px;
  //   font-size: 33px;
  // }
  // @media screen and (max-width: 350px){
  //   height: 70px;
  //   font-size: 45px;
  // }
   
   </style>
       
   
   