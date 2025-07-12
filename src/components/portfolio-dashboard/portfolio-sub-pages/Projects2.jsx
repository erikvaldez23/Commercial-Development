import React, { useState, useEffect, useMemo } from "react";
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
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { LocationOn, ArrowForward } from "@mui/icons-material";
import FilterBar from "../Filter";
import { useNavigate, useParams } from "react-router-dom";
import ProjectDetailsModal from "./ProjectDetailsModal";

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
          border: "rgba(255, 255, 255, 0.4)",
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

const projectsData = [
  {
    id: 1,
    name: "Lagos Tower",
    location: "Lagos, Nigeria",
    phase: "Design",
    progress: 72,
    budget: "$2.5M",
    timeline: "1 Month Out",
    status: "Active",
    color: "#c9b49a",
    size: "15,000 sq ft",
    investment: "$1.2M",
    description: "Modern commercial tower with sustainable features",
    category: "Office",
    image: "/commercial-mock1.jpeg",
    stakeholders: [
      { name: "Person 1", role: "Role" },
      { name: "Person 2", role: "Role" },
    ],
  },
  {
    id: 2,
    name: "Marina Complex",
    location: "Victoria Island, Lagos",
    phase: "Construction",
    progress: 45,
    budget: "$4.2M",
    timeline: "5 Months Out",
    status: "Active",
    color: "#c9b49a",
    size: "32,000 sq ft",
    investment: "$2.8M",
    description: "Mixed-use development with retail and office spaces",
    category: "Mixed-Use",
    stakeholders: [
      { name: "Person 1", role: "Role" },
      { name: "Person 2", role: "Role" },
    ],
  },
  {
    id: 3,
    name: "Green Plaza",
    location: "Abuja, Nigeria",
    phase: "Planning",
    progress: 15,
    budget: "$1.8M",
    timeline: "8 Month Out",
    status: "Pending",
    color: "#c9b49a",
    size: "32,000 sq ft",
    investment: "$2.8M",
    description: "Eco-friendly commercial plaza with green technologies",
    category: "Retail",
    stakeholders: [
      { name: "Person 1", role: "Role" },
      { name: "Person 2", role: "Role" },
    ],
  },
  {
    id: 4,
    name: "Tech Hub Center",
    location: "Ikeja, Lagos",
    phase: "Permits",
    progress: 30,
    budget: "$3.1M",
    timeline: "11 Month Out",
    status: "Review",
    color: "#c9b49a",
    size: "32,000 sq ft",
    investment: "$2.8M",
    description: "Technology center for startups and innovation",
    category: "Office",
    stakeholders: [
      { name: "Person 1", role: "Role" },
      { name: "Person 2", role: "Role" },
    ],
  },
  {
    id: 5,
    name: "Industrial Park",
    location: "Ogun State, Nigeria",
    phase: "Construction",
    progress: 60,
    budget: "$5.5M",
    timeline: "1 Year Out",
    status: "Active",
    color: "#c9b49a",
    size: "45,000 sq ft",
    investment: "$3.2M",
    description: "Modern industrial facility with logistics center",
    category: "Industrial",
    stakeholders: [
      { name: "Person 1", role: "Role" },
      { name: "Person 2", role: "Role" },
    ],
  },
  {
    id: 6,
    name: "Shopping District",
    location: "Port Harcourt, Nigeria",
    phase: "Design",
    progress: 25,
    budget: "$3.8M",
    timeline: "1 Year Out",
    status: "Pending",
    color: "#c9b49a",
    size: "28,000 sq ft",
    investment: "$2.1M",
    description: "Premium retail and entertainment complex",
    category: "Retail",
    stakeholders: [
      { name: "Person 1", role: "Role" },
      { name: "Person 2", role: "Role" },
    ],
  },
];

