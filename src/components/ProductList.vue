<template>
    <div>
      <input type="text" v-model="searchQuery" placeholder="Search products..." />
      <div v-for="product in filteredProducts" :key="product._id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.imageURL" alt="Product Image" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        searchQuery: '',
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    created() {
      axios.get('http://localhost:3000/api/products')
        .then(response => {
          this.products = response.data;
        });
    },
  };
  </script>
  