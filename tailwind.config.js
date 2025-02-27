export default {
    content: ["./src/**/*.{astro,js,ts,jsx,tsx,md}"], // Asegura que detecte .md
    theme: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography")], // Activa `prose`
  };
  