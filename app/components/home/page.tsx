"use client";
import { Container, Box, Typography, Button, Avatar, Stack, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const HomePage = () => {
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
                <Grid container spacing={6} alignItems="center">

                    {/* Left Side - Profile Image with Glass Effect */}
                    <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Paper
                                sx={{
                                    p: 2,
                                    bgcolor: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(10px)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)",
                                }}
                            >
                                <Avatar
                                    src="../../../../../Personal photo.jpg"
                                    alt="Your Name"
                                    sx={{
                                        width: { xs: 180, md: 250 },
                                        height: { xs: 180, md: 250 },
                                        border: "5px solid rgba(255, 255, 255, 0.3)",
                                        boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
                                    }}
                                />
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Right Side - Name, Designation & Description */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                                Sandip Ghosh
                            </Typography>
                            <Typography variant="h5" sx={{ color: "secondary.light", mb: 2 }}>
                                Front End Developer
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.8, mb: 4 }}>
                                Passionate about building high-performance web applications with modern technologies.
                                Specializing in React, Next.js, and full-stack development.
                            </Typography>

                            {/* Action Buttons */}
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    sx={{
                                        borderRadius: 3,
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        px: 4,
                                    }}
                                >
                                    Contact Me
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    sx={{
                                        borderRadius: 3,
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        px: 4,
                                        borderColor: "rgba(255, 255, 255, 0.6)",
                                        color: "white",
                                        "&:hover": { borderColor: "white" },
                                    }}
                                    href="../../Sandip New Resume.pdf"
                                    download
                                >
                                    View Resume
                                </Button>
                            </Stack>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomePage;
