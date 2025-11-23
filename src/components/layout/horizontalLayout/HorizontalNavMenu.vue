<template>
  <nav class="flex flex-row bg-twprimary text-white items-center px-4" style="height: 50px;">
    <ul class="flex flex-row space-x-4 mx-auto">
      <li>
        <router-link to="/"
          class="flex items-center p-2 rounded-md hover:text-twprimary-dark hover:bg-twprimary-light cursor-pointer">
          <IconMenuDashboard class="w-6 h-6 mr-2" />
          <span>Home</span>
        </router-link>
      </li> 
      <li>
        <router-link to="/about"
          class="flex items-center p-2 rounded-md hover:text-twprimary-dark hover:bg-twprimary-light cursor-pointer">
          <IconMenuElements class="w-6 h-6 mr-2" />
          <span>Shop</span>
        </router-link>
      </li>
      <li class="flex items-center p-2 rounded-md hover:text-twprimary-dark hover:bg-twprimary-light cursor-pointer">
        <IconMenuUsers class="w-6 h-6 mr-2" />
        <span>Cart</span>
      </li>
    </ul>
  </nav>
</template>


<script setup lang="ts">
import IconMenuDashboard from '@/components/icons/menu/IconMenuDashboard.vue'
import IconMenuUsers from '@/components/icons/menu/IconMenuUsers.vue'
import IconMenuElements from '@/components/icons/menu/IconMenuElements.vue'
</script>