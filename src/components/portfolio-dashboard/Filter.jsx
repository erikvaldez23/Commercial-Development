import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Menu,
  Typography,
  Chip,
  Fade,
  Slide,
  useTheme,
} from "@mui/material";
import {
  Business,
  Storefront,
  HomeWork,
  Apartment,
  Search,
  FilterList,
  TuneRounded,
  ClearRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";

const categories = [
  { label: "All", icon: null, color: "#c9b49a" },
  { label: "Office", icon: <Business />, color: "#c9b49a" },
  { label: "Retail", icon: <Storefront />, color: "#c9b49a" },
  { label: "Industrial", icon: <HomeWork />, color: "#c9b49a" },
  { label: "Mixed-Use", icon: <Apartment />, color: "#c9b49a" },
];

const statuses = [
  { label: "All Statuses", color: "#c9b49a" },
  { label: "Active", color: "#c9b49a" },
  { label: "Pending", color: "#c9b49a" },
  { label: "Review", color: "#c9b49a" },
];

const phases = [
  { label: "All Phases", color: "#c9b49a" },
  { label: "Design", color: "#c9b49a" },
  { label: "Construction", color: "#c9b49a" },
  { label: "Planning", color: "#c9b49a" },
  { label: "Permits", color: "#c9b49a" },
];

const FilterBar = ({ 
  onCategoryChange, 
  onSearchChange, 
  onStatusChange, 
  onPhaseChange,
  onClearFilters 
}) => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [statusAnchorEl, setStatusAnchorEl] = useState(null);
  const [phaseAnchorEl, setPhaseAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [selectedPhase, setSelectedPhase] = useState("All Phases");
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.label);
    if (onCategoryChange) onCategoryChange(category.label);
  };

  const handleStatusMenuOpen = (event) => {
    setStatusAnchorEl(event.currentTarget);
  };

  const handlePhaseMenuOpen = (event) => {
    setPhaseAnchorEl(event.currentTarget);
  };

  const handleStatusMenuClose = (status) => {
    setStatusAnchorEl(null);
    if (status) {
      setSelectedStatus(status.label);
      if (onStatusChange) onStatusChange(status.label);
    }
  };

  const handlePhaseMenuClose = (phase) => {
    setPhaseAnchorEl(null);
    if (phase) {
      setSelectedPhase(phase.label);
      if (onPhaseChange) onPhaseChange(phase.label);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (onSearchChange) onSearchChange(value);
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
    setSelectedStatus("All Statuses");
    setSelectedPhase("All Phases");
    setSearchValue("");
    if (onClearFilters) onClearFilters();
  };

  const hasActiveFilters = activeCategory !== "All" || 
                         selectedStatus !== "All Statuses" || 
                         selectedPhase !== "All Phases" || 
                         searchValue.length > 0;

  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.01)",
          backdropFilter: "blur(50px)",
          border: "1px solid rgba(201, 180, 154, 0.2)",
          borderRadius: "24px",
          p: 3,
          mb: 4,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(201, 180, 154, 0.05) 0%, rgba(201, 180, 154, 0.02) 100%)",
            pointerEvents: "none",
          },
        }}
      >
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
          <Box display="flex" alignItems="center" gap={2}>
            <TuneRounded sx={{ color: "#c9b49a", fontSize: 24 }} />
            <Typography variant="h6" fontWeight={500} color="#c9b49a">
              Filter Projects
            </Typography>
          </Box>
          {hasActiveFilters && (
            <Button
              onClick={handleClearFilters}
              startIcon={<ClearRounded />}
              size="small"
              sx={{
                color: "#c9b49a",
                textTransform: "none",
                fontWeight: 500,
                background: "#000",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "16px",
                border: "1px solid rgba(201, 180, 154, 0.2)",
                "&:hover": {
                  backgroundColor: "rgba(201, 180, 154, 0.2)",
                  borderColor: "rgba(201, 180, 154, 0.3)",
                },
              }}
            >
              Clear All
            </Button>
          )}
        </Box>

        {/* Main Filter Content */}
        <Box display="flex" flexDirection="column" gap={3}>
          {/* Category Filters */}
          <Box>
            <Typography variant="caption" sx={{ color: "rgba(201, 180, 154, 0.7)" }} mb={2} display="block">
              CATEGORY
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1.5}>
              {categories.map((category, index) => (
                <Slide
                  key={category.label}
                  direction="up"
                  in
                  timeout={600}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Button
                    startIcon={category.icon}
                    onClick={() => handleCategoryClick(category)}
                    sx={{
                      borderRadius: "20px",
                      px: 3,
                      py: 1.5,
                      fontWeight: 500,
                      fontSize: "14px",
                      background: "#000",
                      color: "#c9b49a",
                      border: "1px solid rgba(201, 180, 154, 0.4)",
                      "&:hover":{
                      background: "#111",
                      }
                    }}
                  >
                    {category.label}
                  </Button>
                </Slide>
              ))}
            </Box>
          </Box>

          {/* Status and Phase Filters */}
          <Box display="flex" gap={3} flexWrap="wrap">
            {/* Status Filter */}
            <Box flex={1} minWidth="200px">
              <Typography variant="caption" sx={{ color: "rgba(201, 180, 154, 0.7)" }} mb={1} display="block">
                STATUS
              </Typography>
              <Button
                fullWidth
                onClick={handleStatusMenuOpen}
                endIcon={<KeyboardArrowDownRounded />}
                sx={{
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  py: 1.5,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 500,
                  background: "#000",
                  color: "#c9b49a",
                  border: "1px solid rgba(201, 180, 154, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    background: "#111",
                    borderColor: "rgba(201, 180, 154, 0.4)",
                  },
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#c9b49a",
                    }}
                  />
                  {selectedStatus}
                </Box>
              </Button>
              <Menu
                anchorEl={statusAnchorEl}
                open={Boolean(statusAnchorEl)}
                onClose={() => handleStatusMenuClose()}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                    border: "1px solid rgba(201, 180, 154, 0.2)",
                    borderRadius: "16px",
                    mt: 1,
                    minWidth: 200,
                  },
                }}
              >
                {statuses.map((status) => (
                  <MenuItem
                    key={status.label}
                    onClick={() => handleStatusMenuClose(status)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: "12px",
                      mx: 1,
                      my: 0.5,
                      color: status.label === selectedStatus ? "#c9b49a" : "rgba(201, 180, 154, 0.7)",
                      fontWeight: status.label === selectedStatus ? 600 : 400,
                      "&:hover": {
                        backgroundColor: "rgba(201, 180, 154, 0.1)",
                        color: "#c9b49a",
                      },
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#c9b49a",
                        }}
                      />
                      {status.label}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Phase Filter */}
            <Box flex={1} minWidth="200px">
              <Typography variant="caption" sx={{ color: "rgba(201, 180, 154, 0.7)" }} mb={1} display="block">
                PHASE
              </Typography>
              <Button
                fullWidth
                onClick={handlePhaseMenuOpen}
                endIcon={<KeyboardArrowDownRounded />}
                sx={{
                  justifyContent: "space-between",
                  borderRadius: "16px",
                  py: 1.5,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 500,
                  background: "#000",
                  color: "#c9b49a",
                  border: "1px solid rgba(201, 180, 154, 0.4)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    background: "#111",
                    borderColor: "rgba(201, 180, 154, 0.4)",
                  },
                }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#c9b49a",
                    }}
                  />
                  {selectedPhase}
                </Box>
              </Button>
              <Menu
                anchorEl={phaseAnchorEl}
                open={Boolean(phaseAnchorEl)}
                onClose={() => handlePhaseMenuClose()}
                PaperProps={{
                  sx: {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                    border: "1px solid rgba(201, 180, 154, 0.2)",
                    borderRadius: "16px",
                    mt: 1,
                    minWidth: 200,
                  },
                }}
              >
                {phases.map((phase) => (
                  <MenuItem
                    key={phase.label}
                    onClick={() => handlePhaseMenuClose(phase)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: "12px",
                      mx: 1,
                      my: 0.5,
                      color: phase.label === selectedPhase ? "#c9b49a" : "rgba(201, 180, 154, 0.7)",
                      fontWeight: phase.label === selectedPhase ? 600 : 400,
                      "&:hover": {
                        backgroundColor: "rgba(201, 180, 154, 0.1)",
                        color: "#c9b49a",
                      },
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#c9b49a",
                        }}
                      />
                      {phase.label}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <Fade in timeout={500}>
              <Box>
                <Typography variant="caption" sx={{ color: "rgba(201, 180, 154, 0.7)" }} mb={1} display="block">
                  ACTIVE FILTERS
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {activeCategory !== "All" && (
                    <Chip
                      label={`Category: ${activeCategory}`}
                      onDelete={() => {
                        setActiveCategory("All");
                        if (onCategoryChange) onCategoryChange("All");
                      }}
                      sx={{
                        backgroundColor: "#000",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        color: "#c9b49a",
                        border: "1px solid rgba(201, 180, 154, 0.4)",
                        "& .MuiChip-deleteIcon": {
                          color: "#c9b49a",
                          "&:hover": {
                            color: "#c9b49a",
                            backgroundColor: "rgba(201, 180, 154, 0.2)",
                          },
                        },
                      }}
                    />
                  )}
                  {selectedStatus !== "All Statuses" && (
                    <Chip
                      label={`Status: ${selectedStatus}`}
                      onDelete={() => {
                        setSelectedStatus("All Statuses");
                        if (onStatusChange) onStatusChange("All Statuses");
                      }}
                      sx={{
                        backgroundColor: "#000",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        color: "#c9b49a",
                        border: "1px solid rgba(201, 180, 154, 0.4)",
                        "& .MuiChip-deleteIcon": {
                          color: "#c9b49a",
                          "&:hover": {
                            color: "#c9b49a",
                            backgroundColor: "rgba(201, 180, 154, 0.2)",
                          },
                        },
                      }}
                    />
                  )}
                  {selectedPhase !== "All Phases" && (
                    <Chip
                      label={`Phase: ${selectedPhase}`}
                      onDelete={() => {
                        setSelectedPhase("All Phases");
                        if (onPhaseChange) onPhaseChange("All Phases");
                      }}
                      sx={{
                        backgroundColor: "#000",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        color: "#c9b49a",
                        border: "1px solid rgba(201, 180, 154, 0.4)",
                        "& .MuiChip-deleteIcon": {
                          color: "#c9b49a",
                          "&:hover": {
                            color: "#c9b49a",
                            backgroundColor: "rgba(201, 180, 154, 0.2)",
                          },
                        },
                      }}
                    />
                  )}
                  {searchValue && (
                    <Chip
                      label={`Search: "${searchValue}"`}
                      onDelete={() => {
                        setSearchValue("");
                        if (onSearchChange) onSearchChange("");
                      }}
                      sx={{
                        backgroundColor: "rgba(201, 180, 154, 0.15)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        color: "#c9b49a",
                        border: "1px solid rgba(201, 180, 154, 0.4)",
                        "& .MuiChip-deleteIcon": {
                          color: "#c9b49a",
                          "&:hover": {
                            color: "#c9b49a",
                            backgroundColor: "rgba(201, 180, 154, 0.2)",
                          },
                        },
                      }}
                    />
                  )}
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      </Box>
    </Fade>
  );
};

export default FilterBar;