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
  Grow
} from "@mui/material";
import { LocationOn, ArrowForward } from "@mui/icons-material";

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
                  <Box display="flex" justifyContent="space-between" alignItems="start" mb={2}>
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
                        background: project.status === "Active" 
                          ? "linear-gradient(135deg, #34C759, #34C759CC)"
                          : "rgba(255, 255, 255, 0.1)",
                        color: "white",
                      }}
                    />
                  </Box>

                  <Typography variant="h6" fontWeight={500} color="white" mb={1}>
                    {project.name}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.location}
                  </Typography>

                  <Typography variant="body2" color="text.primary" mb={3}>
                    {project.description}
                  </Typography>

                  <Box mb={3}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
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
                      sx={{ color: "white", borderColor: "rgba(255, 255, 255, 0.3)" }}
                    />
                  </Box>

                  <Typography variant="caption" color="text.secondary" display="block" mb={2}>
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
  );
};

export default ProjectsPage; 