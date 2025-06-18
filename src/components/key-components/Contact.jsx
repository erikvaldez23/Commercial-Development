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
  Grow
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
  ArrowRight
} from "lucide-react";

// Apple-inspired styled components
const AppleCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.98)",
  borderRadius: "20px",
  backdropFilter: "blur(40px) saturate(200%)",
  WebkitBackdropFilter: "blur(40px) saturate(200%)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: "0 12px 48px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)",
  }
}));

const AppleTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: "12px",
    backgroundColor: "rgba(118, 118, 128, 0.04)",
    border: "1px solid rgba(118, 118, 128, 0.12)",
    transition: 'all 0.2s ease-in-out',
    fontSize: "17px",
    fontWeight: 400,
    '& input': {
      padding: "16px 14px",
      fontSize: "17px",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)",
      '&::placeholder': {
        color: "rgba(60, 60, 67, 0.6)",
        opacity: 1,
        fontSize: "17px"
      }
    },
    '& textarea': {
      fontSize: "17px",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)",
      '&::placeholder': {
        color: "rgba(60, 60, 67, 0.6)",
        opacity: 1,
        fontSize: "17px"
      }
    },
    '& fieldset': {
      border: 'none',
    },
    '&:hover': {
      backgroundColor: "rgba(118, 118, 128, 0.08)",
      borderColor: "rgba(0, 122, 255, 0.3)",
    },
    '&.Mui-focused': {
      backgroundColor: "rgba(118, 118, 128, 0.08)",
      borderColor: "#007AFF",
      borderWidth: "2px",
      boxShadow: "0 0 0 4px rgba(0, 122, 255, 0.1)",
    }
  },
  '& .MuiInputLabel-root': {
    color: "rgba(60, 60, 67, 0.6)",
    fontSize: "17px",
    fontWeight: 400,
    transform: 'translate(14px, 16px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.75)',
      fontSize: "13px",
      fontWeight: 500,
      color: "#007AFF",
    }
  },
  '& .MuiFormHelperText-root': {
    color: "#FF3B30",
    marginTop: "8px",
    fontSize: "13px",
    fontWeight: 400,
    marginLeft: "4px"
  },
  '& .MuiInputAdornment-root svg': {
    color: "rgba(60, 60, 67, 0.6)",
    width: "20px",
    height: "20px"
  }
}));

const AppleSelect = styled(Select)(({ theme }) => ({
  borderRadius: "12px",
  backgroundColor: "rgba(118, 118, 128, 0.04)",
  border: "1px solid rgba(118, 118, 128, 0.12)",
  fontSize: "17px",
  fontWeight: 400,
  '& .MuiSelect-select': {
    padding: "16px 14px",
    fontSize: "17px",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.87)",
  },
  '& .MuiSvgIcon-root': {
    color: "rgba(60, 60, 67, 0.6)",
    right: "12px"
  },
  '& fieldset': {
    border: 'none',
  },
  '&:hover': {
    backgroundColor: "rgba(118, 118, 128, 0.08)",
    borderColor: "rgba(0, 122, 255, 0.3)",
  },
  '&.Mui-focused': {
    backgroundColor: "rgba(118, 118, 128, 0.08)",
    borderColor: "#007AFF",
    borderWidth: "2px",
    boxShadow: "0 0 0 4px rgba(0, 122, 255, 0.1)",
  }
}));

const AppleMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 400,
  padding: "12px 16px",
  '&:hover': {
    backgroundColor: "rgba(0, 122, 255, 0.08)"
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  color: "rgba(0, 0, 0, 0.87)",
  marginBottom: "24px",
  letterSpacing: "-0.3px",
  display: 'flex',
  alignItems: 'center',
  gap: "12px"
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "#007AFF",
  borderRadius: "8px",
  padding: "8px",
  width: "36px",
  height: "36px",
}));

const AppleDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "rgba(118, 118, 128, 0.12)",
  height: "1px",
  marginBottom: "32px"
}));

const AppleButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#007AFF",
  borderRadius: "12px",
  padding: "16px 24px",
  fontSize: "17px",
  fontWeight: 600,
  letterSpacing: "-0.2px",
  textTransform: 'none',
  boxShadow: "0 4px 16px rgba(0, 122, 255, 0.24)",
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: "#0056CC",
    transform: 'translateY(-1px)',
    boxShadow: "0 6px 20px rgba(0, 122, 255, 0.32)",
  },
  '&:active': {
    transform: 'translateY(0px)',
    boxShadow: "0 2px 8px rgba(0, 122, 255, 0.24)",
  },
  '&.Mui-disabled': {
    backgroundColor: "rgba(118, 118, 128, 0.24)",
    color: "rgba(60, 60, 67, 0.3)",
    boxShadow: "none"
  }
}));

const AppleSlider = styled(Slider)(({ theme }) => ({
  color: "#007AFF",
  height: "4px",
  padding: "16px 0",
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: "#007AFF",
    height: "4px",
  },
  '& .MuiSlider-rail': {
    backgroundColor: "rgba(118, 118, 128, 0.16)",
    height: "4px",
  },
  '& .MuiSlider-thumb': {
    height: "20px",
    width: "20px",
    backgroundColor: '#fff',
    border: "2px solid #007AFF",
    boxShadow: "0 2px 8px rgba(0, 122, 255, 0.24)",
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: "0 2px 8px rgba(0, 122, 255, 0.32), 0 0 0 8px rgba(0, 122, 255, 0.12)",
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    backgroundColor: "#007AFF",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    padding: "4px 8px",
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiSlider-mark': {
    backgroundColor: "rgba(118, 118, 128, 0.32)",
    height: "4px",
    width: "2px",
    borderRadius: "1px",
    '&.MuiSlider-markActive': {
      backgroundColor: "#007AFF",
    },
  },
  '& .MuiSlider-markLabel': {
    fontSize: "13px",
    fontWeight: 400,
    color: "rgba(60, 60, 67, 0.6)",
    marginTop: "8px"
  }
}));

const propertyTypesOptions = [
  { value: "office", label: "Office Space" },
  { value: "retail", label: "Retail" },
  { value: "industrial", label: "Industrial" },
  { value: "mixed", label: "Mixed Use" },
  { value: "land", label: "Land" },
  { value: "residential", label: "Residential" },
  { value: "hospitality", label: "Hospitality" }
];

const budgetMarks = [
  { value: 100000, label: '$100K' },
  { value: 500000, label: '$500K' },
  { value: 1000000, label: '$1M' },
  { value: 5000000, label: '$5M' },
  { value: 10000000, label: '$10M+' },
];

