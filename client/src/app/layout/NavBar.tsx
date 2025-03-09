import { Brightness4, Brightness7 } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean;
    toggleDarkMode: () => void;
}
export default function NavBar({ darkMode, toggleDarkMode }: Props) {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">
                RE-STORE
                <IconButton onClick={toggleDarkMode} color="inherit">
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Typography>            
        </Toolbar>
    </AppBar>
  )
}
