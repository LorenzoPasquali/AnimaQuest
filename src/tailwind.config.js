/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",  // Isso define onde o Tailwind vai buscar os arquivos HTML para aplicar as classes
  ],
  theme: {
    extend: {},  // Aqui você pode adicionar customizações do seu tema se necessário
  },
  plugins: [],  // Não é necessário incluir tailwindcss e autoprefixer aqui
}
