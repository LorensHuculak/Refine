import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { plugin as VueTippy } from "vue-tippy";
import "tippy.js/dist/tippy.css"; 
import "./assets/css/theme.css";
import "./assets/vendor/font-awesome/css/all.min.css";
createApp(App)
    .use(store)
    .use(router)
    .use(VueTippy, {
        directive: "tippy",
        component: "tippy",
        componentSingleton: "tippy-singleton",
    })
    .mount("#app");
