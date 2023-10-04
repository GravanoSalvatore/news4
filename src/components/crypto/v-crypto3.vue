<!-- <template>
  <div class="grid-2">
    <div class="news-2" v-for="item1 in news2" :key="item1">
      <img class="img-2" :src="item1.imageurl"> 
      <ul>
        <li><a class="link-2" :href="item1.url" target="_blank ">{{ item1.title }}</a><span
            class="source">/{{ item1.source }}</span></li>

      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      news2: null
    }
  },
  mounted() {
    axios
      .get('https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining')
      .then(response => {

        this.news2 = response.data.Data
      })
      .catch(error => {
        console.log(error)
      })





  }
}

</script>
    
<style lang="scss" scoped>
.grid-2 {
  margin-top: 50px;
  /* padding-left: 20px;
        padding-right: 20px; */
}

.img-2 {
  width: 170px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  transition: 1s;
}

.img-2:hover {
  width: 170px;
  transition: 1s;
}

.news-2 {
  /* padding-left: 20px;
    padding-right: 20px; */
  margin-top: 13px;
}

.link-2 {
  text-decoration: none;
  color: black;
  font-size: 17px;
  width: 900px;
  font-weight: bold;
  margin-left: 5px;
 

}
li{
  list-style: none;
}
.link:hover,
.link-2:hover,
.link-3:hover {
  text-decoration: underline;
}

.source {
  color: red;
}
</style>
     
  
   -->
   <template>
    <div>
      <br/><br/>
      <div class="grid-2">
        <div class="news-2" v-for="item1 in paginatedNews" :key="item1.id">
          <li><a class="link-2" :href="item1.url" target="_blank ">{{ item1.title }}</a><span
            class="source">/{{ item1.source }}</span></li>

        </div>
      </div>
      <div class="pagination">
        <button  class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span class="page-num">{{ currentPage }}</span>
        <button class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      itemsPerPage: {
        type: Number,
        default: 1, // Skol'ko novostey otobrazhat' na odnoi stranitse po umolchaniyu
      },
    },
    data() {
      return {
        news2: null,
        currentPage: 1,
      };
    },
    computed: {
      paginatedNews() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.news2 ? this.news2.slice(startIndex, endIndex) : [];
      },
      totalPages() {
        return Math.ceil((this.news2 ? this.news2.length : 0) / this.itemsPerPage);
      },
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
        }
      },
      fetchNews() {
        axios
          .get('https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining')
          .then(response => {
            this.news2 = response.data.Data;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
    mounted() {
      this.fetchNews();
    },
  };
  </script>
  
  <style scoped>
  /* Vash stili dlya paginatsii mogut byt' dobavleny zdes' */
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 5px;
  }
  .next-bt,.prev-bt{
      margin: 3px;
      background-color:white;
      color: rgb(248, 2, 2);
      box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      border-radius: 2px;
      padding: 7px;
      font-weight: bold;
    }
    .next-bt:hover,.prev-bt:hover{
      background-color: #102039;
      color: white;
      
      
    
    }
    .link-2 {
  text-decoration: none;
  color: black;
  font-size: 17px;
  width: 900px;
  font-weight: bold;
  margin-left: 5px;
 

}
li{
  list-style: none;
}
.link:hover,
.link-2:hover,
.link-3:hover {
  text-decoration: underline;
}

  </style>
  