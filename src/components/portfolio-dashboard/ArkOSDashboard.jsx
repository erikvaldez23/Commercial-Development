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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Fade,
  Grow,
  Zoom,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Badge,
  Divider,
  Stack,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  LocationOn,
  WbSunny,
  DirectionsCar,
  Business,
  Person,
  FlashOn,
  ArrowForward,
  Group,
  FolderOpen,
  Home,
  ArrowBack,
  Phone,
  Email,
  LinkedIn,
  Schedule,
  TrendingUp,
  Assignment,
} from "@mui/icons-material";
import CallToAction from "../key-components/CallToAction";
import { useNavigate } from "react-router-dom";

// Apple-inspired Material UI theme
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
    color: "#FF9500",
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
    color: "#007AFF",
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
    color: "#34C759",
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
    color: "#5AC8FA",
    description: "Technology center for startups and innovation",
  },
];

const stakeholdersData = [
  {
    id: 1,
    name: "Adebayo Johnson",
    avatar: "AJ",
    role: "City Planner",
    department: "Architecture",
    color: "#007AFF",
    email: "a.johnson@arkos.com",
    phone: "+234 801 234 5678",
    projects: ["Lagos Tower", "Marina Complex"],
    experience: "8 years",
    specialization: "Urban Planning & Design",
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "SC",
    role: "Senior Engineer",
    department: "Technical",
    color: "#34C759",
    email: "s.chen@arkos.com",
    phone: "+234 802 345 6789",
    projects: ["Green Plaza", "Tech Hub Center"],
    experience: "12 years",
    specialization: "Structural Engineering",
  },
  {
    id: 3,
    name: "Michael Okafor",
    avatar: "MO",
    role: "ESG Specialist",
    department: "Consultation",
    color: "#FF9500",
    email: "m.okafor@arkos.com",
    phone: "+234 803 456 7890",
    projects: ["Lagos Tower", "Green Plaza"],
    experience: "6 years",
    specialization: "Environmental Sustainability",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    avatar: "LT",
    role: "Project Manager",
    department: "Operations",
    color: "#FF3B30",
    email: "l.thompson@arkos.com",
    phone: "+234 804 567 8901",
    projects: ["Marina Complex", "Tech Hub Center"],
    experience: "10 years",
    specialization: "Project Management & Operations",
  },
];

