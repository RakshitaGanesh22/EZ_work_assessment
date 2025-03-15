import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Exo 2', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: "regular",
      "@media (max-width:1440px)": { fontSize: "2.25rem" }, // MacBook
      "@media (max-width:1080px)": { fontSize: "2rem" }, // 1080p
      "@media (max-width:720px)": { fontSize: "2rem" }, // 720p
      "@media (max-width:480px)": { fontSize: "1.75rem" }, // Mobile
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "regular",
      "@media (max-width:1440px)": { fontSize: "2rem" },
      "@media (max-width:1080px)": { fontSize: "1.75rem" },
      "@media (max-width:720px)": { fontSize: "1.5rem" },
      "@media (max-width:480px)": { fontSize: "1.5rem" },
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: "regular",
      "@media (max-width:1440px)": { fontSize: "1.25rem" },
      "@media (max-width:1080px)": { fontSize: "1.25rem" },
      "@media (max-width:720px)": { fontSize: "1.25rem" },
      "@media (max-width:480px)": { fontSize: "1rem" },
    },
  },
});

export default theme;
