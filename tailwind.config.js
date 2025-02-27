export default {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx,md}"], // Asegura que detecte .md
    theme: {
      extend: {
        screens:{
          xs :'300px'
        }
      },
    },
    plugins: [require("@tailwindcss/typography")], // Activa `prose`
  };
  