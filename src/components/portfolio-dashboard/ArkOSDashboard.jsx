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


// Projects Page Component
// const ProjectsPage = ({ onNavigate }) => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   return (
//     <Container maxWidth="xl" sx={{ py: 12 }}>
//       <Fade in={visible} timeout={1000}>
//         <Box mb={4}>
//           <Typography variant="h3" fontWeight={300} color="white" mb={1}>
//             All Projects
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Manage and monitor all your development projects
//           </Typography>
//         </Box>
//       </Fade>

//       <Grid container spacing={3}>
//         {projectsData.map((project, index) => (
//           <Grid item xs={12} md={6} lg={4} key={project.id}>
//             <Grow
//               in={visible}
//               timeout={800}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               <Card
//                 sx={{
//                   height: "100%",
//                   cursor: "pointer",
//                   position: "relative",
//                   overflow: "hidden",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: 4,
//                     background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
//                   }}
//                 />
                
//                 <CardContent sx={{ p: 3 }}>
//                   <Box display="flex" justifyContent="space-between" alignItems="start" mb={2}>
//                     <Avatar
//                       sx={{
//                         background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
//                         width: 48,
//                         height: 48,
//                       }}
//                     >
//                       <LocationOn />
//                     </Avatar>
//                     <Chip
//                       label={project.status}
//                       size="small"
//                       sx={{
//                         background: project.status === "Active" 
//                           ? "linear-gradient(135deg, #34C759, #34C759CC)"
//                           : "rgba(255, 255, 255, 0.1)",
//                         color: "white",
//                       }}
//                     />
//                   </Box>

//                   <Typography variant="h6" fontWeight={500} color="white" mb={1}>
//                     {project.name}
//                   </Typography>
                  
//                   <Typography variant="body2" color="text.secondary" mb={2}>
//                     {project.location}
//                   </Typography>

//                   <Typography variant="body2" color="text.primary" mb={3}>
//                     {project.description}
//                   </Typography>

//                   <Box mb={3}>
//                     <Box display="flex" justifyContent="space-between" mb={1}>
//                       <Typography variant="caption" color="text.secondary">
//                         Progress
//                       </Typography>
//                       <Typography variant="caption" color="white">
//                         {project.progress}%
//                       </Typography>
//                     </Box>
//                     <LinearProgress
//                       variant="determinate"
//                       value={project.progress}
//                       sx={{
//                         "& .MuiLinearProgress-bar": {
//                           background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
//                         },
//                       }}
//                     />
//                   </Box>

//                   <Box display="flex" gap={1} mb={3} flexWrap="wrap">
//                     <Chip
//                       label={project.phase}
//                       size="small"
//                       sx={{
//                         background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
//                         color: "white",
//                         border: `1px solid ${project.color}60`,
//                       }}
//                     />
//                     <Chip
//                       label={project.budget}
//                       size="small"
//                       variant="outlined"
//                       sx={{ color: "white", borderColor: "rgba(255, 255, 255, 0.3)" }}
//                     />
//                   </Box>

//                   <Typography variant="caption" color="text.secondary" display="block" mb={2}>
//                     Timeline: {project.timeline}
//                   </Typography>

//                   <Button
//                     fullWidth
//                     endIcon={<ArrowForward />}
//                     sx={{
//                       background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
//                       color: "white",
//                       border: `1px solid ${project.color}60`,
//                       "&:hover": {
//                         background: `linear-gradient(135deg, ${project.color}60, ${project.color}40)`,
//                       },
//                     }}
//                   >
//                     View Details
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grow>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// Stakeholders Page Component
// const StakeholdersPage = ({ onNavigate }) => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   return (
//     <Container maxWidth="xl" sx={{ py: 12 }}>
//       <Fade in={visible} timeout={1000}>
//         <Box mb={4}>
//           <Typography variant="h3" fontWeight={300} color="white" mb={1}>
//             Stakeholders
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Connect with team members and project stakeholders
//           </Typography>
//         </Box>
//       </Fade>

