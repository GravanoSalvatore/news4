<template>
  <div>
    <h1>Топ-8 драгоценных металлов по самой высокой цене</h1>
    <ul>
      <li v-for="(metal, index) in topMetals" :key="metal.name">
        {{ index + 1 }}. {{ metal.name }}/ USD:{{ metal.price }} OZT
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      metalsData: [],
      loading: true,
    };
  },
  computed: {
    topMetals() {
      // Сортируем металлы по цене в убывающем порядке и возвращаем топ-8
      return this.metalsData
        .sort((a, b) => b.price - a.price)
        .slice(0, 8);
    },
  },
  mounted() {
    // Замените на URL и ключ вашего API для цен на драгоценные металлы
    const apiUrl = "https://api.metalpriceapi.com/v1/latest";
    const apiKey = "7e5d57584c511e352193e9a514b5131a";
    const baseMetal = "XAU"; // Замените XAU на код вашего базового металла
    const metals = "XAU,XAG,XPT,XPD,XAUUSD,XAGUSD,XPTUSD,XPDUSD"; // Добавьте gold, silver и platinum

    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          base: baseMetal,
          metals: metals,
        },
      })
      .then((response) => {
        this.metalsData = Object.keys(response.data.rates).map((metal) => ({
          name: metal,
          price: response.data.rates[metal],
        }));
        this.loading = false;
      })
      .catch((error) => {
        console.error("Ошибка при получении цен на металлы:", error);
        this.loading = false;
      });
  },
};
</script>
