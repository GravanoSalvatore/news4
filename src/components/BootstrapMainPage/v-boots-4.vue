<template lang="">
    <main class="container">
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      
      
      
            <div class="col h-20" 
            v-for="item in paginatedArticles"
            :key="item"
            >
        <div class="card card-cover h-20 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        v-if="item.urlToImage" :style="{ 'background-image': 'url(' + item.urlToImage + ')' }">
        
        <div class="d-flex flex-column h-20 p-5 pb-3 text-white text-shadow-1">
            <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold h2">
              <a :href="item.url" target="_blank">{{item.title}}</a></h2>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                
              </li>
             
            </ul>
          </div>
        </div>
        <div v-else   style="background-image:url('https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg') " class="card card-cover h-20 overflow-hidden text-white bg-dark rounded-5 shadow-lg"></div>
       
      </div>

     
        <!-- <div class="pagination">
            <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div> -->
    </div>
</main>

   
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
      rows: 6,
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
      //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 100;

      try {
        const response = await fetch(
          // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
.h2{
  position: absolute;
  top:0
}
.page-numbers {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
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









a {
  text-decoration: none;
  color: rgb(246, 243, 243);
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}


.card {
  position: relative;
  filter: brightness(50%);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: brightness(0.5);
  /* Adjust the brightness value to control the darkness */
  z-index: 1;
}

.card .d-flex {
  position: relative;
  z-index: 2;
}

.card .d-flex h2 {
  color: #fff;
  /* Set the color for the bright h2 title */
}

h2 {
  position: relative;
  z-index: 3;
}
</style>
