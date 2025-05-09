import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider, 
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";

const menuItems = ["Overview", "Analytics", "Buildings", "Settings"];

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "#121212",
        height: "100vh",
        color: "#e0e0e0",
        padding: 3,
        borderRight: "1px solid #222",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* Logo */}
      <Box display="flex" alignItems="center">
        <ApartmentIcon sx={{ color: "#c9b49a", mr: 1, fontSize: 40 }} />
        <Typography variant="h2" sx={{ letterSpacing: 1 }}>
          Ark
        </Typography>
      </Box>
      <Divider sx = {{
        background: "#fff",
        marginY: 5
      }} />

      {/* Menu Items */}
      <List>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{ borderRadius: 2, ":hover": { bgcolor: "#1e1e1e" } }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontSize: 30 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
