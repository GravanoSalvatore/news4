
    


<template lang="">
  <div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
      <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Donate</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img class="img-donate" src="../../assets/bitcoin_94576.png"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
        <img class="img-donate" src="../../assets/eth-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95451.png"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
        <img class="img-donate" src="../../assets/usdt_cryptocurrencies_icon_188337.png"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
        <img class="img-donate" src="../../assets/paypal_512_icon-icons.com_75983.png"><span>17Mrtxxq2iXfyGKf9QY1oUtFezUQ1DZUS8</span><br/>
        
        
        

      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>


</div>


<div class="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"> <a class="navbar-brand " href="#"><img style="width:70px" src="../../assets/e-good-news-1024x936.png"></a></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <p>Good News are your trusted source for up-to-the-minute news covering the world of cryptocurrencies and the dynamic realm of business. Our mission is to provide our readers with the freshest and most reliable information needed to make informed decisions in the fields of investment, finance, and technology.</p>
      <p>Good News monitor the latest developments in the cryptocurrency world, analyze the market, and provide reviews of leading digital assets. Whether you're an experienced trader or a newcomer to the crypto space, our content will help you stay informed about crucial events.</p>
      <p>Good News keep tabs on business news and trends that can impact the global economy. Our articles offer analytical insights into significant happenings in the business world, corporate innovations, and global trends.
</p>
      <p>Good News adhere to the highest standards of journalism and strive to deliver trustworthy information. Our team of professional journalists and experts ensures that you receive only high-quality content.
</p>
      <p>Good News update our website as soon as important information surfaces, ensuring you're always in the know.
</p>
      <p>Good News cover a wide range of subjects, from cryptocurrencies and finance to technology and business, catering to the interests of all our readers.</p>
      <p>Good News provide an analytical perspective on events, along with expert commentary to help you understand their implications.</p>
      <p>With us, you gain access to a world of news and information that can empower you to make informed decisions. Welcome to our website, where information becomes knowledge, and knowledge is power.</p>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div>



<div class="modal fade" id="exampleModal-3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  
  <div class="modal-dialog">
<div class="modal-content" style="background-color: #040d1d">
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">Contact</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body " style="color:white">
    goodnews@gmail.com<br/>
    167-169 Great Portland Street<br/>
    London 
    

  </div>
  <!-- <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div> -->
</div>
</div>


</div>
<span class="marquee"
v-for="item in news2"
:key="item"
> <p>
       <span style="font-size:18px;color:white">{{item.title}}{{item.content}}</span> </p>
      </span>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top " >
  <div class="container-fluid">
     <a class="navbar-brand " href="#"><img style="width:70px" src="../../assets/e-good-news-1024x936.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" style="" href="#"><strong>HOME</strong></router-link>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          NEWS
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <!-- <li><router-link to="/News" class="dropdown-item" href="#">GENERAL</router-link></li> -->
          <li><router-link to="/Business" class="dropdown-item" href="#">BUSINESS</router-link></li>
          <li><router-link to="/Tech" class="dropdown-item" href="#">TECHNOLOGY</router-link></li>
         
          <li><router-link to="/Science" class="dropdown-item" href="#">SCIENCE</router-link></li>
          <li><router-link to="/Health" class="dropdown-item" href="#">HEALTH</router-link></li>
          <li><router-link to="/Sport" class="dropdown-item" href="#">SPORT</router-link></li>
          <li><router-link to="/Entertainment" class="dropdown-item" href="#">ENTERTAINMENT</router-link></li>
          
        </ul>
      </li>


      <li class="nav-item">
        <router-link to="/Ico" class="nav-link" href="#">ARTICLES</router-link>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" href="#">FOREX</a>
      </li> -->
       <li class="nav-item ">
        <router-link to="/Crypto" class="nav-link" href="#">
          CRYPTO
        </router-link>
      
      </li>
      <li class="nav-item" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal-2">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          MORE
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><router-link to="/Crypto" class="dropdown-item" >VIDEO</router-link></li>
          <li type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal-3"><a class="dropdown-item" href="#">CONTACT</a></li>
          
          <li><hr class="dropdown-divider"></li>
          <li type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"><a class="dropdown-item" href="#">DONATE</a></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          MORE
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
         <geo/>
        </ul>
      </li>
      <div class="container-fluid">
    <ul class="navbar-nav">
    
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="flag-united-kingdom flag m-0"></i>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="#"
              ><i class="flag-united-kingdom flag"></i>English
              <i class="fa fa-check text-success ms-2"></i
            ></a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
          </li>
          <li>
            <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
       
      </ul>
      <form class="d-flex">
        <input  v-model="searchT" 
       placeholder="Search news" 
       v-on:input="onSearchType"  
       class="form-control me-2 input"  
       aria-label="Search">
       
      </form>
    </div>
  </div>
