<template>
  <div class="container">
    <!-- <img class="crypto-logo" src="../../assets/cropped-cryptonewslogo (1).png">
      <hr /> -->
    <div class="grid">
      <div class="news" v-for="item1 in news" :key="item1.id">
        <img class="img" :src="item1.urlToImage"><br />
        <p class="p-4">
          <a class="link" :href="item1.url" target="_blank ">{{ item1.title }}</a>
        </p>
      </div>

      <!-- <pagination :current-page="currentPage" :total-pages="totalPages" @page-change="changePage"></pagination>
      <div class="page-buttons">
       
        <button class="prev-bt" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
        <button class="next-bt" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
       
      </div> -->
    </div>
    {{ news }}
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      news: null,
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  // computed: {
  //   paginatedNews() {
  //     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //     const endIndex = startIndex + this.itemsPerPage;
  //     return this.news ? this.news.slice(startIndex, endIndex) : [];
  //   },
  //   totalPages() {
  //     return Math.ceil((this.news ? this.news.length : 0) / this.itemsPerPage);
  //   },
  // },
  methods: {
    fetchNews() {
      axios
        .get('https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&Page=1&&pageSize=10')
        .then(response => {
          this.news = response.data.items;
        })
        .catch(error => {
          console.error(error);
        });
    },
    //   changePage(page) {
    //     if (page >= 1 && page <= this.totalPages) {
    //       this.currentPage = page;
    //     }
    //   },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
  
<style lang="scss" scoped>
.pagination {
  position: absolute;
  left: 0;
}

button {
  margin: 3px;
  border: 2px solid #01bba8;
  border-radius: 2px;
  padding: 7px;
  font-weight: bold;
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}

.next-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
  color: rgb(8, 242, 109);
}

.prev-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
  color: rgb(242, 47, 8);
}

.page-buttons {
  text-align: center;
  margin-top: 20px;
}

.page-buttons button {
  margin: 5px;
}


.page-buttons {
  text-align: center;
  margin-top: 20px;
}

.page-buttons button {
  margin: 5px;
}


span {
  display: flex;

}

h2 {
  margin-top: 60px;
}

.crypto-logo {
  position: absolute;
  width: 200px;
  margin-top: 10px;
}

.p-4 {
  width: 270px;
  margin: 10px;
}




.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  // background-color: #040d1d;
  margin-left: 0;

}


.img {
  height: 180px;
  width: 270px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
}

.img:hover {
  box-shadow: none;
}


.news {

  margin-top: 30px;


}

.news-2 {
  /* padding-left: 20px;
      padding-right: 20px; */
  margin-top: 13px;
}


.full-name {
  font-size: 18px;
  font-weight: bold;
}

.full-name,
.name1,
.price1 {
  color: white;
}

.name1 {
  width: 130px;
}

.name1,
.price1 {
  font-size: 14px;

}

.link {
  text-decoration: none;
  color: rgb(2, 2, 2);
  font-size: 17px;
  width: 270px;
  font-weight: bold;

}

.link:hover,
.link-2:hover,
.link-3:hover {
  text-decoration: underline;
}


// @media
.grid {
  @media screen and(max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
  }

  @media screen and(max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }

  @media screen and(max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }
}

.img {
  @media screen and(max-width:900px) {
    width: 280px;
  }

  @media screen and(max-width:600px) {
    width: 280px;
  }

  @media screen and(max-width:400px) {
    width: 360px;
  }
}

.p-4 {
  @media screen and (max-width:600px) {
    width: 250px;
  }

  @media screen and (max-width:400px) {
    width: 360px;
  }
}</style>
  