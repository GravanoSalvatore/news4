<template lang="">
    <div>
        <div class="baner">


<img src="../assets/GettyImages-147851475-2b705c61501e4776a92cdb3a69fd129c.jpg" class="baner-img">

<div class="container-content">
   
   <div class="content" v-for="article in paginatedArticles" :key="article.title">
     <img class="img" v-if="article.urlToImage" :src="article.urlToImage">
 <img  class="img" v-else src="../assets/ScienceNews-Logo-Square.png">
 
     <p class="title"><a class="link" :href="article.url" target="_blank">{{ article.title }}</a></p>
   </div>
 </div>
 <!-- <button class="bt" >visit to  FOREX</button> -->
 <router-link class="router-link" to="/Science"><button class="businessH">Science</button></router-link>
 <div class="pagination">
    <button class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
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
      rows: 3,          // Number of articles per page
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
          `https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
.businessH{
  position: absolute;
  bottom: 30px;
  color: white;
  font-size: 40px;
  left: 40px;
   background-color: #040d1d;
  width: 250px;
    text-align: center;
   
}
.businessH:hover{
  background-color: #193361;
}
h3{
  position: absolute;
  bottom: 50px;
  color: white;
  font-size: 40px;
  left: 40px;
}
.bt{
    border: 2px solid #01bba8;
  position: absolute;
  top:370px;
  
//   background-color:white;
  right: 1130px;
    border-radius: 12px;
    padding: 5px;
    font-weight: bold;
    // background-image: linear-gradient(to right,#040d1d, #053684);
    // color: white;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  color: white;
}
.title{
  // background-color: white;
}
.content{
  margin-top: 30px;
  // border:2px solid grey;
  margin: 10px;
// background-color: #040d1d;
  padding: 15px;
  // opacity: 0.7;
  // z-index: 1;
}
.content:hover{
  opacity: 1;
}
.baner{
  position: relative;
  top:0px;
}
.baner-img{
  width: 1300px;
  height: 440px;
}
.pagination{
  position: absolute;
  top:350px;
  left: 1050px;

}
//  .grid-search{
//     display: grid;
//     grid-template-columns: 700px 500px;
//     padding-left: 20px;
//     padding-right: 20px;
//   }
// h2{
//   font-size: 33px;
//   margin-left: 0px;
// }
.container-content{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  
  position: absolute;
  top:0px;
  left:0px;
 bottom: 300px;
}
.img{
  width: 377px;
  height: 205px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: px;
  opacity: 1;
}
.img:hover{
  opacity: 1;
}
.page-numbers{
   
    color: white; 
   
}
.next-bt,.prev-bt{
    margin: 13px;
    
    border: 2px solid #01bba8;
    border-radius: 2px;
    padding: 7px;
    font-weight: bold;
    background-image: linear-gradient(to right,#040d1d, #053684);
    color: white;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  }
  .next-bt:hover{
    background-image: linear-gradient(to right,#040d1d, #053684);
    color: white;
    color: rgb(8, 242, 109);
   
  }
  .prev-bt:hover{

background-image: linear-gradient(to right,#040d1d, #053684);
    color: white;
    color: rgb(242, 47, 8);
   
  }
  .wrap{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
  }
  .link,.title{
    text-decoration: none;
    color: rgb(251, 248, 248);
    width: 340px;
    font-size: 17px;
    font-weight: bold;
    
  }
  .link:hover{
    text-decoration: underline;
  }

    
</style>