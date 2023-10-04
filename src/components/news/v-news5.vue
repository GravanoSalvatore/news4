<template lang="">
  <!-- <h2 class="h1">Entertainment</h2>
<hr/>
<br /> -->
 <section class="section-video-1">
 <div class="div-block-video"
 v-for="item in info"
  :key="item">
 
   <img 
   class="main-img"
   v-if="item.urlToImage"
   :src='item.urlToImage' :alt=' alt'>
   <img 
   class="main-img" v-else src="../../assets/E!_News_current_logo.png">
      <p class="paragraph-block-video"
 >
<strong class="title">   <a class="link" :href="item.url" target="_blank "> {{ item.title }} </a></strong><br />

<!-- <span class="description">{{item.description}}</span>
{{item.content}}<br />
{{item.publishedAt}} -->
  </p>
 </div>
 </section> 
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=3b78f002dbc4466fb5314c295e5f268b&pageSize=3')
      // .get('https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=eb237649c2594555a26f68e392086d40&pageSize=1')
      .then(response => {
        this.info = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })

  }
}

</script>
<style  lang="scss" scoped>
hr{
  background-color: green;
  height: 4px;
}
h2 {
  // text-align: center;
  margin-top: 20px;
  font-size:  250%;
}

.div-block-video {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* padding-left: 20px;
padding-right: 20px; */
}

.main-img {
  width: 200px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);

}

.paragraph-block-video {
  margin: 10px;
}

.link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}


.div-block-video {
  @media screen and (max-width:1000px) {
    grid-template-columns: repeat(1, 1fr);

  }
}

.main-img {
  @media screen and (max-width:1000px) {
    width: 960px;
  }
}

.paragraph-block-video {
  @media screen and (max-width: 800px) {
    font-size: 130%;

  }

  @media screen and (max-width: 600px) {
    font-size: 150%;
  }

  @media screen and (max-width: 500px) {
    font-size: 180%;
  }

  @media screen and (max-width: 400px) {
    font-size: 220%;
  }
}</style> 



