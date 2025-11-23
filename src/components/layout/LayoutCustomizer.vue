<template>
  <div>
    <!-- Açıkken arka plan overlay -->
    <div
      class="fixed inset-0 bg-[black]/60 z-[51] px-4 transition-opacity"
      v-if="showCustomizer"
      @click="showCustomizer = false"
    ></div>

    <!-- Sağda sabit açma butonu -->
    <button
      class="fixed top-1/2 right-0 z-[52] bg-twprimary text-white w-12 h-12 flex items-center justify-center rounded-l-full shadow-lg transition-transform duration-300"
      :class="{ 'translate-x-0': !showCustomizer, 'translate-x-full': showCustomizer }"
      @click="showCustomizer = true"
      v-if="!showCustomizer"
      aria-label="Customizer Aç"
    >
      <IconSettings class="animate-spin w-6 h-6" />
    </button>

    <!-- Sidebar -->
    <nav
      class="bg-white fixed top-0 right-0 bottom-0 w-full max-w-[400px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-transform duration-300 z-[53] dark:bg-[#0e1726] p-4"
      :class="{ 'translate-x-0': showCustomizer, 'translate-x-full': !showCustomizer }"
    >
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        @click="showCustomizer = false"
        aria-label="Customizer Kapat"
      >
        ✕
      </button>
      <div class="relative h-full overflow-x-hidden pr-3 -mr-3">
        <div class="p-4 flex gap-2">
          <button @click="setVertical" class="px-4 py-2 bg-twprimary text-white rounded">
            Vertical
          </button>
          <button @click="setHorizontal" class="px-4 py-2 bg-secondary text-black rounded">
            Horizontal
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
import { ref } from 'vue';
import IconSettings from '@/components/icons/IconSettings.vue'
const layoutStore = useLayoutStore()
const showCustomizer = ref(false);
const setVertical = () => layoutStore.setLayout('vertical')
const setHorizontal = () => layoutStore.setLayout('horizontal')
</script>
