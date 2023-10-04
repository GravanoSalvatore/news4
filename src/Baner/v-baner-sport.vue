<template lang="">
    <div>
        <div class="baner">


<img src="../assets/AdobeStock_286933595-Blog-Sport1-2000x936.jpeg"  class="baner-img">

<div class="container-content">
   
   <div class="content" v-for="article in paginatedArticles" :key="article.title">
     <img class="img" v-if="article.urlToImage" :src="article.urlToImage">
 <img  class="img" v-else src="../assets/sport.jpeg">
 
     <p class="title"><a class="link" :href="article.url" target="_blank">{{ article.title }}</a></p>
   </div>
 </div>
 <!-- <button class="bt" >VISIT TO FOREX</button> -->
 <div class="pagination">
    <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span class="page-numbers" style="color:white">{{ currentPage }} / {{ totalPages }}</span>
    <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>
</div>
  




    </div>
</template>
<script>
export default {
    data() {
    return {
      articles: [],       // Array to store articles
      currentPage: 1,    // Current page number
      totalPages: 1,     // Total number of pages
      rows: 4,          // Number of articles per page
    };
  },
  computed: {
    paginatedArticles() {
      // Calculate the range of articles to display on the current page
      const start = (this.currentPage - 1) * this.rows;
      const end = start + this.rows;
      return this.articles.slice(start, end);
    },
  },
  methods: {
    async getData() {
      // Fetch articles from the News API
      const apiKey = 'd205e0353aed4e42b97d11c1a88207f0';
      const pageSize = 100;
      
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
        );
        const data = await response.json();
        return data.articles;
      } catch (error) {
        console.error('Error fetching news:', error);
        return [];
      }
    },
    async fetchNews() {
      // Fetch news and update component data
      const articles = await this.getData();
      this.articles = articles;
      this.totalPages = Math.ceil(articles.length / this.rows);
    },
    nextPage() {
      // Go to the next page
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      // Go to the previous page
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    // Fetch news data when the component is mounted
    this.fetchNews();
  },
}
</script>
<style lang="scss" scoped>
.bt{
  position: absolute;
  top:460px;
  background-color:white;
    
    border-radius: 12px;
    padding: 7px;
    font-weight: bold;
    background-image: linear-gradient(to right,#040d1d, #053684);
    color: white;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  right: 810px;
}
.title{
//   background-color: white;
}
.content{
  // border:2px solid grey;
  margin: 10px;
//   background-color: white;
  padding: 15px;
  // opacity: 0.7;
  // z-index: 1;
}
.content:hover{
  opacity: 1;
}
.baner{
  position: relative;
  
}
.baner-img{
  width: 1300px;
  height: 750px;
  background-image: url('https://img.championat.com/s/735x490/news/big/l/w/skvosh-triatlon-zorbing-chto-vybrat-v-2019_15488563261718964122.jpg');
}
.pagination{
  position: absolute;
  top:640px;
  left: 805px;

}

.container-content{
  display: grid;
 grid-template-columns: repeat(2,1fr);
  
  position: absolute;
  bottom:110px;
  left:570px;
 
}
.img{
  width: 285px;
  height: 165px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: px;
  opacity: 1;
}
.img:hover{
  opacity: 1;
}
.next-bt,.prev-bt{
    margin: 13px;
    // background-color:white;
    border:2px solid #01bba8;
    border-radius: 2px;
    padding: 7px;
    font-weight: bold;
    background-image: linear-gradient(to right,#040d1d, #053684);
    color: white;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  }
  .next-bt:hover{
    // background-image: linear-gradient(to right,#040d1d, #053684);
    // color: white;
    color: #01bba8;
   
  }
  .prev-bt:hover{

// background-image: linear-gradient(to right,#040d1d, #053684);
//     color: white;
    color: rgb(242, 47, 8);
   
  }
  .wrap{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
  }
  .link,.title{
    text-decoration: none;
    color: white;
    width: 280px;
    font-size: 17px;
    font-weight: bold;
    
  }
  .link:hover{
    text-decoration: underline;
  }

    
</style>