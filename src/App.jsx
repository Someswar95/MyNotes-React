import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Error404 from "./pages/Error404";
import ThemeState from "./context/theme/ThemeState";
import NoteState from "./context/note/NoteState";
import Login from "./components/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Create from "./pages/Create";
import PrivateRoutes from "./pages/PrivateRoutes";
import AuthRoutes from "./pages/AuthRoutes";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./hooks/Theming/Theme";

const App = () => {
  const [theme] = Theme();

  return (
    <ThemeProvider theme={theme}>
      <ThemeState>
        <NoteState>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/" element={<AuthRoutes />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route exact path="/" element={<PrivateRoutes />}>
                <Route path="addNote" element={<Create />} />
              </Route>
              <Route exact path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </NoteState>
      </ThemeState>
    </ThemeProvider>
  );
};

export default App;
