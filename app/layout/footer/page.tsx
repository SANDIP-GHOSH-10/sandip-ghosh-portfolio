import { Container, Grid, Typography, TextField, Button, Box, IconButton, Link, Paper } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1E1E2F 30%, #3A3A5F 90%)",
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Get in Touch
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Have a question or want to work together? Send me a message!
            </Typography>

            <Paper sx={{ p: 3, borderRadius: 2, bgcolor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)" }}>
              <form>
                <TextField 
                id="outlined-basic"
                  label="Full Name" 
                  fullWidth 
                  margin="normal"
                  variant="outlined"
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
                <TextField 
                id="outlined-basic"
                  label="Email" 
                  type="email" 
                  fullWidth 
                  margin="normal"
                  variant="outlined"
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
                <TextField 
                  label="Message" 
                  multiline 
                  rows={4} 
                  fullWidth 
                  margin="normal"
                  variant="outlined"
                  sx={{ bgcolor: "white", borderRadius: 1 }}
                />
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth 
                  sx={{ mt: 2, borderRadius: 1, textTransform: "none", fontWeight: "bold" }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Contact Details & Social Media */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Reach out via email or follow me on social media.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" display="flex" alignItems="center" sx={{ mb: 1 }}>
                <Email fontSize="small" sx={{ mr: 1, color: "secondary.main" }} />
                <Link href="mailto:your.email@example.com" color="inherit" underline="none">
                  sandipghosh591@gmail.com
                </Link>
              </Typography>
              <Typography variant="body1" display="flex" alignItems="center">
                <Phone fontSize="small" sx={{ mr: 1, color: "secondary.main" }} />
                +91 8918672238
              </Typography>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Follow Me
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "start" } }}>
                <IconButton href="https://github.com/SANDIP-GHOSH-10" sx={{ color: "white", bgcolor: "#222", "&:hover": { bgcolor: "#333" } }}>
                  <GitHub />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/sandip-ghosh-6174801a7/" sx={{ color: "white", bgcolor: "#0077B5", "&:hover": { bgcolor: "#005582" } }}>
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://twitter.com/yourtwitter" sx={{ color: "white", bgcolor: "#1DA1F2", "&:hover": { bgcolor: "#0D8DD8" } }}>
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: "center", mt: 6, pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Sandip Ghosh. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