export default function ContactForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    phone: "", 
    company: "", 
    message: "",
    propertyType: "", 
    budget: 1000000, 
    contactPreference: "email", 
    newsletter: true
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
      case 'name':
        return !value.trim() ? "Name is required" : "";
      case 'email':
        return !value.trim() 
          ? "Email is required" 
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) 
            ? "Please enter a valid email address" 
            : "";
      case 'phone':
        return !value.trim() 
          ? "Phone number is required" 
          : !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(value)
            ? "Please enter a valid phone number"
            : "";
      case 'message':
        return !value.trim() ? "Message is required" : "";
      case 'propertyType':
        return !value ? "Please select a property type" : "";
      default:
        return "";
    }
  };

  useEffect(() => {
    const newErrors = {};
    Object.keys(touched).forEach(field => {
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
    
    ['name', 'email', 'phone', 'message', 'propertyType'].forEach(field => {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "", email: "", phone: "", company: "", message: "",
        propertyType: "", budget: 1000000, contactPreference: "email", newsletter: true
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
    <Box sx={{ 
      minHeight: "100vh",
      background: "#000",
      padding: { xs: 2, sm: 4 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{ maxWidth: "1600px", width: "100%" }}>
        {/* Header */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                color: "rgba(0, 0, 0, 0.87)",
                marginBottom: "16px",
                letterSpacing: "-1px",
                lineHeight: 1.1
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                color: "rgba(60, 60, 67, 0.6)",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.4,
                letterSpacing: "-0.2px"
              }}
            >
              Ready to explore investment opportunities? Let's connect and discuss your next venture.
            </Typography>
          </Box>
        </Fade>

        {/* Form Card */}
        <Grow in timeout={1000}>
          <AppleCard>
            <CardContent sx={{ p: { xs: 4, sm: 6 } }}>
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={4}>
                  {/* Personal Information */}
                  <Grid item xs={12}>
                    <SectionTitle>
                      <IconWrapper>
                        <User size={20} color="white" />
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
                    />
                  </Grid>

                  {/* Property Requirements */}
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <SectionTitle>
                      <IconWrapper>
                        <Building size={20} color="white" />
                      </IconWrapper>
                      Property Requirements
                    </SectionTitle>
                    <AppleDivider />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={touched.propertyType && !!errors.propertyType} required>
                      <FormLabel sx={{ 
                        mb: 1, 
                        fontSize: "17px", 
                        fontWeight: 400,
                        color: "rgba(60, 60, 67, 0.6)" 
                      }}>
                        Property Type
                      </FormLabel>
                      <AppleSelect 
                        name="propertyType" 
                        value={formData.propertyType} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        displayEmpty
                      >
                        <AppleMenuItem value="" disabled>
                          Select property type
                        </AppleMenuItem>
                        {propertyTypesOptions.map(option => (
                          <AppleMenuItem key={option.value} value={option.value}>
                            {option.label}
                          </AppleMenuItem>
                        ))}
                      </AppleSelect>
                      {touched.propertyType && errors.propertyType && (
                        <FormHelperText sx={{ color: "#FF3B30", fontSize: "13px", mt: 1 }}>
                          {errors.propertyType}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <FormLabel sx={{ 
                        mb: 2, 
                        fontSize: "17px", 
                        fontWeight: 400,
                        color: "rgba(60, 60, 67, 0.6)",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}>
                        <DollarSign size={16} /> Investment Budget
                      </FormLabel>
                      <Box sx={{ px: 2, pt: 2, pb: 1 }}>
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
                      <Typography sx={{ 
                        textAlign: 'center', 
                        mt: 2, 
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "rgba(0, 0, 0, 0.87)" 
                      }}>
                        {formatBudget(formData.budget)}
                      </Typography>
                    </FormControl>
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <SectionTitle>
                      <IconWrapper>
                        <MessageSquare size={20} color="white" />
                      </IconWrapper>
                      Tell us about your project
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
                      rows={4} 
                      placeholder="Share your investment goals and requirements..."
                    />
                  </Grid>

                  {/* Contact Preferences */}
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <SectionTitle>
                      <IconWrapper>
                        <Settings size={20} color="white" />
                      </IconWrapper>
                      Preferences
                    </SectionTitle>
                    <AppleDivider />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset">
                      <FormLabel sx={{ 
                        fontSize: "17px", 
                        fontWeight: 400,
                        color: "rgba(60, 60, 67, 0.6)",
                        mb: 2
                      }}>
                        How would you like us to contact you?
                      </FormLabel>
                      <RadioGroup 
                        name="contactPreference" 
                        value={formData.contactPreference} 
                        onChange={handleChange}
                        sx={{ gap: 1 }}
                      >
                        <FormControlLabel 
                          value="email" 
                          control={<Radio sx={{ color: "#007AFF" }} />} 
                          label={<Typography sx={{ fontSize: "17px", fontWeight: 400 }}>Email</Typography>}
                        />
                        <FormControlLabel 
                          value="phone" 
                          control={<Radio sx={{ color: "#007AFF" }} />} 
                          label={<Typography sx={{ fontSize: "17px", fontWeight: 400 }}>Phone</Typography>}
                        />
                        <FormControlLabel 
                          value="either" 
                          control={<Radio sx={{ color: "#007AFF" }} />} 
                          label={<Typography sx={{ fontSize: "17px", fontWeight: 400 }}>Either</Typography>}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <FormControlLabel 
                      control={
                        <Checkbox 
                          checked={formData.newsletter} 
                          onChange={handleChange} 
                          name="newsletter" 
                          sx={{ color: "#007AFF" }}
                        />
                      } 
                      label={
                        <Typography sx={{ fontSize: "17px", fontWeight: 400, color: "rgba(0, 0, 0, 0.87)" }}>
                          Keep me updated with market insights and new opportunities
                        </Typography>
                      }
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <AppleButton 
                      type="submit" 
                      fullWidth 
                      disabled={isSubmitting}
                      endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <ArrowRight size={20} />}
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
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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
              color: '#fff',
              boxShadow: "0 8px 32px rgba(52, 199, 89, 0.24)"
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
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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
              color: '#fff',
              boxShadow: "0 8px 32px rgba(255, 59, 48, 0.24)"
            }}
          >
            {submitError}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}