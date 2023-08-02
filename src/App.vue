<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Baking from './components/Baking.vue'
import Sidebar from './components/Sidebar.vue'
import Contact from './components/Contact.vue'
import { ref } from 'vue'

const currentPage = ref('home')
const newPage = ref('')
function setpage(newPage: string) {
  currentPage.value = newPage
  console.log("test")
}

</script>

<template>
  
<div class="containerBox">
  <div class="header">
    <!-- 
    <img alt="butterfly logo" class="butterfly" src="./assets/logob.svg" width="170" height="170" />
    -->
      <div class="wrapper">
        
      </div>
  </div>
  <div class="main-content" >
    <HelloWorld v-show="currentPage=='home'" msg="Bella Goodwin's Website" />
    <TheWelcome v-show="currentPage=='home'"/>
    <Baking v-show="currentPage=='baking'" />
    <Contact v-show="currentPage=='contact'" />
  </div>
  <div class="left-sidebar">
    <ul>
    <li class="dropdown">
      <a href="index.html" class="dropbtn"><img alt="home logo" class="logo" src="/src/assets/logoHome.svg" width="50" height="50" /></a>
      <div class="dropdown-content" >
        <button class="butt" @click="setpage('home')">Home</button>
        <button class="butt" @click="setpage('contact')">Contact</button>
        <button class="butt" @click="setpage('baking')">Baking</button>
      </div>
    </li>   
  </ul>
  </div>
  <div class="footer">Footer</div>
</div>
</template>


