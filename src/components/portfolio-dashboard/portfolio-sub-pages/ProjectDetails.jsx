import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Chip,
  LinearProgress,
  CircularProgress,
  Card,
  CardContent,
  Container,
  ThemeProvider,
  CssBaseline,
  Button,
  Fade,
  Grow,
  Zoom,
  useTheme, 
  createTheme
} from "@mui/material";
import {
  WbSunny,
  DirectionsCar,
  Business,
  FlashOn,
  Group,
  FolderOpen,
  ArrowForward,
} from "@mui/icons-material";
import CallToAction from "../../key-components/CallToAction";
import { useNavigate } from "react-router-dom";

// ✅ Your Apple Theme (keep your existing appleTheme here)
const appleTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    primary: {
      main: "#007AFF",
      light: "#5AC8FA",
      dark: "#0051D5",
    },
    secondary: {
      main: "#FF9500",
      light: "#FFAD33",
      dark: "#CC7700",
    },
    success: {
      main: "#34C759",
    },
    warning: {
      main: "#FF9500",
    },
    error: {
      main: "#FF3B30",
    },
    info: {
      main: "#5AC8FA",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 300,
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 400,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 400,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 500,
      letterSpacing: "-0.015em",
    },
    h6: {
      fontWeight: 500,
      letterSpacing: "-0.015em",
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.4,
    },
    caption: {
      fontWeight: 500,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            transform: "translateY(-2px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            transform: "scale(1.02)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 500,
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 6,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
        bar: {
          borderRadius: 8,
          background: "linear-gradient(90deg, #007AFF 0%, #5AC8FA 100%)",
        },
      },
    },
  },
});

// ✅ Projects Data
const projectsData = [
  {
    id: 1,
    name: "Lagos Tower",
    location: "Lagos, Nigeria",
    phase: "Design",
    progress: 72,
    timeline: "30.95 - 29.25",
  },
  {
    id: 2,
    name: "Marina Complex",
    location: "Victoria Island, Lagos",
    phase: "Construction",
    progress: 45,
    timeline: "31.05 - 32.12",
  },
  {
    id: 3,
    name: "Green Plaza",
    location: "Abuja, Nigeria",
    phase: "Planning",
    progress: 15,
    timeline: "31.08 - 33.02",
  },
];

// ✅ Dashboard Page (Dynamic)
const DashboardPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
   const { projectId } = useParams();
  const selectedProjectId = Number(projectId);  // Convert to 

  const activeProject =
    projects.find((p) => p.id === selectedProjectId) || projects[0];

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setProgress(activeProject.progress), 800);
    return () => clearTimeout(timer);
  }, [activeProject]);

  return (
    <Container maxWidth="xl" sx={{ py: 15 }}>
      {/* Project Selector */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" color="white" mb={2}>
          Select Project:
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid item key={project.id}>
              <Button
                variant={project.id === activeProject.id ? "contained" : "outlined"}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&.MuiButton-contained": {
                    background:
                      "linear-gradient(135deg, #007AFF, #5AC8FA)",
                  },
                }}
                onClick={() => onProjectSelect(project.id)}
              >
                {project.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Overview */}
      <Grow in={visible} timeout={1200}>
        <Paper
          sx={{
            minHeight: 500,
            background: "url(/commercial-mock1.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderRadius: 4,
          }}
        >
          <Box position="absolute" sx={{ zIndex: 2, top: 0, mt: 2, width: "100%" }}>
            <Paper
              sx={{
                p: 3,
                mx: "auto",
                width: "80%",
                backdropFilter: "blur(10px)",
                borderRadius: 20,
              }}
            >
              <Typography
                variant="h1"
                fontSize="3rem"
                fontWeight={500}
                color="white"
                mb={1}
                textAlign="center"
              >
                {activeProject.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                fontSize="2rem"
              >
                {activeProject.location}
              </Typography>
              <Typography
                variant="body2"
                color="white"
                textAlign="center"
                fontSize="1.25rem"
                mt={2}
              >
                Phase: {activeProject.phase}
              </Typography>
              <Typography
                variant="body2"
                color="white"
                textAlign="center"
                fontSize="1.25rem"
              >
                Timeline: {activeProject.timeline}
              </Typography>
            </Paper>
          </Box>
        </Paper>
      </Grow>

      {/* Progress Bar */}
      <Box mt={6}>
        <Typography variant="h6" color="white" mb={2}>
          Project Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            "& .MuiLinearProgress-bar": {
              background:
                "linear-gradient(90deg, #007AFF 0%, #5AC8FA 100%)",
            },
          }}
        />
        <Typography variant="h5" color="white" mt={1}>
          {progress}%
        </Typography>
      </Box>
    </Container>
  );
};

// ✅ Main App
const ProjectDetails = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(projectsData[0].id);

  return (
    <ThemeProvider theme={appleTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      >
      <DashboardPage
          projects={projectsData}
          selectedProjectId={selectedProjectId}
          onProjectSelect={() => {}}
        />
        <CallToAction />
      </Box>
    </ThemeProvider>
  );
};

export default ProjectDetails;
