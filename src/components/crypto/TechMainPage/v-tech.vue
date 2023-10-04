<template lang="">
    <div>
        <!-- <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Business News</h1>
            <hr/>
          </div>
        </div>
      </section>
     -->
    
    
    
      <div class="album py-5 bg-light">
        <div class="container">
    
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div class="col" 
            v-for="item in paginatedArticles"
            :key="item"
            >
              <div class="card shadow-sm" >
                <img class="bd-placeholder-img card-img-top" 
                
                :src='item.urlToImage'
                width="320"
                 height="180" >
                 
                
    
                <div class="card-body">
                  <p class="card-text"><a :href="item.url" target="_blank">{{item.title}}</a></p>
                  <div class="d-flex justify-content-between align-items-center">
                    
                   
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    
    
    
    
      <div class="pagination">
                <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
                <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
                <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
              </div>
    <br/><br/>
    </div>
</template>
<script>
export default {
    data() {
        return {
          articles: [],       // Array to store articles
          currentPage: 1,    // Current page number
          totalPages: 1,     // Total number of pages
          rows: 36,          // Number of articles per page
        };
      },
      computed: {
        paginatedArticles() {
          // Calculate the range of articles to display on the current page
          const start = (this.currentPage - 1) * this.rows;
          const end = start + this.rows;
          return this.articles.slice(start, end);
        },
      },
      methods: {
        async getData() {
          // Fetch articles from the News API
          const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
         // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
          const pageSize = 100;
          
          try {
            const response = await fetch(
              `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
            );
            const data = await response.json();
            return data.articles;
          } catch (error) {
            console.error('Error fetching news:', error);
            return [];
          }
        },
        async fetchNews() {
          // Fetch news and update component data
          const articles = await this.getData();
          this.articles = articles;
          this.totalPages = Math.ceil(articles.length / this.rows);
        },
        nextPage() {
          // Go to the next page
          if (this.currentPage < this.totalPages) {
            this.currentPage++;
          }
        },
        prevPage() {
          // Go to the previous page
          if (this.currentPage > 1) {
            this.currentPage--;
          }
        },
      },
      mounted() {
        // Fetch news data when the component is mounted
        this.fetchNews();
      },
}
</script>
<style lang="scss" scoped>
.pagination{
    margin-left: 80px;
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
              background-color:white;
              color: rgb(248, 2, 2);
              box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
              border-radius: 2px;
              padding: 7px;
              font-weight: bold;
              
            }
            .next-bt:hover,.prev-bt:hover{
              background-image: linear-gradient(to right,#040d1d, #053684);
              color: white;
              
              
          
            } 
            .card{
                border: none !important;
                box-shadow: none !important;
            }
            .album{
                background-color: transparent !important;
            }
    </style>