// Composables
import { createRouter, createWebHistory } from "vue-router";
import Ico from "@/views/Ico.vue";
import Home from "@/views/Home.vue";
import Crypto from "@/views/Crypto.vue";
 import Sport from "@/views/Sport.vue";
import Exchange from "@/views/Exchange.vue";
import MainCrypto from "@/views/MainCrypto.vue";
import News from "@/views/News.vue";
 import People from "@/views/People.vue";
import Nft from "@/views/Nft.vue";
import Business from "@/views/Business.vue";
import Defi from "@/views/Defi.vue";
import Ai from "@/views/Ai.vue";
 import Tech from "@/views/Tech.vue";
import Entertainment from "@/views/Entertainment.vue";
import Stocks from "@/views/Stocks.vue";
 import Science from '@/views/Science.vue';
 import Health from '@/views/Health.vue'
import CryptoPage from '@/views/cryptoPage.vue'
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/Crypto",
    component: Crypto,
    name: "Crypto",
  },
  {
    path: "/Sport",
    component: Sport,
    name: "Sport",
  },

  {
    path: "/Exchange",
    component: Exchange,
    name: "Exchange",
  },
   {
    path: "/News",
    component: News,
    name: News,
  },
  {
    path: "/MainCrypto",
    component: MainCrypto,
    name: "MainCrypto",
  },
  {
    path: "/People",
    component: People,
    name: "People",
  },
   {
    path: "/Nft",
    component: Nft,
    name: "Nft",
  },
  {
    path: "/Business",
    component: Business,
    name: "Business",
  },
  {
    path: "/Defi",
    component:Defi,
    name: "Defi",
  },
  {
    path: "/Stocks",
    component: Stocks,
    name: "Stocks",
  },
   {
    path: "/Tech",
    component: Tech,
    name: "Tech",
  },
  {
    path: "/CryptoPage",
    component: CryptoPage,
    name: "CryptoPage",
  },
  {
    path: "/Entertainment",
    component: Entertainment,
    name: "Entertainment",
  },
  {
    path: "/Science",
    component: Science,
    name: "Science",
  },
  {
    path: "/Health",
    component: Health,
    name: "Health",
  },
  {
    path: "/Ai",
    component: Ai,
    name: "Ai",
  },
  {
    path: "/Ico",
    component: Ico,
    name: "Ico",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
