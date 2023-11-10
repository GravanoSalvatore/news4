<template lang="">
    <div>
      <br/><br/>
      <main class="my-5">
      <div class="container">
       
        <div class="row">
          
          <div class="col-md-9 mb-4" 
        
          >
           
            <section>
              
              <div class="row"  v-for="item in articles"
        :key="item">
                <div class="col-md-4 mb-4">
                  <div class="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light"
                  
                 >
                    <img v-if="item.urlToImage" :src="item.urlToImage" class="img-fluid "  />
                   <img v-else src='https://greatpeopleinside.com/no/wp-content/uploads/2017/05/HR-GR8-technology.jpg' class="img-fluid ">
                    <a href="#!">
                      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                  </div>
                </div>
  
                <div class="col-md-8 mb-4">
                  <h5><a :href="item.url" target="_blanck">{{item.title}}</a></h5>
                  <p>
                    <u><strong style="font-family:gotic"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg>                    <span style="font-size:8px">{{item.author}}</span></strong></u><br/>
                      <span class="text-body" href=""><small> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg> {{ formatDateTime(item.publishedAt) }}</small></span>
                  </p>
  
                
                </div>
              </div>
  
              
              
            </section>
           
          </div>
         
    <div class="col-md-3 mb-4">
          
            <section class="sticky-top" style="top: 80px;">
            
              <section class="text-center border-bottom pb-4 mb-4">
                <div class="bg-image hover-overlay ripple mb-4">
                  <br/><br/>
                  <img
                    src="https://greatpeopleinside.com/no/wp-content/uploads/2017/05/HR-GR8-technology.jpg"
                    class="img-fluid" />
                  <a href="" target="_blank">
                    <div class="mask" style="background-color: rgba(57, 192, 237, 0.2);"></div>
                  </a>
                </div>
                <h2><strong>Forex market</strong></h2>
  
                <p><strong>Forex is the largest financial market in the world, its turnover significantly exceeds that of the stock and other markets; In this regard, there is high liquidity in Forex, and this market attracts many traders, both beginners and professionals.</strong></p>
                  
                <!-- <a role="button" class="btn btn-primary" href="https://mdbootstrap.com/docs/standard/"
                  target="_blank">GO</a> -->
              </section>
             
              <section class="text-center">
                <!-- <i style="color: #f92601;" class="fa-thin fa-beat-fade" >LIVE</i> -->
  
               
              </section>
             
            </section>
            
          </div>
        </div>
      
  
        
      </div>
    </main>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        articles: [],
        currentPage: 1,
        totalPages: 1,
        rows: 15,
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
        const pageSize = 15;
  
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${pageSize}`
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
     
    },
    mounted() {
  
      this.fetchNews();
    },
  }
  </script>
  <style lang="scss" scoped>
  a{
    text-decoration: none;
    color:black
  
  }
  a:hover{
  text-decoration: underline;
  }
  u{
    text-decoration: none;
  }
  .video {
    // @media screen and (max-width: 1105px) {
    //   display: none;
    // }
  
    // @media screen and (max-width: 767px) {
    //   display: block;
    // }
  
    @media screen and (max-width: 320px) {
      width: 250px;
    }
  
    @media screen and (max-width: 280px) {
      width: 200px;
    }
  }
  </style>