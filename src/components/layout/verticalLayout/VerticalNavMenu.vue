<template>
  <nav :class="[
    'bg-twprimary text-white flex flex-col transition-all duration-300',
    sidebarOpen ? 'w-64' : 'w-16'
  ]">
    <button class="p-2 focus:outline-none self-end mt-5" @click="toggleSidebar" aria-label="Toggle Sidebar">
      <span v-if="sidebarOpen">
        <IconMenu class="w-8 h-8" />
      </span>
      <span v-else>
        <IconMenu class="w-8 h-8" />
      </span>
    </button>
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo-light.png" width="125" height="125"
      v-if="sidebarOpen" />
    <img alt="Vue logo" class="logo mx-auto" src="@/assets/favicon-light.png" width="125" height="125" v-else />
    <v-divider :thickness="8" class="mt-2 opacity-100" color="white"></v-divider>
    <ul class="flex flex-col mt-5">
      <li>
        <router-link to="/"
          class="p-2 hover:bg-twprimary-light hover:text-twprimary-dark cursor-pointer flex items-center">
          <span class="mr-2">
            <IconMenuDashboard class="w-8 h-8" />
          </span>
          <span v-if="sidebarOpen">Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about"
          class="p-2 hover:bg-twprimary-light hover:text-twprimary-dark cursor-pointer flex items-center">
          <span class="mr-2">
            <IconMenuElements class="w-8 h-8" />
          </span>
          <span v-if="sidebarOpen">Shop</span>
        </router-link>
      </li>
      <li>
        <router-link to="/"
          class="p-2 hover:bg-twprimary-light hover:text-twprimary-dark cursor-pointer flex items-center">
          <span class="mr-2">
            <IconMenuUsers class="w-8 h-8" />
          </span>
          <span v-if="sidebarOpen">Cart</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconMenuDashboard from '@/components/icons/menu/IconMenuDashboard.vue'
import IconMenuUsers from '@/components/icons/menu/IconMenuUsers.vue'
import IconMenuElements from '@/components/icons/menu/IconMenuElements.vue'
const sidebarOpen = ref(true)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
