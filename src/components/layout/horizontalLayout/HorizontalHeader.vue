<template>
    <div class="pb-2 pt-8 bg-twprimary">
        <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo-light.png" width="125" height="125"
            v-if="layoutStore.themeColor == 'light'" />
        <img alt="Vue logo" class="logo mx-auto" src="@/assets/logo-light.png" width="125" height="125" v-else />
        <v-divider :thickness="8" class="mt-2 opacity-100" color="white"></v-divider>

    </div>

</template>
<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'
const layoutStore = useLayoutStore()
</script>