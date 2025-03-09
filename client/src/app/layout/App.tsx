import { useState } from "react"
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark': 'light'

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
    
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode = {darkMode} toggleDarkMode={toggleDarkMode}/>
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode ? '#121212' : '#eaeaea'
        }}
      >
        <Container maxWidth='xl' sx={{mt: 14}}>      
          <Outlet />
        </Container>
      </Box>
     
    </ThemeProvider>
  )
}

export default App
