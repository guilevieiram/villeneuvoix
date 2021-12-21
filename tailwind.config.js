module.exports = {
  darkMode: false,
  purge: {
    content: [
      "./src/**/*.{js,jsx}",
      "./public/index.html",
      "./src/**/**/*.{js,jsx}"
    ]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#FDF53E',
        blue: '#4952A6',
        dark: '#5A5A5A',
        light: '#E5E5E5'
      },
      fontFamily: {
        title: ['Limelight', 'ui-serif'],
        subtitle: ['Source Serif 4', 'ui-serif'],
        body: ['Mulish', 'ui-sans-serif'],
      }
    },
  },
  plugins: [],
}