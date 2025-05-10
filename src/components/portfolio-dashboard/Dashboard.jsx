// ModernDashboard.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Switch,
  Divider,
  IconButton,
  Avatar,
  Badge,
  Tooltip,
  useTheme,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AirIcon from "@mui/icons-material/Air";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import SecurityIcon from "@mui/icons-material/Security";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import "react-circular-progressbar/dist/styles.css";
import Sidebar from "./Sidebar";

// Sample data for charts
const energyData = [
  { time: "00:00", solar: 0, usage: 0.8 },
  { time: "03:00", solar: 0, usage: 0.5 },
  { time: "06:00", solar: 0.2, usage: 0.6 },
  { time: "09:00", solar: 0.9, usage: 1.1 },
  { time: "12:00", solar: 1.5, usage: 1.3 },
  { time: "15:00", solar: 1.2, usage: 1.4 },
  { time: "18:00", solar: 0.6, usage: 1.5 },
  { time: "21:00", solar: 0, usage: 1.1 },
];

const temperatureData = [
  { time: "00:00", temp: 68 },
  { time: "03:00", temp: 65 },
  { time: "06:00", temp: 67 },
  { time: "09:00", temp: 69 },
  { time: "12:00", temp: 72 },
  { time: "15:00", temp: 74 },
  { time: "18:00", temp: 71 },
  { time: "21:00", temp: 70 },
];

