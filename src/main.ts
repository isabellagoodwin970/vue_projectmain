import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { ref } from 'vue'
const currentPage = ref('index.html')
const newPage = ref('')
function setpage(newPage: string) {
  currentPage.value = newPage
}
