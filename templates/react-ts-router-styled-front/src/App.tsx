import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/index";

import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { dark, light } from "./styles/themes/index";
import ThemeContext from "./styles/themes/context";
import { usePersistedState } from "./utils/usePersistentState";

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggledTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggledTheme }}>
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