</nav>
<geo/>
<span class="marquee"
v-for="item in news2"
:key="item"
> <p>
       <span style="font-size:18px;color:white">{{item.title}}{{item.content}}</span> </p>
      </span>
<div class="wrap">
<div class="div "> 
    <button @click="searchClose" class="close"><img style="width:14px" src="../../assets/1486564399-close_81512.png"></button> 
  
  <div v-for="item in news"
  
  :key="item">
  
<ul>
   
 <a class="title" :href="item.url" 
         target="_blank "><li>{{item.title}}</li></a>
        </ul>   
  
  </div> 
  </div>
</div>
<!-- <span class="marquee"
v-for="item in news2"
:key="item"
> <p>
       <span style="font-size:18px;color:white">{{item.title}}{{item.content}}</span> </p>
      </span> -->
<br/><br/><br/>    
  </div>
</template>
<script>
// 1fb27fc9978d48ecadb4bdc77705325e API tech
import geo from "../Geo.vue"
import axios from 'axios';
export default {
  components:{geo},
  data(){
      return{
          news:[],
          searchT:''
      }
  },

methods: {
  onSearchType: function(){

const search = document.querySelector('.div').style.display='block'
//https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?PageSize=100

var url = 'https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&PageSize=100' + '&q=' + this.searchT;
    
      axios
          .get(url)
          .then(response=>{
              this.news = response.data.items
          })
          .catch(error=>{
          console.log(error)
          });
  },
  searchClose(){
    const searchClosed = document.querySelector('.div').style.display='none'
    const searchClosed2 = (document.querySelector(".input").value ='');
  }
},
mounted() {
    axios
      .get(
        "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=1"
      )
      .then((response) => {
        this.news2 = response.data.items;
      })
      .catch((error) => {
        console.log("error");
      });
  },
  
}
</script>
<style lang="scss" scoped>
#exampleModal span{
  color: white;
}
.btn-close{
  background-color: white;
}
.modal-title{
  color: white;
}
.modal-body p{
  color: white;
}
.modal-content{
  background-color: #040d1d;
}
.img-donate{
  margin: 5px;
}
#exampleModal{
background-color: #040d1d;
}
a{
  text-decoration: none;
  color: white;
//   list-style: none;
 }
.close{

position: fixed;
left:230px;
top:90px;
}
.navbar{
   background-color: #040d1d;
}
.div{
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  position: fixed;
  border:2px solid white;
 display: none;
  width: 250px;
  margin-left: px;
  margin-right: 30px;
  // margin-top: 15px;
  border-radius:5px;
  // overflow-y: scroll;
 margin-top: 90px;
  padding: 20px;
  // max-height: calc(100vh - 56px);
  height:515px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color:#040d1d;
    color:rgb(3, 3, 3);
    z-index: 5000;
  //   display: none;
  @media screen and (max-width:767px){
    
    
  }
 }
 .wrap{
  @media screen and (max-width: 767px){
    position: absolute;
    top:0;
    height: 350px;
  }
 }
  // nav{
    
  // min-height: 75rem;
  // padding-top: 4.5rem;

  // }
  .dropdown-menu{
    background-color:#040d1d; 
    color: white;
  }
  .marquee {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(1, 0, 0);
  color: white;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 100000;

  padding: 5px 0;
}

.marquee p {
  display: inline-block;
  padding-left: 100%; /* Push the text off the screen */
  animation: marquee 25s linear infinite; /* Adjust the animation duration as needed */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>