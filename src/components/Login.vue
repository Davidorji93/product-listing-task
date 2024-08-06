<template>
    <div>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        const user = {
          username: this.username,
          password: this.password,
        };
        axios.post('http://localhost:3000/api/login', user)
          .then(response => {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/');
          });
      },
    },
  };
  </script>
  