<template lang="">
  

    <main class="">
      
       
       <div class="row g-5">
        <div class="col-md-8">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">
          
          </h3>
    
         <boots8/>
     
         
         <nav class="blog-pagination" aria-label="Pagination">
        <a class="" href="#">Back up</a>
       </nav>
          
    
        </div>
    
        <div class="col-md-4">
          <div class="position-sticky" style="top: 5rem;">
            
    <boots9/>
            <div class="p-4">
              <h4 class="fst-italic"><strong>SOURCE</strong></h4>
              <ol class="list-unstyled mb-0">
                <li><a href="#">BUSINESS</a></li>
                <li><a href="#">TECHNOLOGY</a></li>
                <li><a href="#">CRYPTO</a></li>
                <li><a href="#">SCIENCE</a></li>
                <li><a href="#">HEALTH</a></li>
                <li><a href="#">SPORT</a></li>
                <li><a href="#">ENTERTAINMENT</a></li>
                <li><a href="#">VIDEO</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">DONATE</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">FOREX</a></li>
                <li><a href="#">LOGIN</a></li>
                <li><a href="#">ARTICLES</a></li>
                <li><a href="#">BBC</a></li>
                <li><a href="#">CBC</a></li>
                <li><a href="#">NBS</a></li>
                <li><a href="#">ABC</a></li>
                
              </ol>
            </div>
    
            <div class="p-4">
              <h4 class="fst-italic">Elsewhere</h4>
              <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div> 
        </div>
      </div> 
    
    </main>
    
    
    
    </template>
<script>
import boots8 from '../../components/BootstrapMainPage/v-boots-8.vue'
import boots9 from '../../components/BootstrapMainPage/v-boots-9.vue'
import searchGrid from '@/views/Select-3-grid.vue'
import search2 from '@/views/Select-3.vue'
export default {
  components: {
    searchGrid,
    search2,
    boots8,
    boots9
  },
  data() {
    return {
      articles: [],
      currentPage: 1,
      totalPages: 1,
      rows: 1,
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

      //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 1;

      try {
        const response = await fetch(
          //`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=${pageSize}`
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
a {
  text-decoration: none;
  color: rgb(250, 249, 249);
}

img {
  margin: 10px;
}

.next-bt,
.prev-bt {
  margin: 13px;
  background-color: white;
  color: rgb(248, 2, 2);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 2px;
  padding: 7px;
  font-weight: bold;

}

.next-bt:hover,
.prev-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;



}

.rounded {
  filter: brightness(50%);
}

.row {
  background-color: #040d1d;
  color: white;
}</style>