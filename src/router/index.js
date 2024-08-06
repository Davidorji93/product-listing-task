
import Vue from 'vue';
import Router from 'vue-router';
import ProductList from '../components/ProductList.vue';
import AddProduct from '../components/AddProduct.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: ProductList },
    { path: '/add-product', component: AddProduct },
    { path: '/login', component: Login },
  ],
});
