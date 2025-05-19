import { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Tooltip,
  IconButton,
  Collapse
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import BuildingsIcon from '@mui/icons-material/Business';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const menuItems = [
  { 
    label: "Overview", 
    path: "/portfolio/overview",
    icon: <DashboardIcon />
  },
  { 
    label: "Analytics", 
    path: "/portfolio/analytics",
    icon: <AnalyticsIcon />,
    subItems: [
      { label: "Performance", path: "/portfolio/analytics/performance" },
      { label: "Sustainability", path: "/portfolio/analytics/sustainability" }
    ]
  },
  { 
    label: "Buildings", 
    path: "/portfolio/buildings",
    icon: <BuildingsIcon />
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

    const bgGradient = "linear-gradient(135deg, #121212 0%, #1E1E2D 100%)"

  return (
    <Paper
      elevation={3}
      sx={{
        width: collapsed ? 70 : 260,
        bgcolor: bgGradient,
        height: "100vh",
        transition: "width 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 1200,
        overflow: "hidden"
      }}
    >
      {/* Header with Logo and Collapse Button */}
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent={collapsed ? "center" : "space-between"}
        py={2}
        px={collapsed ? 1 : 2}
      >
        {!collapsed && (
          <Box
            component="img"
            src="/Commercial-Development/greenark-logo1.png"
            alt="GreenArk Logo"
            sx={{
              height: 40,
              width: "auto"
            }}
          />
        )}
        <Tooltip title={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
          <IconButton onClick={toggleSidebar} size="small">
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Divider />
      
      {/* Menu Items */}
      <List sx={{ flexGrow: 1, overflowY: "auto", py: 2 }}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path || 
                          (item.subItems && item.subItems.some(subItem => location.pathname === subItem.path));
          
          return (
            <Box key={item.label}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.subItems ? 'div' : Link}
                  to={item.subItems ? undefined : item.path}
                  onClick={item.subItems ? () => handleExpand(index) : undefined}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    mb: 0.5,
                    py: 1,
                    bgcolor: isActive ? 'action.selected' : 'transparent',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                    position: 'relative',
                    '&::before': isActive ? {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '20%',
                      height: '60%',
                      width: 4,
                      borderRadius: 1,
                      bgcolor: 'primary.main',
                    } : {},
                    pl: isActive ? 3 : 2,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40, color: isActive ? 'primary.main' : 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && (
                    <>
                      <ListItemText 
                        primary={item.label}
                        primaryTypographyProps={{ 
                          fontSize: 16,
                          fontWeight: isActive ? 600 : 400,
                        }}
                      />
                      {item.subItems && (
                        expanded === index ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      )}
                    </>
                  )}
                </ListItemButton>
              </ListItem>
              
              {!collapsed && item.subItems && (
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;
                      
                      return (
                        <ListItemButton
                          key={subItem.label}
                          component={Link}
                          to={subItem.path}
                          sx={{
                            pl: 6,
                            py: 0.75,
                            mx: 1,
                            borderRadius: 1,
                            bgcolor: isSubActive ? 'action.selected' : 'transparent',
                            '&:hover': {
                              bgcolor: 'action.hover',
                            },
                          }}
                        >
                          <ListItemText 
                            primary={subItem.label} 
                            primaryTypographyProps={{ 
                              fontSize: 14,
                              fontWeight: isSubActive ? 500 : 400,
                              color: isSubActive ? 'primary.main' : 'text.secondary',
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Paper>
  );
}