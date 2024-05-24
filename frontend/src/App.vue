<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
   <RouterView class="router--view" />
   <header>
      <nav>
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/about">About</RouterLink>
         <RouterLink to="/login">Login</RouterLink>
         <RouterLink to="/register">Register</RouterLink>
      </nav>
   </header>
</template>

<style scoped>
header {
   display: flex;
   flex-direction: column;
}

router--view {
   margin-bottom: 1rem;
   width: 100%;
}

nav {
   display: flex;
   justify-content: center;
   margin: 0 auto;
   gap: 1rem;
   padding-top: 1rem;
}
</style>
