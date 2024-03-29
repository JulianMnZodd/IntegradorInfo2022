import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(45),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#4dd0e1",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function SearchAppBar({ onBuscar }) {
  const [busqueda, setBusqueda] = useState("");
  const [validacion, SetValidacion] = useState(true);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 10 }}>
      <AppBar position="fixed">
        <Toolbar>
          <NewspaperIcon style={{marginRight:'10px'}}></NewspaperIcon> 
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
           {/*  <Link // no me funciona el redireccionamiento
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
             Noticias
            </Link> */}
            Noticias
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyDown={ (e)=>{
                  if(e.key=='Enter' && busqueda.length>=3){
                    onBuscar(busqueda)
                  }
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                if (e.target.value.length >= 3) {
                  SetValidacion();
                } else {
                  SetValidacion(true);
                }
              }}
              role="searchbox"
            />
          </Search>
          <ThemeProvider theme={theme}>
            <Button
              disabled={validacion}
              variant="contained"
              onClick={(_e) => {
                onBuscar(busqueda);
              }}
              role='button'
            >
              Buscar
            </Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
