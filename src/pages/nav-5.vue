<template lang="">
    <div class="container">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3" 
        
        >


<div class="col d-flex align-items-start" 
v-for="item in paginatedArticles"
        :key="item">
  <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
    <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg>
  </div>
  <div>
    <h2>{{item.title}}</h2>
    <p>{{item.description}}</p>
   
  </div>
</div>

</div>

<div class="pagination">
            <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
 
    </div>
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
      articles: [],       // Array to store articles
      currentPage: 1,    // Current page number
      totalPages: 1,     // Total number of pages
      rows: 6,          // Number of articles per page
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
      const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
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
};
</script>
<style lang="scss" scoped>
img{
    margin: 10px;
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
</style>