//       <Grid container spacing={4}>
//         {stakeholdersData.map((stakeholder, index) => (
//           <Grid item xs={12} md={6} lg={4} key={stakeholder.id}>
//             <Grow
//               in={visible}
//               timeout={800}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               <Card
//                 sx={{
//                   height: "100%",
//                   cursor: "pointer",
//                   position: "relative",
//                 }}
//               >
//                 <CardContent sx={{ p: 4 }}>
//                   <Box display="flex" alignItems="center" mb={3}>
//                     <Avatar
//                       sx={{
//                         width: 64,
//                         height: 64,
//                         background: `linear-gradient(135deg, ${stakeholder.color}, ${stakeholder.color}CC)`,
//                         boxShadow: `0 8px 32px ${stakeholder.color}40`,
//                         fontSize: "1.5rem",
//                         fontWeight: 600,
//                         mr: 3,
//                       }}
//                     >
//                       {stakeholder.avatar}
//                     </Avatar>
//                     <Box>
//                       <Typography variant="h6" fontWeight={500} color="white">
//                         {stakeholder.name}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {stakeholder.role}
//                       </Typography>
//                       <Chip
//                         label={stakeholder.department}
//                         size="small"
//                         sx={{
//                           mt: 1,
//                           background: `linear-gradient(135deg, ${stakeholder.color}40, ${stakeholder.color}20)`,
//                           color: "white",
//                           border: `1px solid ${stakeholder.color}60`,
//                         }}
//                       />
//                     </Box>
//                   </Box>

//                   <Divider sx={{ mb: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//                   <Box mb={3}>
//                     <Typography variant="subtitle2" color="white" mb={2}>
//                       Specialization
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {stakeholder.specialization}
//                     </Typography>
//                   </Box>

//                   <Box mb={3}>
//                     <Typography variant="subtitle2" color="white" mb={2}>
//                       Experience
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <Schedule sx={{ color: stakeholder.color, fontSize: 20 }} />
//                       <Typography variant="body2" color="text.secondary">
//                         {stakeholder.experience}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   <Box mb={3}>
//                     <Typography variant="subtitle2" color="white" mb={2}>
//                       Active Projects
//                     </Typography>
//                     <Stack direction="row" spacing={1} flexWrap="wrap">
//                       {stakeholder.projects.map((project, idx) => (
//                         <Chip
//                           key={idx}
//                           label={project}
//                           size="small"
//                           variant="outlined"
//                           sx={{ 
//                             color: "white", 
//                             borderColor: "rgba(255, 255, 255, 0.3)",
//                             mb: 1,
//                           }}
//                         />
//                       ))}
//                     </Stack>
//                   </Box>

//                   <Divider sx={{ mb: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

//                   <Box>
//                     <Typography variant="subtitle2" color="white" mb={2}>
//                       Contact Information
//                     </Typography>
//                     <Stack spacing={1}>
//                       <Box display="flex" alignItems="center" gap={2}>
//                         <Email sx={{ color: stakeholder.color, fontSize: 18 }} />
//                         <Typography variant="body2" color="text.secondary">
//                           {stakeholder.email}
//                         </Typography>
//                       </Box>
//                       <Box display="flex" alignItems="center" gap={2}>
//                         <Phone sx={{ color: stakeholder.color, fontSize: 18 }} />
//                         <Typography variant="body2" color="text.secondary">
//                           {stakeholder.phone}
//                         </Typography>
//                       </Box>
//                     </Stack>
//                   </Box>

