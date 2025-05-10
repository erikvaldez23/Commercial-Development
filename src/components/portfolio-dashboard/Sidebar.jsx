import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

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
      <Box display="flex" alignItems="center" mb={3} mt={3}>
        <Box
          component="img"
          src="/Commercial-Development/greenark-logo1.png"
          alt="Dashboard Visual"
          sx={{
            height: 100, // set consistent height
            width: "auto",
            marginRight: 2,
            mx: "auto",
            textAlign: "center",
          }}
        />
        {/* <Typography variant="h4" sx={{ letterSpacing: 1, fontWeight: "bold" }}>
        Green Ark
        </Typography> */}
      </Box>

      <Divider
        sx={{
          background: "#fff",
          marginY: 4,
        }}
      />

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
