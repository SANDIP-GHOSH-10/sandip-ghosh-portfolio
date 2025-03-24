 "use client";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "footer" },
];

const Header = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg, #1E1E2F 30%, #3A3A5F 90%)",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
        padding: "5px 0",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo/Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#FFD700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Sandip Ghosh
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                onClick={() => handleScroll(link.path)}
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#FFD700",
                    backgroundColor: "rgba(255, 215, 0, 0.2)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            {/* Download Resume Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFD700",
                color: "#1E1E2F",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E6C200",
                },
              }}
              href="../../Sandip New Resume.pdf"
              download
            >
              Download Resume
            </Button>
          </Box>

          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "#FFD700",
            }}
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
