<template>
  <div :class="layoutClass" class="min-h-screen">
    <HorizontalHeader v-if="layoutStore.layout === 'horizontal'" />
    <template v-else>
      <VerticalNavMenu />
      <div class="flex-1 flex flex-col">
        <!-- Header -->
        <VerticalHeader :fixed="headerFixed" />
        <!-- Body -->
        <main class="flex-1 p-6 bg-gray-50">
          <slot />
        </main>
      </div>
    </template>
    <LayoutCustomizer />
    <HorizontalNavMenu v-if="layoutStore.layout === 'horizontal'" />
    
    <!-- HORIZONTAL LAYOUT İÇİN MAIN -->
    <main
      v-if="layoutStore.layout === 'horizontal'"
      class="flex-1 p-6 bg-gray-50"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import HorizontalHeader from '@/components/layout/horizontalLayout/HorizontalHeader.vue'
import VerticalHeader from '@/components/layout/verticalLayout/VerticalHeader.vue'
import HorizontalNavMenu from '@/components/layout/horizontalLayout/HorizontalNavMenu.vue'
import VerticalNavMenu from '@/components/layout/verticalLayout/VerticalNavMenu.vue'
import LayoutCustomizer from '@/components/layout/LayoutCustomizer.vue'
const layoutStore = useLayoutStore()

const layoutClass = computed(() => {
  return layoutStore.layout === 'horizontal' ? 'flex flex-col' : 'flex flex-row'
})

const headerFixed = computed(() => {
  return layoutStore.header === 'fixed' ? true : false
})
</script>

<style scoped>
/* opsiyonel ek stil */
</style>
