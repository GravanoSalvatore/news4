<!-- <template>
    <div class="marquee-container">
      <div class="marquee">
        <img :src="text"/>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: 'https://styles.redditmedia.com/t5_2i8klq/styles/communityIcon_r662e5v74eia1.png ' // Исходный текст для бегущей строки
      };
    },
    mounted() {
      // Получите элемент бегущей строки
      const marquee = document.querySelector('.marquee');
  
      // Добавьте класс 'animate' для запуска анимации
      marquee.classList.add('animate');
  
      // Клонируйте исходный текст и добавьте его внутри элемента бегущей строки
      const clone = marquee.cloneNode(true);
      marquee.appendChild(clone);
  
      // Создайте анимацию бегущей строки
      const animation = marquee.animate(
        [
          { transform: 'translateX(0)' },
          { transform: 'translateX(-100%)' }
        ],
        {
          duration: 10000, // Продолжительность анимации в миллисекундах (10 секунд)
          iterations: Infinity, // Зацикливание анимации
          easing: 'linear'
        }
      );
    }
  };
  </script>
  
  <style scoped>
  .marquee-container {
    width: 100%; 
    overflow: hidden; 
  }
  
  .marquee {
    white-space: nowrap; 
    display: inline-block; 
  }
  
  .animate {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 50s;
    animation-name: marquee; 
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
   -->
   <template>
    <div class="marquee-container">
      <div class="marquee">
        {{ text }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: 'Это бегущая строка. ' // Исходный текст для бегущей строки
      };
    },
    mounted() {
      // Получите элемент бегущей строки
      const marquee = document.querySelector('.marquee');
  
      // Добавьте класс 'animate' для запуска анимации
      marquee.classList.add('animate');
    }
  };
  </script>
  
  <style scoped>
  .marquee-container {
    width: 100%; 
    overflow: hidden; 
  }
  
  .marquee {
    white-space: nowrap; 
    display: inline-block;
    animation: marquee 10s linear infinite; 
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
  