// Main Dashboard Component (original with navigation buttons)
const DashboardPage = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleStakeholders = () => {
    navigate("/portfolio/stakeholders");
  };

  const handleProjects = () => {
    navigate("/portfolio/projects");
  };

  const stakeholders = [
    {
      name: "City Planner",
      avatar: "CP",
      role: "Architecture",
      color: "#007AFF",
    },
    { name: "Engineer", avatar: "EN", role: "Technical", color: "#34C759" },
    {
      name: "Specialist",
      avatar: "SP",
      role: "Consultation",
      color: "#FF9500",
    },
    { name: "Manager", avatar: "MG", role: "Operations", color: "#FF3B30" },
  ];

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setProgress(72), 800);
    return () => clearTimeout(timer);
  }, []);

  const HeaderMetric = ({
    label,
    value,
    color = "text.primary",
    highlight = false,
    delay = 0,
  }) => (
    <Fade in={visible} timeout={1000}>
      <Box
        textAlign="center"
        sx={{
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            mb: 0.5,
            opacity: highlight ? 1 : 0.7,
            transition: "opacity 0.3s ease",
            fontSize: "1.5rem",
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={highlight ? 600 : 500}
          color={color}
          sx={{
            background: highlight
              ? "linear-gradient(45deg, #007AFF, #5AC8FA)"
              : "inherit",
            backgroundClip: highlight ? "text" : "inherit",
            WebkitBackgroundClip: highlight ? "text" : "inherit",
            WebkitTextFillColor: highlight ? "transparent" : "inherit",
            fontSize: "1.5rem",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Fade>
  );

  const SimulationCard = ({ icon: Icon, label, color = "primary", index }) => (
    <Zoom
      in={visible}
      timeout={800}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Box
        sx={{
          textAlign: "center",
          minHeight: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          cursor: "pointer",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: 3,
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <CardContent sx={{ py: 3 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${appleTheme.palette[color].main}, ${appleTheme.palette[color].light})`,
              mb: 2,
              boxShadow: `0 8px 32px ${appleTheme.palette[color].main}40`,
            }}
          >
            <Icon sx={{ color: "white", fontSize: 28 }} />
          </Box>
          <Typography
            variant="body2"
            fontWeight={500}
            sx={{
              color: "white",
            }}
          >
            {label}
          </Typography>
        </CardContent>
      </Box>
    </Zoom>
  );

  const CustomCircularProgress = ({ value, size = 80 }) => (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={3}
        sx={{
          color: "rgba(255, 255, 255, 0.1)",
          position: "absolute",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        thickness={3}
        sx={{
          color: "transparent",
          "& .MuiCircularProgress-circle": {
            stroke: "url(#gradient)",
            strokeLinecap: "round",
            transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white">
          {Math.round(progress)}
        </Typography>
      </Box>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#007AFF" />
            <stop offset="100%" stopColor="#5AC8FA" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 15 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={6}
      >
        <Fade in={visible} timeout={1000}>
          <Box display="flex" alignItems="center" gap={3}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                boxShadow: "0 8px 32px #5EC1E3",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src="/blue-logo.png"
                alt="logo"
                style={{
                  width: "80%",
                  height: "80%",
                  objectFit: "contain",
                }}
              />
            </Avatar>
            <Typography variant="h2" fontWeight={300} color="white">
              ArkOS
            </Typography>
          </Box>
        </Fade>

        <Box display="flex" gap={6}>
          <HeaderMetric
            label="ESS Score"
            value="72"
            color="success.main"
            delay={200}
          />
          <HeaderMetric
            label="Active Projects"
            value="12"
            color="info.main"
            delay={400}
          />
          <HeaderMetric
            label="Project Phase"
            value="Design"
            color="primary.main"
            delay={600}
          />
          <HeaderMetric
            label="Progress"
            value="55%"
            color="warning.main"
            delay={800}
          />
        </Box>
      </Box>

      {/* Quick Action Cards */}
      <Box mb={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grow
              in={visible}
              timeout={1000}
              style={{ transitionDelay: "400ms" }}
            >
              <Card
                sx={{
                  p: 4,
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(90, 200, 250, 0.05))",
                  border: "1px solid rxgba(0, 122, 255, 0.2)",
                  borderRadius: 20,
                }}
                onClick={handleProjects}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center" gap={3}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                        boxShadow: "0 8px 32px rgba(0, 122, 255, 0.3)",
                      }}
                    >
                      <FolderOpen sx={{ fontSize: 28 }} />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        color="white"
                        mb={1}
                      >
                        View All Projects
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Manage {projectsData.length} active development projects
                      </Typography>
                    </Box>
                  </Box>
                  <ArrowForward sx={{ color: "#007AFF", fontSize: 32 }} />
                </Box>
              </Card>
            </Grow>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grow
              in={visible}
              timeout={1000}
              style={{ transitionDelay: "500ms" }}
            >
              <Card
                sx={{
                  p: 4,
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(255, 173, 51, 0.05))",
                  border: "1px solid rgba(255, 149, 0, 0.2)",
                  borderRadius: 20,
                }}
                // onClick={() => onNavigate("stakeholders")}
                onClick={handleStakeholders}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center" gap={3}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        background: "linear-gradient(135deg, #FF9500, #FFAD33)",
                        boxShadow: "0 8px 32px rgba(255, 149, 0, 0.3)",
                      }}
                    >
                      <Group sx={{ fontSize: 28 }} />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={500}
                        color="white"
                        mb={1}
                      >
                        Team Stakeholders
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Connect with {stakeholdersData.length} team members
                      </Typography>
                    </Box>
                  </Box>
                  <ArrowForward sx={{ color: "#FF9500", fontSize: 32 }} />
                </Box>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Box>

      {/* All Projects Section */}
      <Box mb={6}>
        <Fade in={visible} timeout={1200} style={{ transitionDelay: "600ms" }}>
          <Typography
            sx={{
              fontSize: "5rem",
              fontStyle: "italic",
              textAlign: "center",
              mb: 2,
            }}
          >
            PROJECT SPOTLIGHT
          </Typography>
        </Fade>

        {/* Enhanced Map Area */}
        <Grow in={visible} timeout={1200} style={{ transitionDelay: "600ms" }}>
          <Paper
            sx={{
              minHeight: 600,
              background: "url(/commercial-mock1.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 4,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(0, 122, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 149, 0, 0.05) 0%, transparent 50%)",
              },
            }}
          >
            {/* Text Overlay */}
            <Box position="absolute" sx={{ zIndex: 2, top: 0, mt: 2 }}>
              <Paper
                sx={{
                  p: 3,
                  width: 1000,
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
                  Lagos Tower
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                  fontSize="2rem"
                >
                  Lagos, Nigeria
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Grow>
      </Box>

      {/* Bottom Grid */}
      <Grid container spacing={4}>
        {/* Region & Timeline */}
        <Grid item xs={12} md={3}>
          <Grow
            in={visible}
            timeout={1000}
            style={{ transitionDelay: "800ms" }}
          >
            <Paper
              sx={{
                p: 4,
                height: "100%",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
              }}
            >
              {/* Timeline */}
              <Box mb={4}>
                <Typography
                  variant="h1"
                  fontWeight={400}
                  color="white"
                  mb={2}
                  sx={{ fontSize: "2rem" }}
                >
                  Project Timeline
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  mb={2}
                  display="block"
                  sx={{ fontSize: "1rem" }}
                >
                  3 Months until completion
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{ mb: 3 }}
                />
                <Box display="flex" gap={1} flexWrap="wrap">
                  <Chip
                    label="Funding"
                    size="small"
                    variant="outlined"
                    sx={{ color: "#000" }}
                  />
                  <Chip
                    label="Design"
                    size="small"
                    sx={{
                      background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                      color: "#000",
                      boxShadow: "0 4px 16px rgba(0, 122, 255, 0.3)",
                    }}
                  />
                  <Chip
                    label="Permits"
                    size="small"
                    variant="outlined"
                    sx={{ color: "#000" }}
                  />
                  <Chip
                    label="Construction"
                    size="small"
                    variant="outlined"
                    sx={{ color: "#000" }}
                  />
                  <Chip
                    label="Leasing"
                    size="small"
                    variant="outlined"
                    sx={{ color: "#000" }}
                  />
                </Box>
              </Box>

              {/* Budget & ESG */}
              <Box>
                <Typography variant="h6" fontWeight={400} color="white" mb={3}>
                  Budget & ESG
                </Typography>
                <Box display="flex" alignItems="center" gap={3}>
                  <CustomCircularProgress value={72} />
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mb={1}
                    >
                      Regrouping
                    </Typography>
                    <Typography variant="h4" fontWeight={500} color="white">
                      55%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grow>
        </Grid>

        {/* Simulations */}
        <Grid item xs={12} md={3}>
          <Grow
            in={visible}
            timeout={1000}
            style={{ transitionDelay: "900ms" }}
          >
            <Box
              sx={{
                p: 4,
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Typography
                variant="h1"
                fontWeight={400}
                color="white"
                mb={2}
                sx={{ fontSize: "2rem" }}
              >
                Documents
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SimulationCard
                    icon={Business}
                    label="Zoning"
                    color="success"
                    index={2}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SimulationCard
                    icon={Business}
                    label="Planning"
                    color="primary"
                    index={3}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SimulationCard
                    icon={Business}
                    label="Permits"
                    color="primary"
                    index={3}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SimulationCard
                    icon={Business}
                    label="Performance Metrics"
                    color="primary"
                    index={3}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grow>
        </Grid>

        {/* Stakeholders */}
        <Grid item xs={12} md={3}>
          <Grow
            in={visible}
            timeout={1000}
            style={{ transitionDelay: "1000ms" }}
          >
            <Paper
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color="white"
                  sx={{ fontSize: "2rem" }}
                >
                  Team
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => onNavigate("stakeholders")}
                  sx={{ color: "#007AFF" }}
                >
                  <ArrowForward />
                </IconButton>
              </Box>
              <Grid container spacing={3}>
                {stakeholders.map((person, index) => (
                  <Grid item xs={6} key={index}>
                    <Zoom
                      in={visible}
                      timeout={800}
                      style={{ transitionDelay: `${1200 + index * 100}ms` }}
                    >
                      <Box textAlign="center" sx={{ cursor: "pointer" }}>
                        <Avatar
                          sx={{
                            mx: "auto",
                            mb: 1.5,
                            width: 48,
                            height: 48,
                            background: `linear-gradient(135deg, ${person.color}, ${person.color}CC)`,
                            boxShadow: `0 8px 32px ${person.color}40`,
                            fontSize: "0.875rem",
                            fontWeight: 600,
                          }}
                        >
                          {person.avatar}
                        </Avatar>
                        <Typography
                          variant="caption"
                          color="text.primary"
                          display="block"
                          fontWeight={500}
                        >
                          {person.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontSize="0.7rem"
                        >
                          {person.role}
                        </Typography>
                      </Box>
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grow>
        </Grid>

        {/* Automation */}
        <Grid item xs={12} md={3}>
          <Grow
            in={visible}
            timeout={1000}
            style={{ transitionDelay: "1100ms" }}
          >
            <Paper
              sx={{
                p: 4,
                height: "100%",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={400}
                color="white"
                mb={3}
                sx={{ fontSize: "2rem" }}
              >
                Messages
              </Typography>
              <Paper
                sx={{
                  p: 3,
                  background:
                    "linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(90, 200, 250, 0.05))",
                  border: "1px solid rgba(0, 122, 255, 0.2)",
                }}
              >
                <Box display="flex" gap={2} alignItems="flex-start">
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                      boxShadow: "0 8px 32px rgba(0, 122, 255, 0.3)",
                    }}
                  >
                    <FlashOn sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box flex={1}>
                    <Chip
                      label="Suggestion"
                      size="small"
                      sx={{
                        background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                        color: "white",
                        mb: 1.5,
                        fontWeight: 500,
                      }}
                    />
                    <Typography variant="body2" color="black" lineHeight={1.5}>
                      Final completion has been accelerated by a month
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Paper>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );
};

// Main App Component with Routing
const AppleArkOSDashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <ProjectsPage onNavigate={handleNavigate} />;
      case "stakeholders":
        return <StakeholdersPage onNavigate={handleNavigate} />;
      default:
        return <DashboardPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider theme={appleTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
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
        {renderPage()}
        <CallToAction />
      </Box>
    </ThemeProvider>
  );
};

export default AppleArkOSDashboard;
