<template>
  <div class="wrap">

    <!-- <h2>Business</h2><hr/> -->
    
     <!-- <div class="grid-search">
  <searchGrid/>
  <search2/>
</div>  -->
<banerBusiness/>

<!-- <forex/> -->




   <br/><br/>







    
    
  </div> 
</template>

<script>
import forex from '../../Baner/v-baner-forex.vue'
import banerBusiness from '../../Baner/v-baner-business.vue'
 import searchGrid from '@/views/Select-3-grid.vue'
import search2 from '@/views/Select-3.vue'
export default {
  components:{
 searchGrid,
search2,
forex,
banerBusiness
  },
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
          `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
};
</script>

<style scoped lang="scss">
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
  background-color: white;
}
.content{
  // border:2px solid grey;
  margin: 10px;
  background-color: white;
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
  width: 1200px;
  height: 500px;
}
.pagination{
  position: absolute;
  top:350px;
  left: 950px;

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
  top:0;
  left:0px;
 
}
.img{
  width: 345px;
  height: 205px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: px;
  opacity: 1;
}
.img:hover{
  opacity: 1;
}
.next-bt,.prev-bt{
    margin: 13px;
    background-color:white;
    
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
    // margin-left: 20px;
    // margin-right: 20px;
    margin-top: 40px;
  }
  .link,.title{
    text-decoration: none;
    color: black;
    width: 340px;
    font-size: 17px;
    font-weight: bold;
    
  }
  .link:hover{
    text-decoration: underline;
  }
  h5{
    // width: 280px;
  }
  .wrap{
    
  }
  .container-content{
    @media screen and (max-width: 1000px){
 
  grid-template-columns: repeat(3,1fr);
 }
 @media screen and (max-width: 700px){
  grid-template-columns: repeat(1,1fr);
}
// @media screen and (max-width: 600px){
//   grid-template-columns: repeat(1,1fr);}
 }
.img{
  @media screen and(max-width: 700px){
  width: 665px;
   height: 400px;
  }
  @media screen and(max-width: 600px){
  width: 555px;
   height: 300px;
  }
}
.grid-search{
  @media screen and(max-width: 1000px){
      display: none;
    }
  }
  .link{
    @media screen and (max-width:900px){
      font-size: 22px;
    }
    @media screen and (max-width:600px){
      font-size: 25px;
    }
    @media screen and (max-width:400px){
      font-size: 30px;
    }
    @media screen and (max-width:350px){
      font-size: 35px;
    }
  }
  .next-bt,.prev-bt{
    @media screen and(max-width:500px){
    
     font-size: 21px;
    }
  }
</style>
