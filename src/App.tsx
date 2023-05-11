import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home, Login, Profile } from "./pages/index";
import { selectIsAuth, selectMode } from "./store/selectors";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector(selectMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector(selectIsAuth));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {!isAuth ? (
              <Route path="/" element={<Login />} />
            ) : (
              <>
                <Route
                  path="/home"
                  element={isAuth ? <Home /> : <Navigate to="/" />}
                />
                <Route
                  path="/profile/:userId"
                  element={isAuth ? <Profile /> : <Navigate to="/" />}
                />
              </>
            )}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
