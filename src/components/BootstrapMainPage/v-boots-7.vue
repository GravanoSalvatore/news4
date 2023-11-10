<template lang="">
    <div class="container">
      <hr style="height:2px" />
        <div class="row mb-2" 
        
        >
        <div class="col-md-6"
        v-for="item in articles"
        :key="item"
        >
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h5 class="mb-0"><strong> <a :href="item.url" target="_blank" class="stretched-link">{{item.title}}nnnnnn</a></strong></h5>
              <u><strong style="font-family:gotic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>{{item.author}}</strong></u><br/>
                    <span class="text-body" href=""><small> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> {{ formatDateTime(item.publishedAt) }}</small></span>
                   
            </div>
            <div class="col-auto d-none d-lg-block">
              <img class="bd-placeholder-img" 
              v-if="item.urlToImage"
              :src="item.urlToImage" 
              width="220" 
              height="140"  
              role="img" 
              aria-label="Placeholder: Thumbnail" 
              preserveAspectRatio="xMidYMid slice" 
              focusable="false">
             
              <img v-else src="../../assets/news.jpeg" class="bd-placeholder-img">
            </div>
          </div>
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
      rows: 12,
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
      const pageSize = 8;

      try {
        const response = await fetch(
          // `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=${pageSize}`
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
u{
  text-decoration: none;
}
a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.rounded {
  border: none !important;
  box-shadow: none !important;
}

.album {
  background-color: transparent !important;
}

.d-none {
  display: block !important;

  @media screen and(max-width: 991px) {
    display: none !important;
  }

}

p {
  @media screen and(max-width: 1200px) {
    display: none;
  }

  @media screen and(max-width: 991px) {
    display: block;
  }
}</style>