 <template lang="">
    <div class="hamburger-menu bur">
<input id="menu__toggle" type="checkbox" />
<label class="menu__btn" for="menu__toggle">
<span>
  <img style="width:35px;
              border:2px solid red;
              border-radius:50%;
              margin-top:10px;
              margin-left:10px" 
              src="../../assets/1491313929-menu_82986.png" > 
</span>
</label>

<div class="menu__box">

  


<router-link to="/" class="menu__item" href="#">Home</router-link>
<router-link to="/Crypto" class="menu__item" href="#">Crypto</router-link>
<router-link to="/News" class="menu__item" href="#">News</router-link>
<router-link to="/Exchange" class="menu__item" href="#">Exchange</router-link>
<router-link to="/Sport" class="menu__item" href="#">Sport</router-link>

<router-link to="/Entertainment" class="menu__item" href="#">Entertainment</router-link>
<router-link to='/Tech' class="menu__item" href="#">Technology</router-link>
<router-link to="/Business" class="menu__item" href="#">Business</router-link> 

<router-link to="/" class="menu__item" href="#">Articles</router-link>
<router-link to="/Crypto" class="menu__item" href="#">Forex</router-link>
<router-link to="/News" class="menu__item" href="#">Video</router-link>
<router-link to="/Exchange" class="menu__item" href="#">Contact</router-link>
<router-link to="/Sport" class="menu__item" href="#">Login</router-link>
<router-link to="/Entertainment" class="menu__item" href="#">Science</router-link>
<router-link to="/Entertainment" class="menu__item" href="#">Donate</router-link>
<router-link to='/Tech' class="menu__item" href="#">About</router-link>
<router-link to="/Business" class="menu__item" href="#">Business</router-link> 

<router-link to="/Entertainment" class="menu__item" href="#">Donate</router-link>
<router-link to='/Tech' class="menu__item" href="#">About</router-link>
<router-link to="/Business" class="menu__item" href="#">Business</router-link> 
<!-- <a href="#" ><img class="icon" src="../../assets/facebook256px_87144.png"></a>
       <a href="#" ><img class="icon" src="../../assets/twitter256px_87155.png"></a>
       <a href="#" ><img class="icon" src="../../assets/youtube256px_87148.png"></a>
       <a href="#" ><img class="icon" src="../../assets/linkedin256px_87150.png"></a>
     -->

</div>
</div>



</template>
<script>
import search from '@/views/Select-2.vue'
export default {
    components:{
      search
    }
}
</script>
<style lang="scss" scoped>
.bur{
  position: absolute;
  top:20px;
  right: 70px;
}
 /* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
}

/* стилизуем кнопку */
.menu__btn {
  display: flex;
  /* используем flex для центрирования содержимого */
  align-items: center;
  /* центрируем содержимое кнопки */
  position: absolute;
  top: 0px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;

}

/* добавляем "гамбургер" */
.menu__btn>span
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  // background-color: rgb(244, 239, 239);
  display: none;

  @media screen and (max-width:1370px) {
    display: inline;

  }
}

.menu__btn>span::before {
  content: '';
  top: -8px;
}

.menu__btn>span::after {
  content: '';
  top: 8px;
}

/* контейнер меню */
.menu__box {

   overflow-x: hidden;
    overflow-y: auto;
  display: grid;
   grid-template-columns: repeat(5,1fr);
   position:fixed;
   visibility: hidden;
  margin-top: 29px;
   left: -100%;
  width: auto;
  //height: 100%;
 border:2px solid white;
  //  background-image: linear-gradient(to right,#040d1d, #053684);
  background-color: #040d1d;
  list-style: none;
  // text-align: center;
  // background: white;
font-weight: bold;
  color:white;
  // box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 8px;
}

/* элементы меню */
.menu__item {
  // display: block;
  padding: 2px 4px;
  color:white;
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: none;
margin: 5px;
}

.menu__item:hover {
  // background-image: linear-gradient(to right,#040d1d, #053684);
  // color: white;
  // border-radius: 7px;
  // border: 3px solid #faa216;
  text-decoration: underline;
}

#menu__toggle:checked~.menu__btn>span {
  transform: rotate(45deg);
}

#menu__toggle:checked~.menu__btn>span::before {
  top: 0;
  transform: rotate(0);
}

#menu__toggle:checked~.menu__btn>span::after {
  top: 0;
  transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
  visibility: visible;
  left: 0;
}

// .menu__btn>span,
// .menu__btn>span::before,
// .menu__btn>span::after {
//   transition-duration: .25s;
// }

// .menu__box {
//   transition-duration: .25s;
// }

// .menu__item {
//   transition-duration: .25s;
// }

span{
  @media screen and(max-width: 500px){
margin-top: 60px;

  }
}
img{
  @media screen and (max-width: 500px){
   
  }
}
.menu__box{
  @media screen and (max-width: 700px){
    margin-top:80px ;
  }
}

</style> 


  

   