<template lang="">
    <div class="container">
        <div class="p-4 p-md-5 mb-4 text-white rounded "
      :style="{ 'background-image': 'url(' + item.urlToImage + ')' }"
      v-for="item in articles"
      :key="item"
      >
        <div class="col-md-6 px-0"  >
          <h1 class="display-4 fst-italic"><a :href="item.url" target="_blank">{{item.title}}</a></h1>
          <p class="lead my-3">{{item.description}}</p>
        
        </div>
      </div>
     
    </div>
</template>
<script>
export default {
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

      // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 1;

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
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

h1 {
  position: absolute;
  bottom: 100px;

}

.p-4 {
  filter: brightness(50%);

}</style>