import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import NoteState from "./context/NoteState";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <NoteState>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </NoteState>
  );
}

export default App;
