<template>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: Number,
      totalPages: Number,
    },
    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.$emit('page-change', this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$emit('page-change', this.currentPage + 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
 
  .pagination {
    text-align: center;
    margin-top: 20px;
  }
  
  .pagination button {
    margin: 5px;
  }
  button{
      margin: 3px;
      background-color:white;
      color: rgb(248, 2, 2);
      box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      border-radius: 2px;
      padding: 7px;
      font-weight: bold;
    }
    button:hover{
      background-color: #102039;
      color: white;
      
      
    
    }
  </style>
  