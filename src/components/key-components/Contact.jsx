import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Typography,
  Alert,
  Slider,
  useMediaQuery,
  useTheme,
  InputAdornment,
  CircularProgress,
  alpha,
  styled,
  Fade,
  Grow,
  ThemeProvider,
  createTheme
} from "@mui/material";
import {
  Building,
  Mail,
  Phone,
  User,
  MessageSquare,
  Settings,
  DollarSign,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import CTA from "../subpage-components/CTA";


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
});


// Apple-inspired styled components with dark theme
const AppleCard = styled(Card)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.9)",
  borderRadius: "24px",
  backdropFilter: "blur(60px) saturate(180%)",
  WebkitBackdropFilter: "blur(60px) saturate(180%)",
  boxShadow:
    "0 16px 64px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(201, 180, 154, 0.08), inset 0 1px 0 rgba(201, 180, 154, 0.1)",
  border: "1px solid rgba(201, 180, 154, 0.15)",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(201, 180, 154, 0.3), transparent)",
  },
}));

const AppleTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(201, 180, 154, 0.2)",
    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fontSize: "17px",
    fontWeight: 400,
    backdropFilter: "blur(20px)",
    "& input": {
      padding: "18px 16px",
      fontSize: "17px",
      fontWeight: 400,
      color: "rgba(255, 255, 255, 0.95)",
      "&::placeholder": {
        color: "rgba(201, 180, 154, 0.6)",
        opacity: 1,
        fontSize: "17px",
      },
    },
    "& textarea": {
      fontSize: "17px",
      fontWeight: 400,
      color: "rgba(255, 255, 255, 0.95)",
      "&::placeholder": {
        color: "rgba(201, 180, 154, 0.6)",
        opacity: 1,
        fontSize: "17px",
      },
    },
    "& fieldset": {
      border: "none",
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(201, 180, 154, 0.4)",
      boxShadow: "0 0 0 1px rgba(201, 180, 154, 0.1)",
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: "#c9b49a",
      borderWidth: "2px",
      boxShadow:
        "0 0 0 4px rgba(201, 180, 154, 0.15), 0 4px 20px rgba(201, 180, 154, 0.1)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(201, 180, 154, 0.8)",
    fontSize: "17px",
    fontWeight: 400,
    transform: "translate(16px, 18px) scale(1)",
    "&.MuiInputLabel-shrink": {
      transform: "translate(16px, -9px) scale(0.8)",
      fontSize: "14px",
      fontWeight: 500,
      color: "#c9b49a",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "#FF6B6B",
    marginTop: "8px",
    fontSize: "13px",
    fontWeight: 400,
    marginLeft: "4px",
  },
  "& .MuiInputAdornment-root svg": {
    color: "rgba(201, 180, 154, 0.7)",
    width: "20px",
    height: "20px",
  },
}));

const AppleSelect = styled(Select)(({ theme }) => ({
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(201, 180, 154, 0.2)",
  fontSize: "17px",
  fontWeight: 400,
  backdropFilter: "blur(20px)",
  color: "rgba(255, 255, 255, 0.95)",
  "& .MuiSelect-select": {
    padding: "18px 16px",
    fontSize: "17px",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.95)",
  },
  "& .MuiSvgIcon-root": {
    color: "rgba(201, 180, 154, 0.7)",
    right: "12px",
  },
  "& fieldset": {
    border: "none",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "rgba(201, 180, 154, 0.4)",
  },
  "&.Mui-focused": {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderColor: "#c9b49a",
    borderWidth: "2px",
    boxShadow: "0 0 0 4px rgba(201, 180, 154, 0.15)",
  },
}));

const AppleMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 400,
  padding: "12px 16px",
  color: "rgba(255, 255, 255, 0.95)",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  "&:hover": {
    backgroundColor: "rgba(201, 180, 154, 0.15)",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(201, 180, 154, 0.2)",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: 600,
  color: "rgba(255, 255, 255, 0.95)",
  marginBottom: "28px",
  letterSpacing: "-0.4px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #c9b49a 0%, #b5a088 100%)",
  borderRadius: "12px",
  padding: "10px",
  width: "44px",
  height: "44px",
  boxShadow:
    "0 4px 16px rgba(201, 180, 154, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
}));

const AppleDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "rgba(201, 180, 154, 0.2)",
  height: "1px",
  marginBottom: "36px",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "60px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #c9b49a, transparent)",
  },
}));

const AppleButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #c9b49a 0%, #b5a088 50%, #a08d7a 100%)",
  borderRadius: "16px",
  padding: "20px 32px",
  fontSize: "18px",
  fontWeight: 600,
  letterSpacing: "-0.3px",
  textTransform: "none",
  color: "#000",
  boxShadow:
    "0 8px 32px rgba(201, 180, 154, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  "&:hover": {
    background:
      "linear-gradient(135deg, #d4bf9f 0%, #c0ad93 50%, #ab987f 100%)",
    transform: "translateY(-2px)",
    boxShadow:
      "0 12px 40px rgba(201, 180, 154, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
  },
  "&:active": {
    transform: "translateY(0px)",
    boxShadow:
      "0 4px 16px rgba(201, 180, 154, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  },
  "&.Mui-disabled": {
    background: "rgba(201, 180, 154, 0.3)",
    color: "rgba(255, 255, 255, 0.4)",
    boxShadow: "none",
  },
}));

const AppleSlider = styled(Slider)(({ theme }) => ({
  color: "#c9b49a",
  height: "6px",
  padding: "20px 0",
  "& .MuiSlider-track": {
    border: "none",
    background: "linear-gradient(90deg, #c9b49a, #b5a088)",
    height: "6px",
    borderRadius: "3px",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "rgba(201, 180, 154, 0.2)",
    height: "6px",
    borderRadius: "3px",
  },
  "& .MuiSlider-thumb": {
    height: "24px",
    width: "24px",
    backgroundColor: "#c9b49a",
    border: "3px solid rgba(0, 0, 0, 0.8)",
    boxShadow:
      "0 4px 16px rgba(201, 180, 154, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 4px 20px rgba(201, 180, 154, 0.5), 0 0 0 12px rgba(201, 180, 154, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#c9b49a",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    padding: "6px 12px",
    color: "#000",
    boxShadow: "0 4px 12px rgba(201, 180, 154, 0.3)",
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-mark": {
    backgroundColor: "rgba(201, 180, 154, 0.4)",
    height: "6px",
    width: "3px",
    borderRadius: "1.5px",
    "&.MuiSlider-markActive": {
      backgroundColor: "#c9b49a",
    },
  },
  "& .MuiSlider-markLabel": {
    fontSize: "13px",
    fontWeight: 500,
    color: "rgba(201, 180, 154, 0.8)",
    marginTop: "12px",
  },
}));

const AppleRadio = styled(Radio)(({ theme }) => ({
  color: "rgba(201, 180, 154, 0.6)",
  "&.Mui-checked": {
    color: "#c9b49a",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
}));

const AppleCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "rgba(201, 180, 154, 0.6)",
  "&.Mui-checked": {
    color: "#c9b49a",
  },
}));

const propertyTypesOptions = [
  { value: "office", label: "Office Space" },
  { value: "retail", label: "Retail" },
  { value: "industrial", label: "Industrial" },
  { value: "mixed", label: "Mixed Use" },
  { value: "land", label: "Land" },
  { value: "residential", label: "Residential" },
  { value: "hospitality", label: "Hospitality" },
];

const budgetMarks = [
  { value: 100000, label: "$100K" },
  { value: 500000, label: "$500K" },
  { value: 1000000, label: "$1M" },
  { value: 5000000, label: "$5M" },
  { value: 10000000, label: "$10M+" },
];