//                   <Button
//                     fullWidth
//                     endIcon={<ArrowForward />}
//                     sx={{
//                       mt: 3,
//                       background: `linear-gradient(135deg, ${stakeholder.color}40, ${stakeholder.color}20)`,
//                       color: "white",
//                       border: `1px solid ${stakeholder.color}60`,
//                       "&:hover": {
//                         background: `linear-gradient(135deg, ${stakeholder.color}60, ${stakeholder.color}40)`,
//                       },
//                     }}
//                   >
//                     View Profile
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grow>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// Main Dashboard Component (original with navigation buttons)
const DashboardPage = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate()

  const handleStakeholders = () => {
    navigate("/portfolio/stakeholders")
  }

  const handleProjects = () => {
    navigate("/portfolio/projects")
  }

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
    <Fade in={visible} timeout={1000} style={{ transitionDelay: `${delay}ms` }}>
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
            fontSize: "1.5rem"
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
            fontSize: "1.5rem"
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
                boxShadow: "0 8px 32px rgba(255, 149, 0, 0.3)",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src="/Commercial-Development/greenark-logo1.png"
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
            <Grow in={visible} timeout={1000} style={{ transitionDelay: "400ms" }}>
              <Card
                sx={{
                  p: 4,
                  cursor: "pointer",
                  background: "linear-gradient(135deg, rgba(0, 122, 255, 0.1), rgba(90, 200, 250, 0.05))",
                  border: "1px solid rgba(0, 122, 255, 0.2)",
                }}
                onClick={handleProjects}
              >
                <Box display="flex" alignItems="center" justifyContent="space-between">
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
                      <Typography variant="h6" fontWeight={500} color="white" mb={1}>
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
            <Grow in={visible} timeout={1000} style={{ transitionDelay: "500ms" }}>
              <Card
                sx={{
                  p: 4,
                  cursor: "pointer",
                  background: "linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(255, 173, 51, 0.05))",
                  border: "1px solid rgba(255, 149, 0, 0.2)",
                }}
                // onClick={() => onNavigate("stakeholders")}
                onClick={handleStakeholders}
              >
                <Box display="flex" alignItems="center" justifyContent="space-between">
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
                      <Typography variant="h6" fontWeight={500} color="white" mb={1}>
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
        {/* Enhanced Map Area */}
        <Grow
          in={visible}
          timeout={1200}
          style={{ transitionDelay: "600ms" }}
        >
          <Paper
            sx={{
              minHeight: 600,
              background: "url(/Commercial-Development/map.jpg)",
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
                background: "radial-gradient(circle at 30% 30%, rgba(0, 122, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 149, 0, 0.05) 0%, transparent 50%)",
              },
            }}
          >
            {/* Central Lagos Tower */}
            <Box position="relative" textAlign="center" sx={{ zIndex: 2 }}>
              <Avatar
                sx={{
                  background: "linear-gradient(135deg, #FF9500, #FF6B00)",
                  width: 72,
                  height: 72,
                  mx: "auto",
                  mb: 3,
                  boxShadow: "0 12px 48px rgba(255, 149, 0, 0.4)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 16px 64px rgba(255, 149, 0, 0.6)",
                  },
                }}
              >
                <LocationOn sx={{ fontSize: 36, color: "white" }} />
              </Avatar>
              <Paper
                sx={{ p: 3, maxWidth: 200, backdropFilter: "blur(20px)" }}
              >
                <Typography
                  variant="h5"
                  fontWeight={500}
                  color="white"
                  mb={1}
                >
                  Lagos Tower
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
                  variant="h6"
                  fontWeight={400}
                  color="white"
                  mb={2}
                >
                  Project Timeline
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  mb={2}
                  display="block"
                >
                  30.95 - 29.25
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{ mb: 3 }}
                />
                <Box display="flex" gap={1} flexWrap="wrap">
                  <Chip
                    label="Design"
                    size="small"
                    sx={{
                      background:
                        "linear-gradient(135deg, #007AFF, #5AC8FA)",
                      color: "#000",
                      boxShadow: "0 4px 16px rgba(0, 122, 255, 0.3)",
                    }}
                  />
                  <Chip
                    label="Approvals"
                    size="small"
                    variant="outlined"
                    sx={{ color: "#000" }}
                  />
                  <Chip
                    label="Funding"
                    size="small"
                    variant="outlined"
                    sx={{ color: "#000" }}
                  />
                </Box>
              </Box>

              {/* Budget & ESG */}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color="white"
                  mb={3}
                >
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
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: 3,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={400}
                color="white"
                mb={3}
              >
                Simulations
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <SimulationCard
                    icon={WbSunny}
                    label="Sunlight"
                    color="warning"
                    index={0}
                  />
                </Grid>
                <Grid item xs={6}>
                  <SimulationCard
                    icon={DirectionsCar}
                    label="Traffic"
                    color="info"
                    index={1}
                  />
                </Grid>
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
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  color="white"
                >
                  Stakeholders
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
              >
                Automation
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
                      background:
                        "linear-gradient(135deg, #007AFF, #5AC8FA)",
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
                        background:
                          "linear-gradient(135deg, #007AFF, #5AC8FA)",
                        color: "white",
                        mb: 1.5,
                        fontWeight: 500,
                      }}
                    />
                    <Typography
                      variant="body2"
                      color="black"
                      lineHeight={1.5}
                    >
                      Add rainwater reuse to improve ESG by +12%
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