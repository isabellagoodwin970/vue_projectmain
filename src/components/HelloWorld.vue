<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="purple">{{ msg }}</h1>
    <h3>
      Baked By Bella <a href="https://www.instagram.com/baked._.bybella/" target="_blank" rel="noopener"><img alt="Baking Instagram" class="logo" src="/src/assets/logoInsta.svg"  width="75" height="75"></a> 
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  margin-top: 2em;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 1em;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