export default function ContactForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    propertyType: "",
    budget: 1000000,
    contactPreference: "email",
    newsletter: true,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const formatBudget = (value) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    if (!touched[name]) {
      setTouched({ ...touched, [name]: true });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSliderChange = (_, newValue) => {
    setFormData({ ...formData, budget: newValue });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value.trim() ? "Name is required" : "";
      case "email":
        return !value.trim()
          ? "Email is required"
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        return !value.trim()
          ? "Phone number is required"
          : !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
              value
            )
          ? "Please enter a valid phone number"
          : "";
      case "message":
        return !value.trim() ? "Message is required" : "";
      case "propertyType":
        return !value ? "Please select a property type" : "";
      default:
        return "";
    }
  };

  useEffect(() => {
    const newErrors = {};
    Object.keys(touched).forEach((field) => {
      if (touched[field]) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
        }
      }
    });
    setErrors(newErrors);
  }, [formData, touched]);

  const validateAllFields = () => {
    const allTouched = {};
    const validationErrors = {};

    ["name", "email", "phone", "message", "propertyType"].forEach((field) => {
      allTouched[field] = true;
      const error = validateField(field, formData[field]);
      if (error) {
        validationErrors[field] = error;
      }
    });

    setTouched(allTouched);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        propertyType: "",
        budget: 1000000,
        contactPreference: "email",
        newsletter: true,
      });
      setTouched({});
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setIsSubmitted(false);
    setSubmitError(null);
  };

  return (
    <ThemeProvider theme={appleTheme}>
    <Box
      sx={{
        minHeight: "100vh",
           background:
            "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        py: { xs: 2, sm: 8 },
        px: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
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
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
          pt: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: "left", mb: 8, pl: 2 }}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{
                fontSize: { xs: "38px", md: "72px" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #fff 0%, #c9b49a 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "20px",
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "22px",
                fontWeight: 400,
                color: "rgba(201, 180, 154, 0.9)",
                maxWidth: "700px",
                lineHeight: 1.5,
                letterSpacing: "-0.2px",
              }}
            >
              Ready to explore exceptional investment opportunities? Share your
              vision and let's create something extraordinary together.
            </Typography>
          </Box>
        </Fade>

        {/* Form Card */}
        <Grow in timeout={1200}>
          <AppleCard>
            <CardContent sx={{ p: { xs: 4, sm: 8 } }}>
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={5}>
                  {/* Personal Information */}
                  <Grid item xs={12}>
                    <SectionTitle>
                      <IconWrapper>
                        <User size={22} color="#000" />
                      </IconWrapper>
                      Personal Information
                    </SectionTitle>
                    <AppleDivider />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <AppleTextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <AppleTextField
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <AppleTextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Mail size={20} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <AppleTextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                      required
                      placeholder="(123) 456-7890"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone size={20} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Property Requirements */}
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <SectionTitle>
                      <IconWrapper>
                        <Building size={22} color="#000" />
                      </IconWrapper>
                      Investment Requirements
                    </SectionTitle>
                    <AppleDivider />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl
                      fullWidth
                      error={touched.propertyType && !!errors.propertyType}
                      required
                    >
                      <FormLabel
                        sx={{
                          mb: 2,
                          fontSize: "17px",
                          fontWeight: 500,
                          color: "rgba(201, 180, 154, 0.9)",
                        }}
                      >
                        Property Type
                      </FormLabel>
                      <AppleSelect
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        displayEmpty
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              bgcolor: "rgba(0, 0, 0, 0.95)",
                              backdropFilter: "blur(20px)",
                              border: "1px solid rgba(201, 180, 154, 0.2)",
                              borderRadius: "12px",
                              boxShadow: "0 16px 64px rgba(0, 0, 0, 0.4)",
                            },
                          },
                        }}
                      >
                        <AppleMenuItem value="" disabled>
                          Select property type
                        </AppleMenuItem>
                        {propertyTypesOptions.map((option) => (
                          <AppleMenuItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </AppleMenuItem>
                        ))}
                      </AppleSelect>
                      {touched.propertyType && errors.propertyType && (
                        <FormHelperText
                          sx={{ color: "#FF6B6B", fontSize: "13px", mt: 1 }}
                        >
                          {errors.propertyType}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <FormLabel
                        sx={{
                          mb: 3,
                          fontSize: "17px",
                          fontWeight: 500,
                          color: "rgba(201, 180, 154, 0.9)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <DollarSign size={18} /> Investment Budget
                      </FormLabel>
                      <Box sx={{ px: 3, pt: 2, pb: 2 }}>
                        <AppleSlider
                          value={formData.budget}
                          onChange={handleSliderChange}
                          min={100000}
                          max={10000000}
                          step={100000}
                          marks={budgetMarks}
                          valueLabelDisplay="auto"
                          valueLabelFormat={formatBudget}
                        />
                      </Box>
                      <Typography
                        sx={{
                          textAlign: "center",
                          mt: 2,
                          fontSize: "20px",
                          fontWeight: 600,
                          color: "#c9b49a",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        {formatBudget(formData.budget)}
                      </Typography>
                    </FormControl>
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <SectionTitle>
                      <IconWrapper>
                        <MessageSquare size={22} color="#000" />
                      </IconWrapper>
                      Share Your Vision
                    </SectionTitle>
                    <AppleDivider />
                  </Grid>

                  <Grid item xs={12}>
                    <AppleTextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && !!errors.message}
                      helperText={touched.message && errors.message}
                      required
                      multiline
                      rows={5}
                      placeholder="Tell us about your investment goals, timeline, and what makes this opportunity special to you..."
                    />
                  </Grid>

                  {/* Contact Preferences */}
                  <Grid item xs={12}>
                    <SectionTitle>
                      <IconWrapper>
                        <Settings size={22} color="#000" />
                      </IconWrapper>
                      Communication Preferences
                    </SectionTitle>
                    <AppleDivider />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel
                        sx={{
                          fontSize: "30px",
                          fontWeight: 500,
                          color: "rgba(201, 180, 154, 0.9)",
                        }}
                      >
                        How would you prefer to be contacted?
                      </FormLabel>
                      <RadioGroup
                        name="contactPreference"
                        value={formData.contactPreference}
                        onChange={handleChange}
                        sx={{ gap: 1 }}
                      >
                        <FormControlLabel
                          value="email"
                          control={<AppleRadio />}
                          label={
                            <Typography
                              sx={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}
                            >
                              Email
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value="phone"
                          control={<AppleRadio />}
                          label={
                            <Typography
                              sx={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}
                            >
                              Phone
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          value="either"
                          control={<AppleRadio />}
                          label={
                            <Typography
                              sx={{ fontSize: "20px", fontWeight: 400, color: "#fff" }}
                            >
                              Either
                            </Typography>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControlLabel
                      control={
                        <AppleCheckbox
                          checked={formData.newsletter}
                          onChange={handleChange}
                          name="newsletter"
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            fontSize: "17px",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.95)",
                          }}
                        >
                          Subscribe to our newsletter for market insights
                        </Typography>
                      }
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12} sx={{ mt: 4 }}>
                    <AppleButton
                      type="submit"
                      fullWidth
                      disabled={isSubmitting}
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <ArrowRight size={20} />
                        )
                      }
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </AppleButton>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </AppleCard>
        </Grow>

        {/* Success Snackbar */}
        <Snackbar
          open={isSubmitted}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
            sx={{
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: 400,
              bgcolor: "#34C759",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(52, 199, 89, 0.24)",
            }}
          >
            Message sent successfully! We'll be in touch soon.
          </Alert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar
          open={!!submitError}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            variant="filled"
            sx={{
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: 400,
              bgcolor: "#FF3B30",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(255, 59, 48, 0.24)",
            }}
          >
            {submitError}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
    </ThemeProvider>
  );
} 