<template lang="">
    <div class="container" style="background-color:#040d1d;color:white">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3" 
        
        >


<div class="col d-flex align-items-start" 
v-for="(item,inde) in articles.slice(7)"
        :key="index">
  <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
    <!-- <img   :src="item.urlToImage" width="10em" height="10em"> -->
  </div>
  <div>
    <h2><a :href="item.url" target="_blank">{{item.title}}</a></h2>
    <!-- <p><strong>{{item.description}}</strong></p> -->
    <img class="bd-placeholder-img card-img-top" 
                v-if="item.urlToImage"
                :src='item.urlToImage'
                >
                 
                 <img class="bd-placeholder-img card-img-top" 
                 v-else src="../../assets/news.jpeg">
    
                       <u><strong style="font-family:gotic">
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
                      
                      
                      {{item.author}}</strong></u><br/>
                    <span class="text-body" href=""><small>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <span class="text-white">{{ formatDateTime(item.publishedAt) }}</span></small></span>
                    
                  

   
  </div>
</div>

</div>

<!-- <div class="pagination">
            <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div> -->
 
    </div>
</template>
<script>
import searchGrid from '@/views/Select-3-grid.vue'
import search2 from '@/views/Select-3.vue'
export default {
  components: {
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

      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      const pageSize = 10;

      try {
        const response = await fetch(
          // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
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
h2{
    overflow-x: hidden;
    overflow-y: auto;
     height: 150px;
  }
u{
  text-decoration: none;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
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



}</style>