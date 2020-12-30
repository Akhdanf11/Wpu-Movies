// tailwind.config.js
module.exports = {
    purge: ['./**/*.html',  './**/*.php',  './public/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            orange: "#FF7143",
            black: "#000",
            gray: "#696871",
            dark_gray: "#374151",
            transparent: "transparent",
            red: "#EF4444",
            white: "#FFF",
            bluesky: "#2563EB",
            dark_white: "#F3F4F6",
            light_gray: "#E5E7EB",
            light_blue: "#93C5FD",
            light_green: "#A7F3D0",
            green: "#10B981",
            brown: "#78350F",
            indigo: "#6366F1",
            purple: "#8B5CF6",
            blue: {
            light: '#85d7ff',
            DEFAULT: '#1fb6ff',
            dark: '#009eeb',
            },
            pink: {
              light: '#ff7ce5',
              DEFAULT: '#ff49db',
              dark: '#ff16d1',
            },

        },
      extend: {
          colors: {
            blue: "#1E40AF"
          },
      },
    },
    variants: {
      extend: {
        padding: ["hover"],
      },
    },
    plugins: [],
}