const ProjectsPage = ({ onNavigate }) => {
  const { projectId } = useParams();
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState({
    category: "All",
    status: "All Statuses",
    phase: "All Phases",
    search: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handleStatusChange = (status) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  const handlePhaseChange = (phase) => {
    setFilters((prev) => ({ ...prev, phase }));
  };

  const handleSearchChange = (search) => {
    setFilters((prev) => ({ ...prev, search }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: "All",
      status: "All Statuses",
      phase: "All Phases",
      search: "",
    });
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      if (filters.category !== "All" && project.category !== filters.category)
        return false;

      if (
        filters.status !== "All Statuses" &&
        project.status !== filters.status
      )
        return false;

      if (filters.phase !== "All Phases" && project.phase !== filters.phase)
        return false;

      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return (
          project.name.toLowerCase().includes(searchLower) ||
          project.location.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.category.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [filters]);

  return (
    <ThemeProvider theme={appleTheme}>
      <CssBaseline />
      <Box
        sx={{
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          pt: 10,
          minHeight: "100vh",
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
        <Container maxWidth="xl" sx={{ py: 6 }}>
          <Fade in={visible} timeout={1000}>
            <Box mb={4}>
              <Typography variant="h3" fontWeight={300} color="white" mb={1}>
                All Projects
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Manage and monitor all your development projects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {filteredProjects.length} of {projectsData.length} projects
                displayed
              </Typography>
            </Box>
          </Fade>

          <FilterBar
            onCategoryChange={handleCategoryChange}
            onStatusChange={handleStatusChange}
            onPhaseChange={handlePhaseChange}
            onSearchChange={handleSearchChange}
            onClearFilters={handleClearFilters}
          />

          {filteredProjects.length === 0 ? (
            <Fade in timeout={500}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                py={8}
                sx={{
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" color="text.secondary" mb={2}>
                  No projects found
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                  Try adjusting your filters or search terms
                </Typography>
                <Button
                  onClick={handleClearFilters}
                  variant="outlined"
                  sx={{
                    borderColor: "#c9b49a",
                    color: "#c9b49a",
                    "&:hover": {
                      backgroundColor: "rgba(201, 180, 154, 0.1)",
                      borderColor: "#c9b49a",
                    },
                  }}
                >
                  Clear All Filters
                </Button>
              </Box>
            </Fade>
          ) : (
            <Grid container spacing={3}>
              {filteredProjects.map((project, index) => (
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
                          <Box
                            display="flex"
                            flexDirection="column"
                            gap={0.5}
                            alignItems="end"
                            sx={{ width: "70px" }}
                          >
                            <Chip
                              label={project.status}
                              size="small"
                              sx={{
                                background:
                                  project.status === "Active"
                                    ? "linear-gradient(135deg, #34C759, #34C759CC)"
                                    : project.status === "Pending"
                                    ? "linear-gradient(135deg, #FF9500, #FF9500CC)"
                                    : "linear-gradient(135deg, #FF3B30, #FF3B30CC)",
                                color: "white",
                                width: "100%",
                                border: "rgba(255, 255, 255, 0.4)",
                              }}
                            />
                            <Chip
                              label={project.category}
                              size="small"
                              variant="outlined"
                              sx={{
                                background: "#000",
                                color: "rgba(255, 255, s255, 0.7)",
                                border: "rgba(255, 255, 255, 0.4)",
                                fontSize: "0.7rem",
                                width: "100%",
                              }}
                            />
                          </Box>
                        </Box>

                        <Typography
                          variant="h4"
                          fontWeight={500}
                          color="white"
                          mb={1}
                        >
                          {project.name}
                        </Typography>

                        <Typography
                          variant="body1"
                          color="text.secondary"
                          mb={2}
                        >
                          {project.location}
                        </Typography>

                        <Typography variant="body1" color="text.primary" mb={3}>
                          {project.description}
                        </Typography>

                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mb={2}
                        >
                          <Typography variant="body1" color="text.secondary">
                            Size: {project.size}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            Investment: {project.investment}
                          </Typography>
                        </Box>

                        <Box mb={3}>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            mb={1}
                          >
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
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
                              background: `#000`,
                              color: "white",
                              border: "rgba(255, 255, 255, 0.8)",
                            }}
                          />
                          <Chip
                            label={project.budget}
                            size="small"
                            variant="outlined"
                            sx={{
                              color: "white",
                              background: "#000",
                              borderColor: "rgba(255, 255, 255, 0.8)",
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
                              transform: "translateY(-2px)",
                              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                            },
                          }}
                          onClick={() => handleProjectClick(project)}
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Results Summary */}
          {filteredProjects.length > 0 && (
            <Fade in timeout={1000}>
              <Box
                mt={6}
                p={3}
                sx={{
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Showing {filteredProjects.length} projects
                  {filters.category !== "All" && ` in ${filters.category}`}
                  {filters.status !== "All Statuses" &&
                    ` with ${filters.status} status`}
                  {filters.phase !== "All Phases" &&
                    ` in ${filters.phase} phase`}
                  {filters.search && ` matching "${filters.search}"`}
                </Typography>
              </Box>
            </Fade>
          )}
        </Container>
      </Box>
      {selectedProject && (
        <ProjectDetailsModal
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          project={selectedProject}
        />
      )}
    </ThemeProvider>
  );
};

export default ProjectsPage;
