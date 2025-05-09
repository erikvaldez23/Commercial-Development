// Dashboard.jsx
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Switch,
  Divider,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import Sidebar from "./Sidebar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          width: "100%",
          background: "#111",
          height: "100vh",
          paddingTop: "10vh",
          flexGrow: 1,
          pl: 30,
        }}
      >
        <Card
          sx={{
            bgcolor: "#111",
            border: "1px solid #222",
            borderRadius: 5,
            color: "#e0e0e0",
            maxWidth: "80%",
            mx: "auto",
            p: 5,
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            transition:
              "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
            ":hover": {
              boxShadow: "0 12px 40px rgba(0,0,0,0.7)",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            gap={1}
            sx={{
              display: "flex",
              marginBottom: 2,
              alignItems: "left",
            }}
          >
            <ForestIcon sx={{ color: "#8BC34A" }} />
            <Typography variant="h4" sx={{ color: "#e0e0e0" }}>
              GREEN ARK DASHBOARD
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Carbon Output */}
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  bgcolor: "#1c1f24",
                  p: 2,
                  borderRadius: 10,
                  color: "#fff",
                  height: "100%"
                }}
              >
                <Typography variant="h6">Carbon Output</Typography>

                <Box sx={{ width: "60%", mt: 5, mx: "auto" }}>
                  <CircularProgressbar
                    value={85}
                    text={`85%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#8BC34A",
                      trailColor: "#333",
                    })}
                  />
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
  <Card
    sx={{
      bgcolor: "#1c1f24",
      p: 2,
      borderRadius: 10,
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {/* Image Section */}
    <Box
      component="img"
      src="/Commercial-Development/city2.jpg"
      alt="Dashboard Visual"
      sx={{
        height: "35vh",
        width: "100%",
        objectFit: "cover",
        borderRadius: 4,
        mb: 2,
      }}
    />

    {/* Current Temperature Section */}
    <Box
      sx={{
        width: "100%",
        color: "#fff",
        p: 2,
        borderRadius: 4,
        textAlign: "left",
      }}
    >
      <Typography variant="h6">Current Temperature</Typography>
      <Typography variant="h3">72°F</Typography>
      {/* Optional: Add Recharts mini line graph here */}
    </Box>
  </Card>
</Grid>


            {/* Smart Control */}
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  bgcolor: "#1c1f24",
                  p: 2,
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                <Typography variant="h6">Smart Control</Typography>
                {["Lighting", "Temperature", "Security", "Water"].map(
                  (label) => (
                    <Box
                      key={label}
                      display="flex"
                      justifyContent="space-between"
                      my={1}
                    >
                      <Typography>{label}</Typography>
                      <Switch defaultChecked color="success" />
                    </Box>
                  )
                )}
              </Card>
            </Grid>

            {/* Current Temperature */}
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  bgcolor: "#1c1f24",
                  p: 2,
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                <Typography variant="h6">Header</Typography>
                <Typography variant="h3">Content</Typography>
                {/* Add a line chart here (e.g. using Recharts) */}
              </Card>
            </Grid>

            {/* Energy Usage */}
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  bgcolor: "#1c1f24",
                  p: 2,
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                <Typography variant="h6">Energy Usage</Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Current: 1.32 MW</Typography>
                  <Typography>Solar: 0.78 MW</Typography>
                </Box>
              </Card>
            </Grid>

            {/* Maintenance */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  bgcolor: "#1c1f24",
                  p: 2,
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                <Typography variant="h6">Maintenance</Typography>
                <Divider sx={{ my: 1, bgcolor: "#444" }} />
                <Typography color="warning.main">
                  ⚠️ Water leak detected - Active
                </Typography>
                <Typography color="error.main">
                  ⚠️ Smoke alarm fault - Active
                </Typography>
                <Typography color="success.main">
                  ✔️ Cooling system check - Today
                </Typography>
              </Card>
            </Grid>

            {/* Air Quality */}
            <Grid item xs={12} md={3}>
              <Card
                sx={{
                  bgcolor: "#1c1f24",
                  p: 2,
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                <Typography variant="h6">Air Quality</Typography>
                <Typography variant="h3">AQI 28</Typography>
                <Typography color="success.main">Good</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}
