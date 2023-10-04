<template lang="">
  <!-- <header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg> -->
        <!-- <strong>Album</strong> -->
     <!-- </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header> -->

<main class="container">

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Business News</h1>
        
      </div>
    </div>
  </section>




  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" 
        v-for="item in paginatedArticles"
        :key="item"
        >
          <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" 
            :src='item.urlToImage'
            width="100%"
             height="225" 
             xmlns="http://www.w3.org/2000/svg" 
             role="img" 
             aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice" 
              focusable="false"><title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c"/>
              <!-- <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> -->
            

            <div class="card-body">
              <p class="card-text"><a :href="item.url" target="_blank">{{item.title}}</a></p>
              <div class="d-flex justify-content-between align-items-center">
                
                <small class="text-muted">{{item.name}}</small>
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
          <v-nav-5/>
<br/><br/>
         
         
          
</main>
<br/><br/>
<v-nav-3/>
<br/><br/>
<v-nav-nav/>
<br/><br/>
<v-nav-4/>

<v-nav-6/>



</template>
<script>
import vNav6 from '../pages/nav-6.vue'
import vNav5 from '../pages/nav-5.vue'
import vNav4 from '../pages/nav-4.vue'
import vNav3 from '../pages/nav-3.vue'
import vNavNav from '../pages/nav-nav.vue'
 import searchGrid from '@/views/Select-3-grid.vue'
import search2 from '@/views/Select-3.vue'
export default {
  components:{
 searchGrid,
search2,
vNavNav,
vNav3,
vNav4,
vNav5,
vNav6
  },
  data() {
    return {
      articles: [],       // Array to store articles
      currentPage: 1,    // Current page number
      totalPages: 1,     // Total number of pages
      rows: 12,          // Number of articles per page
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
        .card{
          box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
        }
</style>