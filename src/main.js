import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Welcome from "./components/Welcome.vue";
import Step1 from "./components/Step1.vue";
import Step2 from "./components/Step2.vue";
import Step3 from "./components/Step3.vue";
import Step4 from "./components/Step4.vue";
import Step5 from "./components/Step5.vue";
import Step6 from "./components/Step6.vue";
import Step7 from "./components/Step7.vue";


const routes = [
  { path: "/step/1", component: Step1 },
  { path: "/step/2", component: Step2 },
  { path: "/step/3", component: Step3 },
  { path: "/step/4", component: Step4 },
  { path: "/step/5", component: Step5 },
  { path: "/step/6", component: Step6 },
  { path: "/step/7", component: Step7 },
  { path: "/*", component: Welcome },
];

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
