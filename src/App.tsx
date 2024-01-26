import React from "react";

import "./App.css";
import {
  Container,
  Box,
  Typography,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Create React App example in TypeScript
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
