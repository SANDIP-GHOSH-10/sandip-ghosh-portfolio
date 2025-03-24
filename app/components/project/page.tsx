"use client";
import { Container, Box, Typography, Grid, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
const projects = [

    {
        title: "Sports Blog",
        description: "A modern sports blog built with React and Redux, offering real-time news, match analysis, and engaging discussions. Featuring a sleek UI, optimized performance, and seamless state management. Stay updated with the latest in sports! ",
        image: "../../../../spBlog.png",
        github: "https://github.com/SANDIP-GHOSH-10/sports-blog",
    },
    {
        title: "Hotel Booking Website",
        description: "The Hotel Management Website is a modern platform built with React and Redux for efficient hotel operations. It features online booking, room and customer management, payment integration, and an admin dashboard. With a responsive design and seamless state management.",
        image: "../../../../hotel.png",
        github: "https://github.com/SANDIP-GHOSH-10/hotel-booking-app",
    },
    {
        title: "My Portfolio",
        description: "Tis is my portfolio website project involves creating a digital platform to showcase an individual's work, skills, and experiences, serving as a centralized and easily accessible online portfolio",
        image: "../../../../myp.png",
        github: "https://github.com/SANDIP-GHOSH-10/myportfolio",
    }
];

const ProjectsPage = () => {
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
                <Typography variant="h3"
                    fontWeight="bold"
                    gutterBottom
                    textAlign="center"
                    sx={{ color: "white" }}>
                    My Projects
                </Typography>

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        style={{ marginBottom: "2rem" }}
                    >
                        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255, 255, 255, 0.1)" }}>
                            <Grid container spacing={4} alignItems="center">
                                {/* Left Side - Project Image */}
                                <Grid item xs={12} md={6}>
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: "70%",
                                            borderRadius: "10px",
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                    />
                                </Grid>

                                {/* Right Side - Project Details */}
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "orange" }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ opacity: 0.9, mb: 3, color: "#E0E0E0" }}>
                                        {project.description}
                                    </Typography>

                                    {/* GitHub Button */}
                                    <Button
                                        variant="contained"
                                        sx={{ bgcolor: "#ff9800", color: "white", fontWeight: "bold", gap: 1 }}
                                        href={project.github}
                                        target="_blank"
                                    >
                                        <GitHubIcon />   GitHub
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </motion.div>
                ))}
            </Container>
        </Box>
    );
};

export default ProjectsPage;
