<template>
    <div class="top">
        <router-link to="/" class="top-link top-stocks" href="#">Home</router-link>
        <router-link to="/Top" class="top-link top-100" href="#">About us</router-link>

        <router-link to="/Exchange" class="top-link top-exchange" href="#">GlobalNewsBlog</router-link>

        <router-link to="/Defi" class="top-link top-defi" href="#">Articles</router-link>
        <router-link to="/Nft" class="top-link top-nft" href="#">Contact</router-link>

        <!-- <a href="https://coinmarketcap.com/" class="top-link top-cmc" target="_blank">CoinMarketCap</a>-->

       
        <router-link to="/Ico" class="top-link top-ico" href="#">Video</router-link>

       <router-link to="/Top" class="top-link top-blog" href="#">Login</router-link>

        <!-- <router-link to="/Ai" class="top-link top-ai" href="#">AI</router-link>
        <router-link to="/Top" class="top-link top-people" href="#">PeopleCrypto</router-link>

        <router-link to="/Top" class="top-link top-cryptonews" href="#">CryptoNews</router-link> -->



    </div>
</template>
<script>
  // import axios from 'axios'
  
  // export default{
  //   data(){
  //     return{
  //       info:null
  //     }
  //   },
  //   mounted(){
  //     axios
  //     .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=6')
  //     .then(response=>{
  //          this.info = response.data.articles
  //     })
  //     .catch(error=>{
  //       console.log(error)
  //     })


     
      
      
  //   }
  // }
    
  </script>
  
<style lang="scss" scoped>
.top{
       margin-top: 10px;
       position: fixed; 
       z-index: 1;
      background-color: white;
      
  
    }
    .top-link{
        text-decoration: none;
        font-size: 18px;
      
        // font-weight: bold;
       
        /* border-left: 0.5px solid black;
        border-bottom: 0.5px solid black;
        border-top: 0.5px solid black;
        border-right: 0.5px solid black; */
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
       
       margin: 5px;
       padding: 10px;
       background-color: rgb(1, 1, 1);
        color: white;
      border-radius: 5px;
    }
    .top-link:hover{
        background-color: white;
        color: crimson;
        }
        .top-ai{
     
    }
    
    .top-stocks{
        background-color: white;
        color: crimson;
    }
    .top-stocks:hover{
        background-color: rgb(1, 1, 1);
        color: white;
    }
    
    .top-blog{
        @media screen and(max-width: 1152px){
            display: none;
        }
      
     }
     .top-ico{
        @media screen and(max-width: 1063px){
            display: none;
        }
    }
     .top-nft{
        @media screen and(max-width: 973px){
            display: none;
        }}
        .top-defi{
        @media screen and(max-width: 862px){
            display: none;
        }
      
     }
     .top-exchange{
        @media screen and(max-width: 756px){
            display: none;
        }
    }
     .top-100{
        @media screen and(max-width: 565px){
            display: none;
        }
    }
    .top-100{
        @media screen and(max-width: 565px){
            display: none;
        }
    }
    .top-stocks{
        @media screen and(max-width: 435px){
            display: none;
        }
    }
</style>
   

