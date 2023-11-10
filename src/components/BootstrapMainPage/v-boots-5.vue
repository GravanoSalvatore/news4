<template lang="">
    <main class="container">
        <div class="row"
   
    >
      <div class="col-lg-3"
      v-for='item,index in  paginatedArticles.slice(14)'
    :key='index'>
        <img v-if="item.urlToImage" :src="item.urlToImage" class="bd-placeholder-img " width="220" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
        <img v-else src="../../assets//news.jpeg" class="bd-placeholder-img rounded-circle" width="220" height="220"  role="img" focusable="false">

        <h4><a :href="item.url" target="_blank"><strong class="text-danger">{{item.title}}</strong></a></h4>
       
      </div>
      <br/>
      <!-- <div class="pagination">
            <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
            <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          </div>
          -->
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
      rows: 37,
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

      // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 100;

      try {
        const response = await fetch(
          //`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
.bd-placeholder-img {
  @media screen and (max-width: 250px) {
    width: 150px;
    height: 150px;
  }
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

a {
  text-decoration: none;
  color: rgb(1, 1, 1);
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

span {
  margin-top: 20px;
}</style>