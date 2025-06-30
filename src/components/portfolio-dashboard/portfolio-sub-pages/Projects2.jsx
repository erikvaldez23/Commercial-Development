import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Button,
  LinearProgress,
  Fade,
  Grow,
  createTheme,
  useTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { LocationOn, ArrowForward } from "@mui/icons-material";

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

// Mock data
const projectsData = [
  {
    id: 1,
    name: "Lagos Tower",
    location: "Lagos, Nigeria",
    phase: "Design",
    progress: 72,
    budget: "$2.5M",
    timeline: "30.95 - 29.25",
    status: "Active",
    color: "#c9b49a",
    description: "Modern commercial tower with sustainable features",
  },
  {
    id: 2,
    name: "Marina Complex",
    location: "Victoria Island, Lagos",
    phase: "Construction",
    progress: 45,
    budget: "$4.2M",
    timeline: "31.05 - 32.12",
    status: "Active",
    color: "#c9b49a",
    description: "Mixed-use development with retail and office spaces",
  },
  {
    id: 3,
    name: "Green Plaza",
    location: "Abuja, Nigeria",
    phase: "Planning",
    progress: 15,
    budget: "$1.8M",
    timeline: "31.08 - 33.02",
    status: "Pending",
    color: "#c9b49a",
    description: "Eco-friendly commercial plaza with green technologies",
  },
  {
    id: 4,
    name: "Tech Hub Center",
    location: "Ikeja, Lagos",
    phase: "Permits",
    progress: 30,
    budget: "$3.1M",
    timeline: "31.03 - 32.08",
    status: "Review",
    color: "#c9b49a",
    description: "Technology center for startups and innovation",
  },
];

const ProjectsPage = ({ onNavigate }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <ThemeProvider theme={appleTheme}>
      <CssBaseline />
      <Box
        sx={{
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
            height: "100vh",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 149, 0, 0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ py: 12 }}>
          <Fade in={visible} timeout={1000}>
            <Box mb={4}>
              <Typography variant="h3" fontWeight={300} color="white" mb={1}>
                All Projects
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Manage and monitor all your development projects
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={3}>
            {projectsData.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.id}>
                <Grow
                  in={visible}
                  timeout={800}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
                      }}
                    />

                    <CardContent sx={{ p: 3 }}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="start"
                        mb={2}
                      >
                        <Avatar
                          sx={{
                            background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                            width: 48,
                            height: 48,
                          }}
                        >
                          <LocationOn />
                        </Avatar>
                        <Chip
                          label={project.status}
                          size="small"
                          sx={{
                            background:
                              project.status === "Active"
                                ? "linear-gradient(135deg, #34C759, #34C759CC)"
                                : "rgba(255, 255, 255, 0.1)",
                            color: "white",
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h6"
                        fontWeight={500}
                        color="white"
                        mb={1}
                      >
                        {project.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" mb={2}>
                        {project.location}
                      </Typography>

                      <Typography variant="body2" color="text.primary" mb={3}>
                        {project.description}
                      </Typography>

                      <Box mb={3}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mb={1}
                        >
                          <Typography variant="caption" color="text.secondary">
                            Progress
                          </Typography>
                          <Typography variant="caption" color="white">
                            {project.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                          sx={{
                            "& .MuiLinearProgress-bar": {
                              background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
                            },
                          }}
                        />
                      </Box>

                      <Box display="flex" gap={1} mb={3} flexWrap="wrap">
                        <Chip
                          label={project.phase}
                          size="small"
                          sx={{
                            background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                            color: "white",
                            border: `1px solid ${project.color}60`,
                          }}
                        />
                        <Chip
                          label={project.budget}
                          size="small"
                          variant="outlined"
                          sx={{
                            color: "white",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        />
                      </Box>

                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        mb={2}
                      >
                        Timeline: {project.timeline}
                      </Typography>

                      <Button
                        fullWidth
                        endIcon={<ArrowForward />}
                        sx={{
                          background: `#c9b49a`,
                          color: "white",
                          border: `1px solid ${project.color}60`,
                          "&:hover": {
                            background: `linear-gradient(135deg, ${project.color}60, ${project.color}40)`,
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectsPage;
