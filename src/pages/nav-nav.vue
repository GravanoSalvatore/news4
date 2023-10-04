<template lang="">
    <main class="container">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      
      
      
            <div class="col" 
            v-for="item in paginatedArticles"
            :key="item"
            >
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{ 'background-image': 'url(' + item.urlToImage + ')' }">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{item.title}}</h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                
              </li>
              <li class="d-flex align-items-center me-3">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"/></svg>
                
              </li>
              <li class="d-flex align-items-center">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"/></svg>
               
              </li>
            </ul>
          </div>
        </div>
      </div>

     
        <div class="pagination">
            <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
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
    .page-numbers{
  margin-top: 20px;
}
a{
  text-decoration: none;
  color: black;
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
        .pagination{
        //   margin-left:100px;
        }











.card {
  position: relative;
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: brightness(0.5); /* Adjust the brightness value to control the darkness */
  z-index: 1;
}

.card .d-flex {
  position: relative;
  z-index: 2;
}

.card .d-flex h2 {
  color: #fff; /* Set the color for the bright h2 title */
}
</style>
