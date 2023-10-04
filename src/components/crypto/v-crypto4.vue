<template>
  <div>
    
    <div class="grid-3">
      <div class="news" v-for="item1 in paginatedNews" :key="item1.id">
        <img class="img-3" :src="item1.imageurl"><br />
        <p class="p-3">
          <a class="link-3" :href="item1.url" target="_blank">{{ item1.title }}</a>
        </p>
      </div>
    </div>
    <pagination :current-page="currentPage" :total-pages="totalPages" @page-change="changePage"></pagination>
  </div>
</template>

<script>
import pagination from '../v-pagination.vue'
import axios from 'axios';

export default {
  components:{pagination},
  data() {
    return {
      news: [],
      currentPage: 1,
      itemsPerPage: 3, // Количество новостей на странице
    };
  },
  computed: {
    paginatedNews() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.news.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.news.length / this.itemsPerPage);
    },
  },
  methods: {
    fetchNews() {
      axios
        .get('https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored')
        .then(response => {
          this.news = response.data.Data || [];
          this.changePage(1); // Установим текущую страницу на первую после загрузки данных
        })
        .catch(error => {
          console.error(error);
        });
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style lang="scss" scoped>
/* Ваши стили могут оставаться без изменений */
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


.page-buttons {
  text-align: center;
  margin-top: 20px;
}

.page-buttons button {
  margin: 5px;
}



.p-3 {
  width: 360px;
  
  margin: 10px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  /* padding-left: 20px;
        padding-right: 20px; */

}

.img-3 {
  width: 380px;
  height: 290px;
  margin: 10px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  // @media screen and (max-width: 1240px){
  //   width: 380px;
  // }
}

.img-3:hover {
  box-shadow: none;
}

.link-3 {
  text-decoration: none;
  color: black;
  font-size: 17px;
  // width: auto;
  font-weight: bold;
}

.link-3:hover {
  text-decoration: underline;

}

.grid-3 {
  @media screen and(max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and(max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

.img-3 {
  @media screen and(max-width:900px) {
    width: 430px;
  }

  @media screen and(max-width:600px) {
    width: 550px;
    height: 380px;
  }

  @media screen and(max-width:400px) {
    width: 360px;
  }
}

.p-3 {
  @media screen and (max-width:600px) {
    width: 560px;
  }

  @media screen and (max-width:400px) {
    width: 360px;
  }
}
</style>
     
  
  