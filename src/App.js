import "./styles.css";
import EZWorks from "./Components/EZWorks";
import theme from "./Components/Theme";
import { ThemeProvider } from "@mui/material/styles";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <EZWorks />
    </div>
    </ThemeProvider>
  );
}
