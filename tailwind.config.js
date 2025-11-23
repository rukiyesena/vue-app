module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twprimary: {DEFAULT: '#b0c4b1', light: '#e6f0e8', dark: '#4a6359'},
        twsecondary: {DEFAULT: '#a8dadc', light: '#f0f4f8', dark: '#457b9d'},
        twwarning: {DEFAULT: '#e07a5f', light: '#f4a261', dark: '#d62828'},
        twsuccess: {DEFAULT: '#81b29a', light: '#f2f2f2', dark: '#264653'},
        twdanger: {DEFAULT: '#ff0054', light: '#ff6f61', dark: '#d00000'},
        twdark: {DEFAULT: '#0a0a0aff', light: '#5a5858ff', dark: '#070707ff'},

      },
      spacing: {
        'sidebar': '256px',  
      },
    },
  },
  plugins: [],
}
