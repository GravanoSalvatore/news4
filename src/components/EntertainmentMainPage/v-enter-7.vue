<template lang="">
  

    <main>
    
       
      <div class="container marketing">
    
        
        
       
    
       
    
        <div class="row featurette"
        v-for="item in paginatedArticles"
       :key="item"
        >
          
          <div class="col-md-8">
    
           
            <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
            v-if="item.urlToImage"
            :src='item.urlToImage'
            width="800" 
            height="500" 
        
            role="img" aria-label="Placeholder: 500x500" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <img v-else src="../../assets/news.jpeg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="800" 
            height="500" 
        
            role="img" aria-label="Placeholder: 500x500" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <!-- <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"/> -->
           
        
    
          </div>
       
       
    
          <div class="col-md-4">
            <h2 class="featurette-heading"> <a :href="item.url" target="_blank">{{item.title}}</a><span class="text-muted"></span></h2>
            <p class="lead"><strong>{{item.description}}</strong></p>
  
            <u><strong style="font-family:gotic">
                      
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
          </div>
    
       </div>
       <!-- <div class="pagination">
                <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
                <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
                <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
              </div> -->
       
    
      </div>
    
    
      
      
    </main>
    
    
    </template>
    <script>
     import searchGrid from '@/views/Select-3-grid.vue'
    import search2 from '@/views/Select-3.vue'
    export default {
      components:{
     searchGrid,
    search2
      },
      data() {
        return {
          articles: [],       
          currentPage: 1,    
          totalPages: 1,     
          rows: 3,          
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
         
          //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
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
          }
        },
        prevPage() {
          
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
      },
      mounted() {
        
        this.fetchNews();
      },
    };
    </script>
    <style lang="scss" scoped>
    u{
      text-decoration: none;
    }
    img{
        margin: 10px;
    }
        .next-bt,.prev-bt{
              margin: 13px;
              // background-color:white;
              color: rgb(49, 45, 45);
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
            a{
    text-decoration: none;
    color: black;
  }
  a:hover{
    text-decoration: underline;
  }
  span{
  margin-top: 20px;
  }
    </style>