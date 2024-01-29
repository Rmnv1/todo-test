import { createApp } from "vue";
import { createPinia } from "pinia";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "./assets/styles/main.css";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
