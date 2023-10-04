<template>
   
    <div class="block">
    
     
 
   
     
 
     <p
       
       v-for="item in info"
       :key="item"
       class="currency"
     >
    
        <span class="">
          
       <span class="span-black">Last news BBC:{{item.title}}</span>  <span class="span-white"></span>

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
    .get('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=1')
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
     .span-white{
      margin-top: 15px;
     }
     .span-black{
      color: rgb(252, 248, 248);
      margin-top: 5px;
     }
     .main-img{
      width: 100px;
     }
    
   .block{
    // border-bottom: 2px solid #faa216;
    // border-top: 2px solid red;
   height: 50px;
   width:100%;
  margin-top: px;
  //  background:red;
   position: fixed;
   z-index: 1;
  // border: 2px solid black;
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  }
  
   

 .block p{
   text-align:center;
   color:rgb(5, 5, 5);
   text-transform: uppercase;
   padding-top: px;
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
 
  //  .block{
  //   @media screen and(max-width: 400px){
  //     background-color: #f70202;
  //   }
  //  }
   .block p{
    @media screen and(max-width: 500px){
      font-size: 170%;
    }
    @media screen and(max-width: 400px){
      font-size: 190%;
    }
   }
  //  .block{
  //   @media screen and (max-width: 500px){
  //     height: 33px;
  //   }
  //   @media screen and (max-width: 400px){
  //     height: 37px;
  //   }
  //  }
   </style>
       
   
   