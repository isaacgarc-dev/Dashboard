import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Sales />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
