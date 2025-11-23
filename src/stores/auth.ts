// src/stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: true,//false, // başlangıçta false
    user: null as null | { name: string; email: string },
  }),
  actions: {
    login(user: { name: string; email: string }) {
      this.user = user
      this.isLoggedIn = true
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
    },
  },
})
