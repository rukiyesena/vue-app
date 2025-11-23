<template>
  
  <v-card :class="[
    fixed ? 'fixed top-0 z-40' : 'sticky top-0 z-40',
    'bg-primary text-white',
  ]" elevation="4" class="ml-4 mr-4 mt-4"> 
    <v-card-text>İçerik</v-card-text>
  </v-card>
 
</template>

<script setup lang="ts">
defineProps<{ fixed: boolean }>();
</script>