<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Sidebar from './components/Sidebar.vue'
import { ref } from 'vue'
const currentPage = ref('index.html')
const newPage = ref('')
function setpage(newPage: string) {
  currentPage.value = newPage
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
  <div class="main-content">
    <HelloWorld msg="Bella Goodwin's Website" />
    <TheWelcome/>
  </div>
  <div class="left-sidebar">
    <ul>
    <li class="dropdown">
      <a href="index.html" class="dropbtn"><img alt="home logo" class="logo" src="/src/assets/logoHome.svg" width="50" height="50" /></a>
      <div class="dropdown-content" >
        <a @click="setpage('index.html')" href="index.html">Home</a>
        <a @click="setpage('contact.html')" href="contact.html">Contact</a>
        <a @click="setpage('baking.html')" href="baking.html">Baking</a>
      </div>
    </li>   
  </ul>
  </div>
  <div class="footer">Footer</div>
</div>
</template>


