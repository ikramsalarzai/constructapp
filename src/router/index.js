import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import contact from '../components/contact.vue'
import index from "../components/index.vue";
import blog from "../components/blog.vue";
import interrior from "../components/interrior.vue";
import login from "../components/login.vue";
import signup from "../components/signup.vue";

const routes = [
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
  {
    path: "/interrior",
    name: "interrior",
    component: interrior,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
