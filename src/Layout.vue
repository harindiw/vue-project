<script setup>
import SideBar from './components/SideBar/SideBar.vue'
</script>

<!-- Layout.vue -->
<template>
    <div class="flex">
      <SideBar />
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </template>
  

  
  <style scoped>
  /* Add your styles for the layout here */
  </style>
  