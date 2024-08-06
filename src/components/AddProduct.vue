<template>
    <div>
      <form @submit.prevent="addProduct">
        <input type="text" v-model="name" placeholder="Product Name" required />
        <textarea v-model="description" placeholder="Product Description" required></textarea>
        <input type="number" v-model="price" placeholder="Product Price" required />
        <input type="text" v-model="imageURL" placeholder="Product Image URL" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        description: '',
        price: '',
        imageURL: '',
      };
    },
    methods: {
      addProduct() {
        const product = {
          name: this.name,
          description: this.description,
          price: this.price,
          imageURL: this.imageURL,
        };
        axios.post('http://localhost:3000/api/products', product)
          .then(() => {
            this.$router.push('/');
          });
      },
    },
  };
  </script>
  