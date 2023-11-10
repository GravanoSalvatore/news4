<template>
      <div id="top"></div>
   
   <div>







     <div class="album py-5 bg-light">
       <div class="container">
         <h3>BTC & ETH news</h3><hr/>
       
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
           <div
             class="col"
             v-for="item in  paginatedArticles"
             :key="item.id"
           >
             <div class="card shadow-sm">
               <img
                 class="bd-placeholder-img card-img-top"
                 :src="item.imageurl"
                 width="300"
                 height="180"
               >
               <div class="card-body">
                 <p class="card-text">
                   <a :href="item.url" target="_blank">{{ item.title }}</a><br/>
                
           </p>
           <div class="body"><a :href="item.url"  target="_blanck">{{ item.body }}</a></div>
         <div class="d-flex justify-content-between align-items-center">
                  
                 </div>
               </div>
              <div class="container mt-1">
              <img style="width:30px" :src="item.source_info.img"/>
               <span class="text-success"> {{ item.source_info.name }}</span>
               <p style="font-size:10px" class="text-secondary "> {{ item.categories }}</p>
              </div>
               <p></p>

              </div>
           </div>
         </div>
         <div class="pagination">
                 <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
                 <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
                 <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
               </div>
      
      </div>
    
   </div>
 
    
   </div>
 </template>
 
 <script>
 import axios from 'axios'; 
 export default {
 
   data() {
         return {
           articles: [],       
           currentPage: 1,   
           totalPages: 1,     
           rows: 12,          
         };
       },
       computed: {
         paginatedArticles() {
           
           const start = (this.currentPage - 1) * this.rows;
           const end = start + this.rows;
           return this.articles.slice(start, end);
         },
       },
       methods: {
        scrollToTop(){
          const top = document.getElementById('top');
          if (top){
            top.scrollIntoView({ behavior: 'smooth' });
          }
        }
,         async getData() {
           
           // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
         
           const pageSize = 100;
           
           try {
             const response = await fetch(
               'https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining'
             );
             const data = await response.json();
             return data.Data;
           } catch (error) {
             console.error('Error fetching news:', error);
             return [];
           }
         },
         async fetchNews() {
           
           const articles = await this.getData();
           this.articles = articles;
           this.totalPages = Math.ceil(articles.length / this.rows);
         },
         nextPage() {
           
           if (this.currentPage < this.totalPages) {
             this.currentPage++;
             this.scrollToTop()
           }
         },
         prevPage() {
           
           if (this.currentPage > 1) {
             this.currentPage--;
             this.scrollToTop()
           }
         },
       },
       mounted() {
        
         this.fetchNews();
       },
 
 
  
 
 
 
 
 };
 </script>
 <style scoped>
 .card-body{
    overflow-x: hidden;
    overflow-y: auto;
     height: 250px;
  }
 .card-text{
  font-size:18px
 }
 .body{
  height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
 }
 h3{
   font-weight: bold;
   font-size: 28px;
 }
 .page-numbers{
  margin-top: 20px;
  font-size: 10px;
}
  .next-bt,.prev-bt{
               font-size:10px;
               margin: 13px;
               background-color:white;
               /* color: rgb(248, 2, 2);
               box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
               border-radius: 2px; */
               padding: 7px;
               font-weight: bold;
               
  }
 a{
   text-decoration: none;
   color:black;
   font-weight: bold;
 }
 a:hover{
   text-decoration: underline;
 }
 .card{
                 border: none !important;
                 box-shadow: none !important;
             }
             .album{
                 background-color: transparent !important;
             } 
 </style>
 