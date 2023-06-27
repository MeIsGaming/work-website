import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import { createRouter, createWebHistory } from "vue-router";

//Views:
import HomeView from "./views/HomeView/HomeView.vue";
import ContactView from "./views/ContactView/ContactView.vue";
import ImpressumView from "./views/ImpressumView/ImpressumView.vue";
import TestView from "./views/TestView/TestView.vue";
import AboutView from "./views/AboutView/AboutView.vue";
import AdhsView from "./views/AdhsView/AdhsView.vue";

import "primevue/resources/themes/md-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/impressum",
      name: "impressum",
      component: ImpressumView,
    },
    {
      path: "/test",
      name: "test",
      component: TestView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/adhs",
      name: "adhs",
      component: AdhsView,
    },
  ],
});

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.component("PrimeButton", Button);

app.mount("#app");
