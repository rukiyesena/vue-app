<!-- src/layouts/AuthLayout.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Auth layout için ekstra state gerekmez
</script>
