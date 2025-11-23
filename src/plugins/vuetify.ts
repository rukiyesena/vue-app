import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: '#b0c4b1',
          secondary: '#a8dadc',
          vwhite: '#ffffff',
          // ...diğer renkler
        },
      },
    },
  },
})