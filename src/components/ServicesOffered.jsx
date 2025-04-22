import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LayersIcon from "@mui/icons-material/Layers";
import { Link } from "react-router-dom";

// Define service-specific content
const serviceOptions = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services",
    list: ["Front Windsheield", "Sunroof / Panoramic Roof", "Visor Strips"],
    filmTypes: [
      {
        name: "Llumar ATC",
        description:
          "Enjoy 99% UV protection and significant heat reduction with the Llumar ATC film. Perfect for those looking to upgrade their vehicle or property’s appearance, this budget-friendly, dyed film offers sleek styling while protecting both you and your interior from the sun’s harmful effects.",
      },
      {
        name: "Llumar CTX",
        description:
          "CTX film combines advanced ceramic technology with excellent heat and UV protection. It blocks up to 60% of infrared heat while maintaining a clear, non-reflective appearance. Perfect for those seeking superior comfort and privacy without darkening windows too much, CTX is ideal for moderate climates where effective heat rejection and UV protection are key.",
      },
      {
        name: "Llumar IRX",
        description:
          "Maximum heat rejection, LLumar IRX is the premium choice. With up to 97% infrared heat blocking, it offers superior comfort by keeping your interior cooler, even in extreme sun. The IRX film maintains a neutral, clear appearance and provides exceptional UV protection, making it perfect for hot climates where optimal performance is required without sacrificing visibility or style.",
      },
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting Services",
    list: [
      "Full Model S window tinting, windshield, pano sunroof, single sunroof",
      "Full Model 3 window tinting, windshield, sunroof",
      "Full Model X window tinting, windshield",
      "Full Model Y window tinting, windshield, pano sunroof, single sunroof",
      "Full Cybertruck window tinting, windshield",
    ],
    filmTypes: [
      {
        name: "Llumar CTX",
        description:
          "CTX film combines advanced ceramic technology with excellent heat and UV protection. It blocks up to 60% of infrared heat while maintaining a clear, non-reflective appearance. Perfect for those seeking superior comfort and privacy without darkening windows too much, CTX is ideal for moderate climates where effective heat rejection and UV protection are key.",
      },
      {
        name: "Llumar IRX",
        description:
          "Maximum heat rejection, LLumar IRX is the premium choice. With up to 97% infrared heat blocking, it offers superior comfort by keeping your interior cooler, even in extreme sun. The IRX film maintains a neutral, clear appearance and provides exceptional UV protection, making it perfect for hot climates where optimal performance is required without sacrificing visibility or style.",
      },
    ],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting Services",
    list: [
      "Office Window Tinting",
      "Storefront Window Tinting",
      "Skyscraper Window Tinting",
      "Conference Room Tinting",
      "Custom Business Tinting Solutions",
    ],
    filmTypes: [
      {
        name: "Solar Control Film",
        description:
          "Reduces heat and glare while allowing natural light to enter, improving energy efficiency.",
      },
      {
        name: "Decorative Film",
        description: "Offers privacy and style while reducing glare and heat.",
      },
      {
        name: "Security Film (Coming Soon!)",
        description:
          "Strengthens windows, offering protection against break-ins and accidents by preventing shattering.",
      },
    ],
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting Services",
    list: [
      "Full Home Window Tinting",
      "Single Room Window Tinting",
      "Sunroom Tinting",
      "Patio Door Tinting",
      "Custom Home Tinting Solutions",
    ],
    filmTypes: [
      {
        name: "Reflective Window Film",
        description:
          "This film offers a sleek, mirrored finish that enhances privacy by reflecting light. It reduces heat and glare while providing excellent UV protection and increasing the overall comfort inside your vehicle.",
      },
      {
        name: "Dual-Reflective Window Film",
        description:
          "Designed for both exterior and interior benefits, this film offers a reflective finish on the outside for heat rejection and privacy, while maintaining a more neutral appearance on the inside to reduce mirror-like reflections.",
      },
      {
        name: "Neutral Window Film",
        description:
          "Neutral Window Film provides a balanced look without changing the color of your vehicle’s windows. It effectively blocks heat and UV rays while maintaining a natural, true-to-life view.",
      },
      {
        name: "Specialty Window Film",
        description:
          "Tailored for unique needs, this film offers specialized features like anti-graffiti, anti-scratch, or decorative options. It’s perfect for specific applications that require additional protection or aesthetic appeal.",
      },
      {
        name: "Ceramic Window Film",
        description:
          "Using advanced ceramic technology, this film provides superior heat rejection and UV protection without compromising visibility. It’s non-metallic, ensuring no interference with electronic devices, and offers long-lasting durability.",
      },
      {
        name: "Harmony Window Film",
        description:
          "Designed for a more uniform look, Harmony Window Film balances heat and glare rejection while maintaining a consistent tint throughout the vehicle. It enhances privacy and comfort without drastically altering the vehicle's appearance.",
      },
    ],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction Services",
    list: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
    filmTypes: [
      {
        name: "Stage 1 Correction",
        description:
          "Removes light swirls and scratches to restore your car's shine.",
      },
      {
        name: "Stage 2 Correction",
        description:
          "A more intensive process to eliminate deeper scratches and imperfections.",
      },
      {
        name: "Stage 3 Correction",
        description:
          "Comprehensive restoration for severely damaged paint, returning a showroom-quality finish.",
      },
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services",
    list: [
      "Front End PPF",
      "Extended PPF",
      "Track Package PPF",
      "Full Car PPF",
      "Color Change PPF",
      "Stealth/Matte PPF",
    ],
    filmTypes: [
      {
        name: "DYNOshield",
        description:
          "The most popular option for high-gloss finishes. It provides exceptional durability, hydrophobic protection, and a sleek shine, backed by a 10-year warranty.",
      },
      {
        name: "DYNOmatte",
        description:
          "Perfect for matte and satin finishes. It preserves the subtle beauty of matte paint while providing excellent protection and a smooth, self-healing surface.",
      },
      {
        name: "DYNOmight",
        description:
          "For those who demand extra durability, DYNOmight is 25% thicker than regular PPF, offering superior protection for off-road vehicles and high-performance sports cars.",
      },
      {
        name: "Color Change PPF",
        description:
          "Premium paint protection film that not only protects your vehicle's paint but also allows you to change its color or finish. This innovative product offers a unique combination of style and protection, making it an ideal solution for those who want to personalize their car’s look while safeguarding its paint from damage",
      },
    ],
  },
  "headlight-services": {
    title: "Headlight Services",
    list: ["Headlight Tint", "Taillight Tint", "Reflectors"],
    filmTypes: [
      {
        name: "DYNOshade",
        description:
          "Provides a subtle shaded effect, offering 45% light transmittance.",
      },
      {
        name: "DYNOshadow",
        description:
          "Delivers a medium charcoal tone with 34% light transmittance.",
      },
      {
        name: "DYNOsmoke",
        description:
          "The darkest option at 30% light transmittance, ideal for a stealthy look.",
      },
      {
        name: "DYNOstorm",
        description:
          "A neutral gray with 50% light transmittance, giving a sleek appearance.",
      },
      {
        name: "DYNOyellow",
        description:
          "Inspired by racing culture, offering a classic yellow tint.",
      },
    ],
  },
  "windshield-protection-film": {
    title: "Headlight Services",
    list: ["Headlight Tint", "Taillight Tint", "Reflectors"],
    filmTypes: [
      {
        name: "GT3 Exo Shield",
        description:
          "ExoShield GT3 Windshield Protection offers top-tier protection for your vehicle’s windshield. This clear, durable film shields against chips, cracks, and road debris, ensuring your windshield stays intact longer. Designed for maximum clarity, it preserves your view while providing superior impact resistance—ideal for daily drivers and those who want to safeguard their investment.",
      },
    ],
  },
};

