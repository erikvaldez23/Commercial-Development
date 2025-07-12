import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  LinearProgress,
  Grid,
  Divider,
  IconButton,
  Card,
  CardContent,
  Fade,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Paper,
} from "@mui/material";
import {
  Close,
  LocationOn,
  CalendarToday,
  AccountBalance,
  TrendingUp,
  Business,
  Assessment,
  Timeline,
  AttachMoney,
  Square,
  Description,
  Person,
  Group,
  InsertDriveFile,
  PictureAsPdf,
  Image as ImageIcon,
  CheckCircle,
  Schedule,
  Cancel,
} from "@mui/icons-material";

const ProjectDetailsModal = ({ open, onClose, project }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const allPhases = [
    "Funding",
    "Designing",
    "Permits",
    "Construction",
    "Leasing",
  ];

  useEffect(() => {
    if (open) {
      // Store original body styles
      const originalStyle = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
      };

      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Apply scroll lock styles
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Also apply to html element for extra security
      document.documentElement.style.overflow = 'hidden';

      // Cleanup function
      return () => {
        // Restore original styles
        document.body.style.overflow = originalStyle.overflow;
        document.body.style.position = originalStyle.position;
        document.body.style.top = originalStyle.top;
        document.body.style.width = originalStyle.width;
        
        // Restore html element
        document.documentElement.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!project) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "linear-gradient(135deg, #34C759, #34C759CC)";
      case "Pending":
        return "linear-gradient(135deg, #FF9500, #FF9500CC)";
      case "Review":
        return "linear-gradient(135deg, #FF3B30, #FF3B30CC)";
      case "Completed":
        return "linear-gradient(135deg, #34C759, #34C759CC)";
      default:
        return "linear-gradient(135deg, #007AFF, #007AFFCC)";
    }
  };

  const getPhaseIcon = (phase) => {
    switch (phase) {
      case "Design":
        return <Assessment />;
      case "Construction":
        return <Business />;
      case "Planning":
        return <Timeline />;
      case "Permits":
        return <AccountBalance />;
      default:
        return <TrendingUp />;
    }
  };

  const getDocumentIcon = (type) => {
    switch (type) {
      case "pdf":
        return <PictureAsPdf sx={{ color: "#FF3B30" }} />;
      case "image":
        return <ImageIcon sx={{ color: "#34C759" }} />;
      default:
        return <InsertDriveFile sx={{ color: "#007AFF" }} />;
    }
  };

  const getTimelineStepStatus = (step) => {
    if (step.completed) return { icon: <CheckCircle />, color: "#34C759" };
    if (step.current) return { icon: <Schedule />, color: "#FF9500" };
    return { icon: <Cancel />, color: "rgba(255, 255, 255, 0.3)" };
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
      disableScrollLock={false}
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        sx: {
          background: "rgba(15, 15, 15, 0.3)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.4)",
          maxHeight: "95vh",
          "&:hover": {
            background: "rgba(15, 15, 15, 0.3)",
          },
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          background: `linear-gradient(135deg, ${project.color}15, ${project.color}08)`,
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px 24px 0 0",
          py: 5
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

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              sx={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                width: 56,
                height: 56,
                boxShadow: `0 8px 32px ${project.color}40`,
              }}
            >
              <LocationOn sx={{ fontSize: 28 }} />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight={600} color="white">
                {project.name}
              </Typography>
              <Typography variant="body1" color="rgba(255, 255, 255, 0.7)">
                {project.location}
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transform: "scale(1.05)",
                cursor: "pointer"
              },
              transition: "all 0.3s ease",
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ p: 3, background: "rgba(10, 10, 10, 0.3)" }}>
        <Grid container spacing={3}>
          {/* Project Image */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                mt: 3,
              }}
            >
              <Box
                sx={{
                  height: 400,
                  background: project.image
                    ? `url(${project.image})`
                    : `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {!project.image && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    <ImageIcon sx={{ fontSize: 64, color: project.color }} />
                    <Typography variant="h6" color="rgba(255, 255, 255, 0.8)">
                      Project Visualization
                    </Typography>
                  </Box>
                )}
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Chip
                    label={project.status}
                    sx={{
                      background: getStatusColor(project.status),
                      color: "white",
                      fontWeight: 600,
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Project Overview */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                height: 400,
                mt: 3,
              }}
            >
              <CardContent sx={{ p: 3, height: "100%" }}>
                <Typography variant="h6" color="white" mb={2} fontWeight={600}>
                  Project Overview
                </Typography>

                <Box display="flex" flexDirection="column" gap={2} mb={3}>
                  <Box>
                    <Typography
                      variant="body2"
                      color="rgba(255, 255, 255, 0.6)"
                      mb={1}
                    >
                      Project Type
                    </Typography>
                    <Chip
                      label={project.category}
                      sx={{
                        background: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                        fontWeight: 500,
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      variant="body2"
                      color="rgba(255, 255, 255, 0.6)"
                      mb={1}
                    >
                      Current Phase
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          borderRadius: "10px",
                          background: `${project.color}20`,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {getPhaseIcon(project.phase)}
                      </Box>
                      <Typography
                        variant="body1"
                        color="white"
                        fontWeight={500}
                      >
                        {project.phase}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={2}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <AttachMoney sx={{ color: "#34C759", fontSize: 20 }} />
                    <Box>
                      <Typography
                        variant="body2"
                        color="rgba(255, 255, 255, 0.6)"
                      >
                        Budget
                      </Typography>
                      <Typography
                        variant="body1"
                        color="white"
                        fontWeight={600}
                      >
                        {project.budget}
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" gap={2}>
                    <Square sx={{ color: "#5AC8FA", fontSize: 20 }} />
                    <Box>
                      <Typography
                        variant="body2"
                        color="rgba(255, 255, 255, 0.6)"
                      >
                        Size
                      </Typography>
                      <Typography
                        variant="body1"
                        color="white"
                        fontWeight={600}
                      >
                        {project.size}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Project Description */}
          <Grid item xs={12}>
            <Card
              sx={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" color="white" mb={2} fontWeight={600}>
                  Project Description
                </Typography>
                <Typography
                  variant="body1"
                  color="rgba(255, 255, 255, 0.8)"
                  lineHeight={1.6}
                >
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Timeline Graphic */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                height: 300,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" color="white" mb={3} fontWeight={600}>
                  Project Timeline
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  {allPhases.map((phase, index) => {
                    const isCurrent = phase === project.phase;
                    const isCompleted =
                      allPhases.indexOf(phase) <
                      allPhases.indexOf(project.phase);

                    return (
                      <Box
                        key={phase}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        flex="1"
                        sx={{
                          minWidth: 80,
                          opacity: isCompleted || isCurrent ? 1 : 0.4,
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            mb: 1,
                            bgcolor: isCurrent
                              ? project.color
                              : isCompleted
                              ? `${project.color}40`
                              : "rgba(255, 255, 255, 0.1)",
                            color: isCurrent || isCompleted ? "#fff" : "#888",
                            fontWeight: 600,
                            border: `2px solid ${
                              isCurrent ? "#fff" : "transparent"
                            }`,
                          }}
                        >
                          {index + 1}
                        </Avatar>
                        <Typography
                          variant="caption"
                          color={
                            isCurrent || isCompleted
                              ? "white"
                              : "text.secondary"
                          }
                          fontWeight={isCurrent ? 700 : 400}
                          textAlign="center"
                        >
                          {phase}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>

                <Box mt={4}>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography
                      variant="body2"
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      Overall Progress
                    </Typography>
                    <Typography variant="body2" color="white" fontWeight={700}>
                      {project.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    sx={{
                      height: 10,
                      borderRadius: 6,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      "& .MuiLinearProgress-bar": {
                        background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
                        borderRadius: 6,
                        boxShadow: `0 0 16px ${project.color}40`,
                      },
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Project Stakeholders */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                height: 300,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" color="white" mb={3} fontWeight={600}>
                  Project Stakeholders
                </Typography>

                <List sx={{ p: 0 }}>
                  {project.stakeholders?.map((stakeholder, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                            color: project.color,
                            width: 40,
                            height: 40,
                          }}
                        >
                          <Person />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="white"
                            fontWeight={500}
                          >
                            {stakeholder.name}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="body2"
                            color="rgba(255, 255, 255, 0.6)"
                          >
                            {stakeholder.role}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Important Documents */}
          <Grid item xs={12}>
            <Card
              sx={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" color="white" mb={3} fontWeight={600}>
                  Important Documents
                </Typography>

                <Grid container spacing={2}>
                  {project.documents?.map((doc, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        sx={{
                          background: "rgba(30, 30, 30, 0.8)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "16px",
                          p: 2,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(40, 40, 40, 0.8)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                          },
                        }}
                      >
                        <Box display="flex" alignItems="center" gap={2}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 40,
                              height: 40,
                              borderRadius: "12px",
                              background: "rgba(255, 255, 255, 0.05)",
                            }}
                          >
                            {getDocumentIcon(doc.type)}
                          </Box>
                          <Box flex={1}>
                            <Typography
                              variant="body1"
                              color="white"
                              fontWeight={500}
                            >
                              {doc.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="rgba(255, 255, 255, 0.6)"
                            >
                              {doc.size} • {doc.type.toUpperCase()}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>

      {/* Actions */}
      <DialogActions
        sx={{
          p: 3,
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          background: "rgba(15, 15, 15, 0.8)",
          borderRadius: "0 0 24px 24px",
        }}
      >
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
            color: "white",
            fontWeight: 600,
            px: 4,
            py: 1,
            boxShadow: `0 8px 24px ${project.color}40`,
            "&:hover": {
              background: `linear-gradient(135deg, ${project.color}DD, ${project.color}AA)`,
              transform: "translateY(-2px)",
              boxShadow: `0 12px 32px ${project.color}60`,
            },
            transition: "all 0.3s ease",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDetailsModal;
