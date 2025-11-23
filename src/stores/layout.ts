// src/stores/layout.ts
import { defineStore } from 'pinia'

export type LayoutType = 'horizontal' | 'vertical'

interface LayoutState {
  layout: LayoutType
  primaryColor: string
  secondaryColor: string
  sidebarOpen: boolean
  themeColor: 'light' | 'dark'
  header: 'fixed' | 'static'
}

export const useLayoutStore = defineStore('layout', {
  state: (): LayoutState => ({
    layout: 'vertical',
    primaryColor: '#2563eb',  
    secondaryColor: '#facc15',  
    sidebarOpen: true,
    themeColor: 'light',  
    header: 'fixed'
  }),
  actions: {
    setLayout(type: LayoutType) {
      this.layout = type
    },
    setPrimaryColor(color: string) {
      this.primaryColor = color
    },
    setSecondaryColor(color: string) {
      this.secondaryColor = color
    },
    toggleSidebar() { 
      this.sidebarOpen = !this.sidebarOpen
    },
    setSidebar(open: boolean) {  
      this.sidebarOpen = open
    },
    setThemeColor(color: "light") {  
      this.themeColor = color
    },
    setHeader(header: "fixed" | "static") {
      this.header = header
    }, 
  },
})