// Helper function to split an array into chunks of a specific size
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ServicesOffered = ({ serviceId }) => {
  const service = serviceOptions[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center">
        Services not found
      </Typography>
    );
  }

  const renderFilmCard = (film, index) => {
    const isColorChangePPF =
      serviceId === "vehicle-paint-protection" &&
      film.name === "Color Change PPF";

    return (
      <Card
        key={index}
        sx={{
          position: "relative",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: 5,
          boxShadow: 3,
          height: "100%",
          transition: "all 0.3s ease-in-out",
          border: "3px solid #fff",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 15px #2794d2",
            backgroundColor: "#333",
          },
        }}
      >
        {/* Film Logo */}
        <Box
          component="img"
          src={
            serviceId === "windshield-protection-film"
              ? "/windshield/exo.png"
              : serviceId === "vehicle-paint-protection" ||
                serviceId === "headlight-services"
              ? "/stek-logo.png"
              : "/llumar-logo.png"
          }
          alt="Film Type Logo"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 80,
            height: "auto",
            filter:
              serviceId === "vehicle-paint-protection" ||
              serviceId === "headlight-services"
                ? "invert(1)"
                : "none",
          }}
        />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
            height: "100%", // Ensures card takes up full height
          }}
        >
          <LayersIcon sx={{ fontSize: 40, color: "#2794d2", mb: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            {film.name}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {film.description}
          </Typography>

          {/* Special Button for Color Change PPF */}
          {isColorChangePPF && (
            <Link
              to="https://www.stek-usa.com/fashion-film/?gad_source=1&gbraid=0AAAAApzm59nXMARmXUREslvQbkY3LkfAm&gclid=CjwKCAjwzMi_BhACEiwAX4YZUIGLt8C3CHDIZ12TlPt6DFznknS7D-da5PcSAv0J1-0yZK2qd-dw-BoCoPEQAvD_BwE"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  mt: 3,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #2794d2 0%, #1b6fa5 100%)",
                  borderRadius: 50,
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 4px 15px rgba(39,148,210,0.3)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(39,148,210,0.4)",
                  },
                  "&:active": {
                    transform: "translateY(1px)",
                  },
                }}
              >
                <span>Explore Color Options</span>
                <span>→</span>
              </Box>
            </Link>
          )}

          {serviceId === "windshield-protection-film" && (
            <Link
              to="https://cdn.prod.website-files.com/5c870322e90205bd3137c6df/65b9089bb070e4995e0fec67_2%20-%20GT3%2B%20Limited%20Product%20Warranty%20%5BConsumer%5D.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  mt: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, #2794d2 0%, #1b6fa5 100%)",
                  borderRadius: 50,
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 4px 15px rgba(39,148,210,0.3)",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 6px 20px rgba(39,148,210,0.4)",
                  },
                  "&:active": {
                    transform: "translateY(1px)",
                  },
                }}
              >
                <span>See Warranty Coverage</span>
                <span>→</span>
              </Box>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <Box
      sx={{
        py: 6,
        px: isMobile ? 1.2 : 4,
        backgroundColor: "#000",
        color: "#fff",
        width: "100vw",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ mb: 2, fontWeight: "bold", color: "#fff", textAlign: "center" }}
        >
          {serviceId === "commercial-window-tinting"
            ? "Commercial Window Tinting Services"
            : serviceId === "residential-window-tinting"
            ? "Residential Window Tinting Services"
            : serviceId === "vehicle-paint-protection"
            ? "Stek PPF Options"
            : serviceId === "headlight-services"
            ? "Available Tones:"
            : "Film Types"}
        </Typography>

        {(serviceId === "commercial-window-tinting" ||
          serviceId === "residential-window-tinting") && (
          <List
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: { xs: "flex-start", sm: "center" },
            }}
          >
            {service.list.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                  m: 0,
                  p: 0,
                }}
              >
                <ListItemIcon sx={{ minWidth: "auto", mr: 0.5 }}>
                  <CheckCircleIcon sx={{ color: "#2794d2" }} />
                </ListItemIcon>
                <ListItemText primary={item} sx={{ m: 0 }} />
              </ListItem>
            ))}
          </List>
        )}

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 4, mb: 2, textAlign: serviceId === "tesla-window-tinting"? "center" : "left" }}>
          The <strong>main types of film</strong> we use:
        </Typography>

        {/* Responsive Layout: Carousel on mobile, grid on desktop */}
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              py: 2,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {service.filmTypes.map((film, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 85%",
                  minWidth: "85%",
                  scrollSnapAlign: "center",
                }}
              >
                {renderFilmCard(film, index)}
              </Box>
            ))}
          </Box>
        ) : (
          // For desktop, chunk the filmTypes into rows of 3 and center the last row if incomplete
          chunkArray(service.filmTypes, 3).map((filmRow, rowIndex, allRows) => (
            <Grid
              container
              spacing={3}
              key={rowIndex}
              justifyContent={
                filmRow.length < 3 && rowIndex === allRows.length - 1
                  ? "center"
                  : "flex-start"
              }
              sx={{ mb: rowIndex !== allRows.length - 1 ? 3 : 0 }}
            >
              {filmRow.map((film, index) => {
                const isColorChangePPF =
                  serviceId === "vehicle-paint-protection" &&
                  film.name === "Color Change PPF";
                const isSingleCard = service.filmTypes.length === 1;

                return (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={isSingleCard || isColorChangePPF ? 12 : 6}
                    md={isSingleCard || isColorChangePPF ? 12 : 4}
                    sx={{ display: "flex" }}
                  >
                    <Box sx={{ position: "relative", width: "100%" }}>
                      {renderFilmCard(film, index)}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          ))
        )}

        {/* Call to Action - Tint/PPF Viewer */}
        {serviceId !== "headlight-services" &&
          serviceId !== "windshield-protection-film" && (
            <Box
              sx={{
                mt: 3,
                textAlign: "center",
                background: "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)",
                py: 5,
                px: 3,
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Abstract shape for visual interest */}
              <Box
                sx={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(39,148,210,0.2) 0%, rgba(39,148,210,0) 70%)",
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -40,
                  left: -40,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(39,148,210,0.1) 0%, rgba(39,148,210,0) 70%)",
                  zIndex: 0,
                }}
              />
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    background: "linear-gradient(90deg, #fff 0%, #bfdfff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  {serviceId === "vehicle-paint-protection"
                    ? "See how each paint protection film package covers your vehicle!"
                    : "Experience Your Tints Before Installation"}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: 600,
                    mx: "auto",
                    fontSize: "1.1rem",
                  }}
                >
                  {serviceId === "vehicle-paint-protection"
                    ? "From bumpers to full body, our simulator shows what’s protected."
                    : "Our interactive simulator shows you exactly how each shade will transform your view."}
                </Typography>
                <Link
                  to={`/simulators/${serviceId}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#fff",
                      background:
                        "linear-gradient(90deg, #2794d2 0%, #1b6fa5 100%)",
                      borderRadius: 50,
                      transition: "all 0.3s ease-in-out",
                      boxShadow: "0 4px 15px rgba(39,148,210,0.3)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 6px 20px rgba(39,148,210,0.4)",
                      },
                      "&:active": {
                        transform: "translateY(1px)",
                      },
                    }}
                  >
                    <Box component="span">
                      {serviceId === "vehicle-paint-protection"
                        ? "Launch PPF Viewer"
                        : "Launch Tint Viewer"}
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        transform: "translateX(0)",
                        transition: "transform 0.2s ease-in-out",
                        ".MuiBox-root:hover &": {
                          transform: "translateX(3px)",
                        },
                      }}
                    >
                      →
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          )}
      </Box>
    </Box>
  );
};

export default ServicesOffered;
