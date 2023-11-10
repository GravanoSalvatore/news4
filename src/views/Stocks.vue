<template lang="">
  <div>
    

    <main class="my-5">
  <div class="container">
    <section>
      <div class="row gx-lg-5" 
      
      >
      
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0"
        
        v-for="item in articles"
      :key="item">
         
          <div>
            
            <div class="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4" data-mdb-ripple-color="light"
         
            >
              <img v-if="item.urlToImage" :src="item.urlToImage" class="img-fluid" />
              <img v-else src="../assets//news.jpeg" class="img-fluid" />
              
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>

            
            <div class="row mb-3">
              <div class="col-6">
                <!-- <a href="" class="text-info"> -->
                  <!-- <i class="fas fa-plane"></i>
                 General -->
                
                <!-- </a> -->
              </div>

              <!-- <div class="col-6 text-end">
                <u> {{item.publishedAt}}</u>
              </div> -->
            </div>
            
            <a href="" class="text-dark">
              <h5><strong><a :href="item.url" target="_blanck">{{item.title}}</a></strong></h5>

             
              <p>{{item.content}}</p>
            </a>
                   
            <u><strong style="font-family:gotic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>{{item.author}}</strong></u><br/>
                    <span class="text-body" href=""><small> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> {{ formatDateTime(item.publishedAt) }}</small></span>
            <hr />

          </div>
         
        </div>
</div>
    </section>
   
    
  </div>
</main>

<main class="my-5">
    <div class="container">
     
      <!-- <h4 class="mb-5"><strong>Latest posts</strong></h4> -->
      <section class="text-center"
     
      >
       

        <div class="row"
       
        >
          <div class="col-lg-6 mb-4"  v-for="item in articles2"
      :key="item">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img v-if="item.urlToImage" :src="item.urlToImage"  class="img-fluid img" />

                <img v-else src="../assets//news.jpeg"  class="img-fluid img" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title"><strong><a :href="item.url" target="_blanck">{{item.title}}nn</a></strong></h5>
                <p class="card-text">
                  <u><strong style="font-family:gotic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>{{item.author}}</strong></u><br/>
                    <span class="text-body" href=""><small> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> {{ formatDateTime(item.publishedAt) }}</small></span></p>
                
               
              </div>
            </div>
          </div>

        
        </div>

       
      </section>
     
    </div>
  </main>
 

<hr/>
  <ai/>
  
 
 

    
  </div>
</template>
<script>
import ai from './Ai.vue'
export default {
  components:{
ai
  },
  data() {
    return {
      articles: [],
      articles2: [],
      currentPage: 1,
      totalPages: 1,
      rows: 6,
    };
  },
  computed: {
    // paginatedArticles() {

    //   const start = (this.currentPage - 1) * this.rows;
    //   const end = start + this.rows;
    //   return this.articles.slice(start, end);
    // },
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

      //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
      // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e'
      const pageSize = 21;

      try {
        const response = await fetch(
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=11&Language=14&Page=1&PageSize=${pageSize}`
          //`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
      // this.totalPages = Math.ceil(articles.length / this.rows);
    },




    async getData2() {

//const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
// const apiKey = '1fb27fc9978d48ecadb4bdc77705325e'
const pageSize = 10;

try {
  const response = await fetch(
    `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Language=14&Page=1&PageSize=${pageSize}`
    //`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
  );
  const data = await response.json();
  return data.items;
} catch (error) {
  console.error('Error fetching news:', error);
  return [];
}
},
async fetchNews2() {

const articles = await this.getData2();
this.articles2 = articles;
// this.totalPages = Math.ceil(articles.length / this.rows);
},
    // nextPage() {
    //  
    //   if (this.currentPage < this.totalPages) {
    //     this.currentPage++;
    //   }
    // },
    // prevPage() {
    //  
    //   if (this.currentPage > 1) {
    //     this.currentPage--;
    //   }
    // },
  },
  mounted() {

    this.fetchNews();
    this.fetchNews2();
  },
}
</script>
<style lang="scss" scoped>
a{
  color: black;
}
a:hover{
  text-decoration: underline;
}
u,a{
  text-decoration: none;
}
.card {
  border: none !important;
  box-shadow: none !important;
}

.album {
  background-color: transparent !important;
}


.img{
  max-height: 300px;
}
a {
  text-decoration: none;
}

#intro {
  /* Margin to fix overlapping fixed navbar */
  margin-top: 58px;
}

@media (max-width: 991px) {
  #intro {
    /* Margin to fix overlapping fixed navbar */
    margin-top: 45px;
  }
}


</style>