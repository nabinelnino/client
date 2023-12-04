import React from "react";
import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#151b28" }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              ORCESTRA API
            </Link>
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/"
            style={{ fontWeight: isActive("/") ? "bold" : "normal" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/psets-database"
            style={{
              fontWeight: isActive("/psets-database") ? "bold" : "normal",
            }}
          >
            DB Records
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