// Custom card component with motion effects
const AnimatedCard = ({ children, delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card
      elevation={0}
      sx={{
        bgcolor: "rgba(34, 34, 38, 0.7)",
        backdropFilter: "blur(10px)",
        p: 2.5,
        borderRadius: 4,
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
          transform: "translateY(-3px)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Card>
  </motion.div>
);

// Status indicator component
const StatusIndicator = ({ status }) => {
  const getColor = () => {
    switch (status) {
      case "good":
        return "#4CAF50";
      case "warning":
        return "#FFC107";
      case "error":
        return "#FF5252";
      default:
        return "#4CAF50";
    }
  };

  return (
    <Box
      component={motion.div}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      sx={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: getColor(),
        boxShadow: `0 0 10px ${getColor()}`,
      }}
    />
  );
};

export default function ModernDashboard() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle function for dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Dynamic background based on mode
  const bgGradient = darkMode
    ? "linear-gradient(135deg, #121212 0%, #1E1E2D 100%)"
    : "linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%)";

  // Dynamic text color based on mode
  const textColor = darkMode ? "#fff" : "#333";
  const subTextColor = darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)";

  // Dynamic card background based on mode
  const cardBg = darkMode
    ? "rgba(34, 34, 38, 0.7)"
    : "rgba(255, 255, 255, 0.7)";

  // Dynamic border color based on mode
  const borderColor = darkMode
    ? "rgba(255, 255, 255, 0.08)"
    : "rgba(0, 0, 0, 0.08)";

  return (
    <Box
      sx={{
        background: bgGradient,
        mb: 5
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
          width: "90%",
          mx: "auto",
          marginLeft: 28,
        }}
      >
        <Sidebar />
        <Box
          sx={{
            width: "100%",
            background: bgGradient,
            height: "100vh",
            overflow: "auto",
            flexGrow: 1,
            pl: { xs: 2, md: 10 },
            pr: { xs: 2, md: 4 },
            pt: 6,
            pb: 4,
            transition: "all 0.3s ease",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
              px: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar
                sx={{
                  background: "linear-gradient(45deg, #8BC34A, #4CAF50)",
                  p: 1,
                }}
              >
                <ForestIcon />
              </Avatar>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: textColor,
                  letterSpacing: "0.5px",
                }}
              >
                GREEN ARK
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
                <IconButton onClick={toggleDarkMode} sx={{ color: textColor }}>
                  {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton sx={{ color: textColor }}>
                  <Badge badgeContent={3} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                  border: `2px solid ${borderColor}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                  },
                }}
                alt="User"
                src="/path-to-user-image.jpg"
              />
            </Box>
          </Box>

          {/* Dashboard Content */}
          <Grid container spacing={3}>
            {/* Welcome Card */}
            <Grid item xs={12}>
              <AnimatedCard>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 700, color: textColor, mb: 1 }}
                    >
                      Welcome back, Admin
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: subTextColor, fontWeight: 500 }}
                    >
                      Your building is performing 15% better than last week.
                      Keep up the great work!
                    </Typography>
                  </Box>
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <img
                      src="/api/placeholder/200/100"
                      alt="Building performance"
                      style={{
                        maxHeight: "100px",
                        objectFit: "contain",
                        opacity: 0.9,
                      }}
                    />
                  </Box>
                </Box>
              </AnimatedCard>
            </Grid>

            {/* Overview Cards Row */}
            <Grid item xs={12} md={4}>
              <AnimatedCard delay={0.1}>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    overflowY: "auto",
                    height: "9vh",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: textColor }}
                  >
                    Carbon Output
                  </Typography>
                  <Tooltip title="Better than industry average">
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <StatusIndicator status="good" />
                      <Typography variant="body2" sx={{ color: "#4CAF50" }}>
                        -15%
                      </Typography>
                    </Box>
                  </Tooltip>
                </Box>

                <Box
                  sx={{
                    width: "50%",
                    mx: "auto",
                    mt: 2,
                    mb: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CircularProgressbar
                    value={85}
                    text={`85%`}
                    styles={buildStyles({
                      textColor: textColor,
                      pathColor: "#8BC34A",
                      trailColor: darkMode ? "#333" : "#e6e6e6",
                      textSize: "16px",
                    })}
                  />
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, color: subTextColor, textAlign: "center" }}
                  >
                    Reduced carbon emissions
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>

            <Grid item xs={12} md={8}>
              <AnimatedCard
                sx={{
        bgcolor: "rgba(34, 34, 38, 0.7)",
        backdropFilter: "blur(10px)",
        p: 2.5,
        borderRadius: 4,
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        transition: "all 0.3s ease-in-out",
        height: "42vh",
        "&:hover": {
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
          transform: "translateY(-3px)",
          borderColor: "rgba(255, 255, 255, 0.15)",
        },
      }}
              >
                {/* Image Section */}
                <Box
                  component="img"
                  src="/Commercial-Development/city2.jpg"
                  alt="Dashboard Visual"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              </AnimatedCard>
            </Grid>

            {/* Energy Usage Card */}
            <Grid item xs={12} md={7}>
              <AnimatedCard delay={0.4}>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    overflowY: "auto",
                    height: "9.2vh",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: textColor }}
                  >
                    Energy Distribution
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EnergySavingsLeafIcon sx={{ color: "#4CAF50" }} />
                    <Typography variant="body2" sx={{ color: "#4CAF50" }}>
                      60% from renewable sources
                    </Typography>
                  </Box>
                </Box>

                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart
                    data={energyData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="solarGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#4CAF50"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#4CAF50"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="usageGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#2196F3"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2196F3"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="time"
                      tick={{ fill: subTextColor, fontSize: 12 }}
                      axisLine={{ stroke: borderColor }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: subTextColor, fontSize: 12 }}
                      axisLine={{ stroke: borderColor }}
                      tickLine={false}
                      tickFormatter={(value) => `${value} MW`}
                    />
                    <RechartsTooltip
                      contentStyle={{
                        backgroundColor: darkMode
                          ? "rgba(30,30,30,0.8)"
                          : "rgba(255,255,255,0.8)",
                        border: "none",
                        borderRadius: "8px",
                        color: textColor,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="solar"
                      stackId="1"
                      stroke="#4CAF50"
                      fillOpacity={1}
                      fill="url(#solarGradient)"
                      strokeWidth={2}
                      name="Solar Production"
                    />
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stackId="2"
                      stroke="#2196F3"
                      fillOpacity={1}
                      fill="url(#usageGradient)"
                      strokeWidth={2}
                      name="Energy Usage"
                    />
                  </AreaChart>
                </ResponsiveContainer>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        bgcolor: "#4CAF50",
                      }}
                    />
                    <Typography variant="body2" sx={{ color: subTextColor }}>
                      Solar Production: 0.78 MW
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        bgcolor: "#2196F3",
                      }}
                    />
                    <Typography variant="body2" sx={{ color: subTextColor }}>
                      Energy Usage: 1.32 MW
                    </Typography>
                  </Box>
                </Box>
              </AnimatedCard>
            </Grid>

            {/* Temperature */}
            <Grid item xs={12} md={5}>
              <AnimatedCard delay={0.2}>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "top",
                    height: "15vh",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: textColor }}
                  >
                    Temperature
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <ThermostatIcon sx={{ color: "#FF9800", mr: 1 }} />
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: textColor }}
                    >
                      72°F
                    </Typography>
                  </Box>
                </Box>

                <ResponsiveContainer width="100%" height={130}>
                  <AreaChart
                    data={temperatureData}
                    margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="tempGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#FF9800"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FF9800"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="time"
                      tick={{ fill: subTextColor, fontSize: 10 }}
                      axisLine={{ stroke: borderColor }}
                      tickLine={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="temp"
                      stroke="#FF9800"
                      fill="url(#tempGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: subTextColor, textAlign: "center" }}
                >
                  Building temperature over 24 hours
                </Typography>
              </AnimatedCard>
            </Grid>

            {/* Air Quality */}
            <Grid item xs={12} md={4}>
              <AnimatedCard delay={0.3}>
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "7.2vh",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: textColor }}
                  >
                    Air Quality
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AirIcon sx={{ color: "#4CAF50" }} />
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: textColor,
                          lineHeight: 1,
                        }}
                      >
                        28
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#4CAF50" }}>
                        Good
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {["PM2.5", "CO2", "VOC", "Humidity"].map((param, index) => (
                    <Box key={param} sx={{ textAlign: "center" }}>
                      <Typography
                        variant="body2"
                        sx={{ color: subTextColor, mb: 0.5 }}
                      >
                        {param}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: textColor }}
                      >
                        {index === 0
                          ? "12µg"
                          : index === 1
                          ? "487ppm"
                          : index === 2
                          ? "Low"
                          : "54%"}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: darkMode
                      ? "rgba(76, 175, 80, 0.1)"
                      : "rgba(76, 175, 80, 0.05)",
                    border: "1px solid rgba(76, 175, 80, 0.2)",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4CAF50",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CheckCircleIcon fontSize="small" />
                    Air quality is excellent. All parameters within optimal
                    range.
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>

            {/* Smart Control Card */}
            {/* <Grid item xs={12} md={4}>
              <AnimatedCard delay={0.5}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: textColor, mb: 2 }}
                >
                  Smart Controls
                </Typography>

                {[
                  {
                    name: "Lighting",
                    icon: <LightModeIcon sx={{ color: "#FFD54F" }} />,
                  },
                  {
                    name: "Temperature",
                    icon: <ThermostatIcon sx={{ color: "#FF9800" }} />,
                  },
                  {
                    name: "Security",
                    icon: <SecurityIcon sx={{ color: "#F44336" }} />,
                  },
                  {
                    name: "Water",
                    icon: <WaterDropIcon sx={{ color: "#2196F3" }} />,
                  },
                ].map((control, index) => (
                  <Box
                    key={control.name}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1.5,
                      borderRadius: 2,
                      mb: 1.5,
                      bgcolor: darkMode
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.02)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: darkMode
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {control.icon}
                      <Typography sx={{ color: textColor }}>
                        {control.name}
                      </Typography>
                    </Box>
                    <Switch
                      defaultChecked={index !== 3}
                      color="success"
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#4CAF50",
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                          {
                            backgroundColor: "rgba(76, 175, 80, 0.5)",
                          },
                      }}
                    />
                  </Box>
                ))}

                <Box
                  sx={{
                    mt: 2,
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: darkMode
                      ? "rgba(33, 150, 243, 0.1)"
                      : "rgba(33, 150, 243, 0.05)",
                    border: "1px solid rgba(33, 150, 243, 0.2)",
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#2196F3" }}>
                    Energy-saving mode is active, saving approximately 24% on
                    daily consumption.
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid> */}

            {/* Maintenance Alerts */}
            <Grid item xs={12}>
              <AnimatedCard delay={0.6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: textColor, mb: 2 }}
                >
                  Building Maintenance
                </Typography>

                <Grid container spacing={2}>
                  {[
                    {
                      title: "Water Leak Detected",
                      location: "Level 2, West Wing",
                      status: "warning",
                      icon: <WaterDropIcon />,
                      time: "30 minutes ago",
                    },
                    {
                      title: "Smoke Alarm Fault",
                      location: "Level 5, Room 507",
                      status: "error",
                      icon: <WarningIcon />,
                      time: "1 hour ago",
                    },
                    {
                      title: "Cooling System Check",
                      location: "Central HVAC",
                      status: "good",
                      icon: <CheckCircleIcon />,
                      time: "Today at 9:00 AM",
                    },
                  ].map((alert, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: darkMode
                            ? alert.status === "warning"
                              ? "rgba(255, 193, 7, 0.1)"
                              : alert.status === "error"
                              ? "rgba(244, 67, 54, 0.1)"
                              : "rgba(76, 175, 80, 0.1)"
                            : alert.status === "warning"
                            ? "rgba(255, 193, 7, 0.05)"
                            : alert.status === "error"
                            ? "rgba(244, 67, 54, 0.05)"
                            : "rgba(76, 175, 80, 0.05)",
                          border: `1px solid ${
                            alert.status === "warning"
                              ? "rgba(255, 193, 7, 0.3)"
                              : alert.status === "error"
                              ? "rgba(244, 67, 54, 0.3)"
                              : "rgba(76, 175, 80, 0.3)"
                          }`,
                          display: "flex",
                          gap: 2,
                          height: "100%",
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor:
                              alert.status === "warning"
                                ? "rgba(255, 193, 7, 0.2)"
                                : alert.status === "error"
                                ? "rgba(244, 67, 54, 0.2)"
                                : "rgba(76, 175, 80, 0.2)",
                            color:
                              alert.status === "warning"
                                ? "#FFC107"
                                : alert.status === "error"
                                ? "#F44336"
                                : "#4CAF50",
                          }}
                        >
                          {alert.icon}
                        </Avatar>
                        <Box>
                          <Typography
                            sx={{ fontWeight: 600, color: textColor }}
                          >
                            {alert.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: subTextColor, mb: 1 }}
                          >
                            {alert.location}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: subTextColor }}
                          >
                            {alert.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AnimatedCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
