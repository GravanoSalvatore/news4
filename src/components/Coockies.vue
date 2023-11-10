
   <template>
    <div v-if="!isCookieAccepted">
      <div class="cookie-popup">
        <p>We use cookies. By continuing to use the site, you agree to our privacy policy.</p>
        <button @click="acceptCookies">Accept</button>
        <button @click="rejectCookies">Reject</button>
      </div>
    </div>
  </template>
  
  <script>
  import VueCookies from "vue-cookies";
  
  export default {
    data() {
      return {
        isCookieAccepted: VueCookies.isKey("cookie_accepted"),
      };
    },
    methods: {
      acceptCookies() {
        VueCookies.set("cookie_accepted", "true", 365);
        this.isCookieAccepted = true;
      },
      rejectCookies() {
        // You can add your logic for handling cookie rejection here
        this.isCookieAccepted = true; // For example, setting isCookieAccepted to true
      },
    },
  };
  </script>
  
  <style scoped>
  .cookie-popup {
    z-index: 100000000000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background-color: #333;
    color: #fff;
    text-align: center;
  }
  
  .cookie-popup button {
    margin: 0 10px;
    padding: 8px 15px;
    cursor: pointer;
    background-color: #fff;
    color: #333;
    border: none;
  }
  </style>
  