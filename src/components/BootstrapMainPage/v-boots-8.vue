<template lang="">
    <div class="container">
        <div class="row g-5">
        <div class="col-md-8">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">
            From the Technology
          </h3>
    
          <article class="blog-post"
          v-for="item in articles"
          :key="item"
          >
            <h2 class="blog-post-title"><a :href="item.url" target="_blank">{{item.title}}</a></h2>
           
            <p>{{item.description}}</p>
            <hr>
            
            
            
            
            
           
          </article>
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
      rows: 24,
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
      const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 24;

      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
</style>