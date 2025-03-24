"use client";
import { Container, Box, Typography, Grid, Button, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  "C", "C++", "HTML", "CSS", "JavaScript", "TypeScript",
  "React.js", "Bootstrap", "Git", "MySQL", "Arduino Uno","MUI","Tailwind"
];

const AboutPage = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1E1E2F 30%, #3A3A5F 90%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3"
  fontWeight="bold"
  gutterBottom
  textAlign="center"
  sx={{ color: "white" }}>
            About Me
          </Typography>

          <Grid container spacing={6} alignItems="center">
            {/* Left Side - About Text & Contact Button */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, bgcolor: "rgba(255, 255, 255, 0.1)", borderRadius: 2 }}>
                <Typography variant="h5" sx={{ opacity: 0.9, mb: 3, color: "orange" }} fontWeight="bold" gutterBottom>
                  Hi, I am Sandip Ghosh 
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, mb: 3, color: "#E0E0E0" }}>
                  I am a passionate software developer with experience in web technologies. 
                  I enjoy building responsive web applications and working with modern frameworks. 
                  My goal is to create efficient and scalable solutions while continuously learning and improving.
                </Typography>

                {/* Contact Button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ bgcolor: "#ff9800", color: "white", fontWeight: "bold" }}
                  href="#contact"
                >
                  Contact Me
                </Button>
              </Paper>
            </Grid>

            {/* Right Side - Skills as Buttons */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 4, bgcolor: "rgba(255, 255, 255, 0.1)", borderRadius: 2 }}>
                <Typography variant="h5" sx={{ opacity: 0.9, mb: 3, color: "orange" }} fontWeight="bold" gutterBottom>
                  Technical Skills
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1.5} mt={2}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          borderColor: "#ff9800",
                          color: "#ff9800",
                          fontWeight: "bold",
                          borderRadius: 3,
                          px: 2.5,
                          py: 1,
                          "&:hover": { bgcolor: "#ff9800", color: "white" }
                        }}
                      >
                        {skill}
                      </Button>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutPage;
