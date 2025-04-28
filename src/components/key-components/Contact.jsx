import React, { useState } from "react";
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
  useMediaQuery,
  useTheme,
  InputAdornment,
  alpha,
  styled
} from "@mui/material";
import { Building, Mail, Phone, User, MessageSquare, Settings } from "lucide-react";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(145deg, #1a1a1a 0%, #111111 100%)',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.light, 0.6)})`,
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: alpha('#000', 0.2),
    color: '#fff',
    '& input': {
      color: '#fff',
      '::placeholder': {
        color: alpha('#fff', 0.6),
      }
    },
    '& textarea': {
      color: '#fff',
      '::placeholder': {
        color: alpha('#fff', 0.6),
      }
    },
    '& fieldset': {
      borderColor: alpha('#fff', 0.2),
    },
    '&:hover fieldset': {
      borderColor: alpha('#fff', 0.5),
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    }
  },
  '& .MuiInputLabel-root': {
    color: alpha('#fff', 0.7),
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fff',
  },
  '& .MuiFormHelperText-root': {
    color: '#ff6f6f',
  }
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  backgroundColor: alpha('#000', 0.2),
  color: '#fff',
  '& .MuiSelect-select': {
    color: '#fff',
  },
  '& .MuiSvgIcon-root': {
    color: '#fff',
  },
  '& fieldset': {
    borderColor: alpha('#fff', 0.2),
  },
  '&:hover fieldset': {
    borderColor: alpha('#fff', 0.5),
  },
  '&.Mui-focused fieldset': {
    borderColor: theme.palette.primary.main,
  }
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  color: '#fff',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  fontWeight: 600,
  color: alpha(theme.palette.primary.main, 0.9),
  marginBottom: theme.spacing(1),
  '& svg': {
    color: theme.palette.primary.main,
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  borderRadius: '50%',
  padding: theme.spacing(1),
  width: 36,
  height: 36,
}));

const GlowDivider = styled(Divider)(({ theme }) => ({
  background: `linear-gradient(to right, ${alpha(theme.palette.primary.main, 0.5)}, transparent)`,
  height: '1px',
  marginBottom: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: `0 4px 15px ${alpha(theme.palette.primary.main, 0.4)}`,
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
  }
}));

export default function ContactForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
    propertyType: "", budget: "", contactPreference: "email", newsletter: true
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.propertyType) newErrors.propertyType = "Please select a property type";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "", email: "", phone: "", company: "", message: "",
      propertyType: "", budget: "", contactPreference: "email", newsletter: true
    });
  };

  const handleCloseSnackbar = () => setIsSubmitted(false);

  return (
    <Box sx={{ width: "100%", background: 'transparent' }}>
      <Box sx={{ maxWidth: "90rem", mx: "auto", px: 4, py: 8, color: 'white' }} id="contact">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant={isMobile ? "h3" : "h2"}
            fontWeight={700}
            mb={2}
            sx={{
              background: "linear-gradient(to right, #c9b49a, #e2c799)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              mx: "auto", width: 60, height: 3, mb: 3,
              background: "linear-gradient(to right, rgba(201,180,154,0.8), rgba(201,180,154,0.2))",
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: 800, mx: "auto", fontWeight: 400, lineHeight: 1.6,
            }}
          >
            Interested in exploring investment opportunities? Reach out to our team of experts and let us guide you through your next venture.
          </Typography>
        </Box>

        {/* Form Card */}
        <StyledCard>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>

                {/* Personal Info */}
                <Grid item xs={12}>
                  <SectionTitle variant="h6">
                    <IconWrapper><User size={18} /></IconWrapper>
                    Personal Information
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12} md={4}>
                  <StyledTextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} required variant="outlined" />
                </Grid>

                <Grid item xs={12} md={4}>
                  <StyledTextField fullWidth label="Company Name (Optional)" name="company" value={formData.company} onChange={handleChange} variant="outlined" />
                </Grid>

                <Grid item xs={12} md={4}>
                  <StyledTextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required variant="outlined" />
                </Grid>

                <Grid item xs={12} md={4}>
                  <StyledTextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} required variant="outlined" />
                </Grid>

                {/* Property Requirements */}
                <Grid item xs={12}>
                  <SectionTitle variant="h6">
                    <IconWrapper><Building size={18} /></IconWrapper>
                    Property Requirements
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl fullWidth error={!!errors.propertyType} required>
                    <FormLabel sx={{ mb: 1, color: alpha('#fff', 0.7) }}>Property Type</FormLabel>
                    <StyledSelect name="propertyType" value={formData.propertyType} onChange={handleChange} displayEmpty>
                      <StyledMenuItem value="" disabled>Select property type</StyledMenuItem>
                      <StyledMenuItem value="office">Office Space</StyledMenuItem>
                      <StyledMenuItem value="retail">Retail</StyledMenuItem>
                      <StyledMenuItem value="industrial">Industrial</StyledMenuItem>
                      <StyledMenuItem value="mixed">Mixed Use</StyledMenuItem>
                      <StyledMenuItem value="land">Land</StyledMenuItem>
                    </StyledSelect>
                    {errors.propertyType && <FormHelperText>{errors.propertyType}</FormHelperText>}
                  </FormControl>
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <SectionTitle variant="h6">
                    <IconWrapper><MessageSquare size={18} /></IconWrapper>
                    Your Message
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12}>
                  <StyledTextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} required multiline rows={4} variant="outlined" />
                </Grid>

                {/* Contact Preferences */}
                <Grid item xs={12}>
                  <SectionTitle variant="h6">
                    <IconWrapper><Settings size={18} /></IconWrapper>
                    Contact Preferences
                  </SectionTitle>
                  <GlowDivider />
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel sx={{ color: alpha('#fff', 0.7) }}>Preferred Contact Method</FormLabel>
                    <RadioGroup row name="contactPreference" value={formData.contactPreference} onChange={handleChange}>
                      <FormControlLabel value="email" control={<Radio sx={{ color: '#fff' }} />} label="Email" />
                      <FormControlLabel value="phone" control={<Radio sx={{ color: '#fff' }} />} label="Phone" />
                      <FormControlLabel value="either" control={<Radio sx={{ color: '#fff' }} />} label="Either" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox checked={formData.newsletter} onChange={handleChange} name="newsletter" sx={{ color: '#fff' }} />} label="Subscribe to our newsletter for market insights and property listings" />
                </Grid> */}

                <Grid item xs={12}>
                  <SubmitButton type="submit" variant="contained" fullWidth disableElevation>
                    Submit Inquiry
                  </SubmitButton>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </StyledCard>

        {/* Snackbar */}
        <Snackbar open={isSubmitted} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ borderRadius: 2, bgcolor: alpha(theme.palette.success.main, 0.9), color: '#fff' }}>
            Thank you for contacting us! We'll get back to you shortly.
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
