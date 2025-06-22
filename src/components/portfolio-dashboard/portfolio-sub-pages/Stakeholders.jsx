import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Chip,
  Card,
  CardContent,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Fade,
  Grow,
  Zoom,
  Button,
  IconButton,
  Tab,
  Tabs,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  ArrowBack,
  Add,
  Search,
  FilterList,
  Person,
  Business,
  Engineering,
  AccountBalance,
  Phone,
  Email,
  LocationOn,
  CalendarToday,
  TrendingUp,
  Assignment,
  Notifications,
  MoreVert,
  Edit,
  Message,
  VideoCall,
  Group,
  Star,
  Timeline,
} from "@mui/icons-material";

// Apple-inspired Material UI theme (same as dashboard)
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
            transform: "translateY(-2px)",
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
  },
});

const Stakeholders = () => {
  const [visible, setVisible] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Sample stakeholder data
  const stakeholders = [
    {
      id: 1,
      name: "Marcus Johnson",
      role: "Lead Architect",
      company: "Johnson & Associates",
      type: "architect",
      avatar: "MJ",
      color: "#007AFF",
      email: "marcus.j@johnsonarch.com",
      phone: "+1 (555) 123-4567",
      location: "Lagos, Nigeria",
      joinDate: "2024-01-15",
      projectsCount: 8,
      rating: 4.9,
      status: "active",
      specialties: ["Commercial Design", "Sustainable Architecture", "Urban Planning"],
      recentActivity: "Submitted Lagos Tower design revisions",
      investmentValue: "$2.5M",
      completedProjects: 15,
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Structural Engineer",
      company: "Chen Engineering Ltd",
      type: "engineer",
      avatar: "SC",
      color: "#34C759",
      email: "s.chen@cheneng.com",
      phone: "+1 (555) 234-5678",
      location: "Lagos, Nigeria",
      joinDate: "2024-02-20",
      projectsCount: 6,
      rating: 4.8,
      status: "active",
      specialties: ["Structural Analysis", "Foundation Design", "Seismic Engineering"],
      recentActivity: "Approved structural calculations",
      investmentValue: "$1.8M",
      completedProjects: 12,
    },
    {
      id: 3,
      name: "David Okafor",
      role: "Legal Counsel",
      company: "Okafor Legal Partners",
      type: "legal",
      avatar: "DO",
      color: "#FF9500",
      email: "d.okafor@okaforlegal.ng",
      phone: "+234 801 234 5678",
      location: "Abuja, Nigeria",
      joinDate: "2023-11-10",
      projectsCount: 12,
      rating: 4.7,
      status: "active",
      specialties: ["Real Estate Law", "Contract Negotiation", "Regulatory Compliance"],
      recentActivity: "Reviewed permit documentation",
      investmentValue: "$800K",
      completedProjects: 25,
    },
    {
      id: 4,
      name: "Emma Williams",
      role: "Project Manager",
      company: "Williams Construction",
      type: "manager",
      avatar: "EW",
      color: "#FF3B30",
      email: "emma@williamsconstruct.com",
      phone: "+1 (555) 345-6789",
      location: "Lagos, Nigeria",
      joinDate: "2024-03-05",
      projectsCount: 4,
      rating: 4.6,
      status: "active",
      specialties: ["Project Coordination", "Timeline Management", "Quality Control"],
      recentActivity: "Updated project timeline",
      investmentValue: "$3.2M",
      completedProjects: 8,
    },
    {
      id: 5,
      name: "Adebayo Adewale",
      role: "Financial Advisor",
      company: "Adewale Finance Group",
      type: "financial",
      avatar: "AA",
      color: "#5AC8FA",
      email: "adebayo@adewalegroup.ng",
      phone: "+234 802 345 6789",
      location: "Lagos, Nigeria",
      joinDate: "2023-12-01",
      projectsCount: 10,
      rating: 4.9,
      status: "active",
      specialties: ["Investment Analysis", "Risk Assessment", "Portfolio Management"],
      recentActivity: "Completed ROI analysis",
      investmentValue: "$5.1M",
      completedProjects: 20,
    },
    {
      id: 6,
      name: "Lisa Rodriguez",
      role: "Environmental Consultant",
      company: "EcoConsult Solutions",
      type: "consultant",
      avatar: "LR",
      color: "#34C759",
      email: "lisa@ecoconsult.com",
      phone: "+1 (555) 456-7890",
      location: "Remote",
      joinDate: "2024-01-20",
      projectsCount: 7,
      rating: 4.8,
      status: "active",
      specialties: ["Environmental Impact", "Sustainability", "Green Building"],
      recentActivity: "ESG assessment completed",
      investmentValue: "$1.2M",
      completedProjects: 18,
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "architect":
        return <Business />;
      case "engineer":
        return <Engineering />;
      case "legal":
        return <AccountBalance />;
      case "manager":
        return <Person />;
      case "financial":
        return <TrendingUp />;
      case "consultant":
        return <Assignment />;
      default:
        return <Person />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "#34C759";
      case "inactive":
        return "#FF3B30";
      case "pending":
        return "#FF9500";
      default:
        return "#5AC8FA";
    }
  };

  const filteredStakeholders = stakeholders.filter((stakeholder) => {
    const matchesSearch =
      stakeholder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stakeholder.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stakeholder.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === "all" || stakeholder.type === filterType;
    
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const StakeholderCard = ({ stakeholder, index }) => (
    <Zoom
      in={visible}
      timeout={800}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card
        sx={{
          cursor: "pointer",
          height: "100%",
        }}
        onClick={() => {
          setSelectedStakeholder(stakeholder);
          setDialogOpen(true);
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                background: `linear-gradient(135deg, ${stakeholder.color}, ${stakeholder.color}CC)`,
                boxShadow: `0 8px 32px ${stakeholder.color}40`,
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              {stakeholder.avatar}
            </Avatar>
            <Box display="flex" gap={1}>
              <Badge
                badgeContent=""
                sx={{
                  "& .MuiBadge-dot": {
                    backgroundColor: getStatusColor(stakeholder.status),
                    width: 12,
                    height: 12,
                  },
                }}
                variant="dot"
              />
              <IconButton size="small" sx={{ color: "text.secondary" }}>
                <MoreVert fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Typography variant="h6" fontWeight={500} color="white" mb={0.5}>
            {stakeholder.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            {stakeholder.role}
          </Typography>
          <Typography variant="caption" color="text.secondary" mb={2} display="block">
            {stakeholder.company}
          </Typography>

          <Box display="flex" gap={1} mb={2} flexWrap="wrap">
            <Chip
              icon={getTypeIcon(stakeholder.type)}
              label={stakeholder.type.charAt(0).toUpperCase() + stakeholder.type.slice(1)}
              size="small"
              sx={{
                background: `linear-gradient(135deg, ${stakeholder.color}20, ${stakeholder.color}10)`,
                color: stakeholder.color,
                border: `1px solid ${stakeholder.color}40`,
              }}
            />
            {/* <Chip
              icon={<Star sx={{ fontSize: 16 }} />}
              label={stakeholder.rating}
              size="small"
              sx={{
                background: "linear-gradient(135deg, #FF950020, #FF950010)",
                color: "#FF9500",
                border: "1px solid #FF950040",
              }}
            /> */}
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="caption" color="text.secondary" display="block">
                Projects
              </Typography>
              <Typography variant="h6" color="white">
                {stakeholder.projectsCount}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="caption" color="text.secondary" display="block">
                Investment Value
              </Typography>
              <Typography variant="h6" color={stakeholder.color}>
                {stakeholder.investmentValue}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" gap={2} alignItems="center" mb={2}>
            <LocationOn sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="caption" color="text.secondary">
              {stakeholder.location}
            </Typography>
          </Box>

          <Typography variant="caption" color="text.secondary" mb={1} display="block">
            Recent Activity
          </Typography>
          <Typography variant="body2" color="white" fontSize="0.85rem">
            {stakeholder.recentActivity}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );

  const StakeholderStats = ({ stakeholder }) => (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h4" color="primary.main" fontWeight="bold">
            {stakeholder.completedProjects}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Completed Projects
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h4" color="success.main" fontWeight="bold">
            {stakeholder.rating}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Rating
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h4" color="warning.main" fontWeight="bold">
            {stakeholder.projectsCount}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Active Projects
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="h4" color="info.main" fontWeight="bold">
            {stakeholder.investmentValue}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Investment Value
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );

  return (
    <ThemeProvider theme={appleTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          position: "relative",
          py: 10, 
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
        <Container maxWidth="xl" sx={{ py: 4, position: "relative", zIndex: 1 }}>
          {/* Header */}
          <Fade in={visible} timeout={1000}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                  }}
                >
                  <ArrowBack sx={{ color: "white" }} />
                </IconButton>
                <Typography variant="h3" fontWeight={300} color="white">
                  Stakeholders
                </Typography>
                <Chip
                  label={`${filteredStakeholders.length} Total`}
                  sx={{
                    background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                    color: "white",
                    fontWeight: 500,
                  }}
                />
              </Box>
{/* 
              <Box display="flex" gap={2}>
                <Button
                  startIcon={<Add />}
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                    boxShadow: "0 8px 32px rgba(0, 122, 255, 0.3)",
                  }}
                >
                  Add Stakeholder
                </Button>
              </Box> */}
            </Box>
          </Fade>

          {/* Search and Filters */}
          <Grow in={visible} timeout={1000} style={{ transitionDelay: "200ms" }}>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    placeholder="Search stakeholders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ color: "text.secondary" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: 2,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Filter by Type</InputLabel>
                    <Select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: 2,
                      }}
                    >
                      <MenuItem value="all">All Types</MenuItem>
                      <MenuItem value="architect">Architect</MenuItem>
                      <MenuItem value="engineer">Engineer</MenuItem>
                      <MenuItem value="legal">Legal</MenuItem>
                      <MenuItem value="manager">Manager</MenuItem>
                      <MenuItem value="financial">Financial</MenuItem>
                      <MenuItem value="consultant">Consultant</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button
                    startIcon={<FilterList />}
                    variant="outlined"
                    fullWidth
                    sx={{ height: 56 }}
                  >
                    More Filters
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grow>

          {/* Tabs */}
          <Grow in={visible} timeout={1000} style={{ transitionDelay: "400ms" }}>
            <Paper sx={{ mb: 4 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                  "& .MuiTab-root": {
                    color: "text.secondary",
                    textTransform: "none",
                    fontWeight: 500,
                    "&.Mui-selected": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <Tab label="All Stakeholders" />
                <Tab label="Active Projects" />
                <Tab label="Performance" />
                <Tab label="Communications" />
              </Tabs>
            </Paper>
          </Grow>

          {/* Stakeholders Grid */}
          <Grid container spacing={3}>
            {filteredStakeholders.map((stakeholder, index) => (
              <Grid item xs={12} sm={6} lg={4} key={stakeholder.id}>
                <StakeholderCard stakeholder={stakeholder} index={index} />
              </Grid>
            ))}
          </Grid>

          {/* Stakeholder Detail Dialog */}
          <Dialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            maxWidth="md"
            fullWidth
            PaperProps={{
              sx: {
                background: "rgba(26, 26, 46, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {selectedStakeholder && (
              <>
                <DialogTitle>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        background: `linear-gradient(135deg, ${selectedStakeholder.color}, ${selectedStakeholder.color}CC)`,
                      }}
                    >
                      {selectedStakeholder.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" color="white">
                        {selectedStakeholder.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedStakeholder.role} at {selectedStakeholder.company}
                      </Typography>
                    </Box>
                  </Box>
                </DialogTitle>
                <DialogContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <StakeholderStats stakeholder={selectedStakeholder} />
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" color="white" mb={2}>
                        Contact Information
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Email sx={{ color: "primary.main" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={selectedStakeholder.email}
                            secondary="Email"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Phone sx={{ color: "success.main" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={selectedStakeholder.phone}
                            secondary="Phone"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <LocationOn sx={{ color: "warning.main" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={selectedStakeholder.location}
                            secondary="Location"
                          />
                        </ListItem>
                      </List>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" color="white" mb={2}>
                        Specialties
                      </Typography>
                      <Box display="flex" gap={1} flexWrap="wrap" mb={3}>
                        {selectedStakeholder.specialties.map((specialty, index) => (
                          <Chip
                            key={index}
                            label={specialty}
                            size="small"
                            sx={{
                              background: `linear-gradient(135deg, ${selectedStakeholder.color}20, ${selectedStakeholder.color}10)`,
                              color: selectedStakeholder.color,
                              border: `1px solid ${selectedStakeholder.color}40`,
                            }}
                          />
                        ))}
                      </Box>
                      
                      <Typography variant="h6" color="white" mb={2}>
                        Recent Activity
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedStakeholder.recentActivity}
                      </Typography>
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                  <Button
                    startIcon={<Message />}
                    variant="outlined"
                    sx={{ mr: 1 }}
                  >
                    Send Message
                  </Button>
                  <Button
                    startIcon={<VideoCall />}
                    variant="outlined"
                    sx={{ mr: 1 }}
                  >
                    Schedule Call
                  </Button>
                  {/* <Button
                    startIcon={<Edit />}
                    variant="contained"
                    sx={{
                      background: "linear-gradient(135deg, #007AFF, #5AC8FA)",
                    }}
                  >
                    Edit Profile
                  </Button> */}
                </DialogActions>
              </>
            )}
          </Dialog>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Stakeholders;