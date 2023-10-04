<template>
  <br/><br/><br/>
  <div>
    <div class="album py-5 ">
      <div class="container">
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
                  <a :href="item.url" target="_blank">{{ item.title }}</a>
                </p>
                <span class="text-success"> {{ item.source_info.name }}</span>
                <div class="d-flex justify-content-between align-items-center">
                 
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
     
     </div>
   
  </div>

   
  </div>
</template>

<script>
import axios from 'axios'; 
export default {

  data() {
        return {
          articles: [],       // Array to store articles
          currentPage: 1,    // Current page number
          totalPages: 1,     // Total number of pages
          rows: 4,          // Number of articles per page
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
        async getData() {
          
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


 




};
</script>
<style scoped>
.page-numbers{
 margin-top: 20px;
 color: white;
}
 .next-bt,.prev-bt{
              margin: 13px;
              /* background-color:white; */
              color: white;
              box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
              border-radius: 2px;
              padding: 7px;
              font-weight: bold;
              
            }
            .next-bt:hover,.prev-bt:hover{
              background-image: linear-gradient(to right,#040d1d, #053684);
              color: white;
              
              
          
            } 
a{
  text-decoration: none;
  color:white;
  font-weight: bold;
}
a:hover{
  text-decoration: underline;
}
.card{
                border: none !important;
                box-shadow: none !important;
            }
            .album,.card{
                background-color: #040d1d;
            } 
</style>
