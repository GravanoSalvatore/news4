<template lang="">
    
       

<main class="container">
  
    

  

  

 

  <div class="d-md-flex flex-md-equal  my-md-3 ps-md-3 ">
    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden col-4"
    v-for="item in articles"
      :key="item">
     
     
        <div class="my-3 p-3" 
      
      >
        <h5 class=""><a :href="item.url" target="_blank">{{item.title}}</a></h5>
        
      </div>
     
     
      <div ><img class="bd-placeholder-img card-img-top" 
                
                :src='item.urlToImage'
                width="100%"
                 height="180"></div>
    </div>
    
  </div>
</main> 
    
</template>
<script>
export default {
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
    async getData() {

      // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
      const pageSize = 3;

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

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>