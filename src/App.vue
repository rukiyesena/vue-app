<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, watch } from 'vue';
import { useAuthStore } from '@/stores/auth'
import AppLayout from './layouts/AppLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
const authStore = useAuthStore()

const mainLayout = computed(() => (authStore.isLoggedIn ? AppLayout : AuthLayout))
</script>

<template>
  <component v-bind:is="mainLayout">
    <router-view />
  </component>
</template>