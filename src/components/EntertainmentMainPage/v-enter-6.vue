<template lang="">
    <div id="top-of-page"></div>
   <br/><br/>    <br/><br/>
   <div>
      
      
   
   
     <div class="album py-5 bg-light">
       <div class="container">
   
         <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
           <div class="col" 
           v-for="item in paginatedArticles"
           :key="item"
           >
             <div class="card shadow-sm" >
               <img class="bd-placeholder-img card-img-top" 
               v-if="item.urlToImage"
               :src='item.urlToImage'
               width="320"
                height="180" >
                
                <img v-else src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1611723380/1611723379.jpg" class="bd-placeholder-img card-img-top" >
   
               <div class="card-body">
                 <p class="card-text"><a :href="item.url" target="_blank">{{item.title}}</a></p>
                
                 <u><strong style="font-family:gotic;font-size:10px">
                     
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
 <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
 <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
 </svg>
                     
                     
 <span style="font-size:8px">{{item.author}}</span></strong></u><br/>
                   <span class="text-body" href=""><small>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-calendar3" viewBox="0 0 16 16">
 <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
 <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
 </svg> <span class="text-black">{{ formatDateTime(item.publishedAt) }}</span></small></span>
                 <div class="d-flex justify-content-between align-items-center">
                   
                  
                 </div>
               </div>
             </div>
           </div>
           
         </div>
       </div>
     </div>
   
   
   
   
     <div class="pagination">
               <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
               <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
               <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
             </div>
  
  
  
             <br/><br/>
   </div>
 </template>
 <script>
 export default {
   data() {
       return {
         articles: [],       
         currentPage: 1,    
         totalPages: 1,     
         rows: 16,          
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
       scrollToTop() {
   
   const element = document.getElementById('top-of-page');
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
   }
 },
       formatDateTime(dateTime) {
       const options = {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
       }
       return new Date(dateTime).toLocaleString(undefined, options); 
       
 },
       async getData() {
         
        // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
       // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
         const pageSize = 100;
         
         try {
           const response = await fetch(
             `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=${pageSize}`
            // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
           );
           const data = await response.json();
           return data.items;
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
           this.scrollToTop();
         }
       },
       prevPage() {
         
         if (this.currentPage > 1) {
           this.currentPage--;
           this.scrollToTop();
         }
       },
     },
     mounted() {
      
       this.fetchNews();
     },
 }
 </script>
 <style lang="scss" scoped>
 u{
 text-decoration: none;
 }
 .pagination{
   font-size:10px;
   margin-left: 80px;
   @media screen and (max-width: 280px){
     margin-left: 30px;
   }
 }
   .page-numbers{
     margin-top: 20px;
   }
   a{
     text-decoration: none;
     color: black;
     font-weight: bold;
   }
     a:hover{
       text-decoration: underline;
     } 
     .next-bt,.prev-bt{
             margin: 13px;
             // background-color:white;
             // color: rgb(248, 2, 2);
             // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
             border-radius: 2px;
             padding: 7px;
             font-weight: bold;
             
           }
           .next-bt:hover{
             
             color: rgb(1, 101, 31);
              } 
              .prev-bt:hover{
               color: red;
 
              }
           .card{
               border: none !important;
               box-shadow: none !important;
           }
           .album{
               background-color: transparent !important;
           }
   </style>