import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
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
  Alert
} from '@mui/material';
import { Building, Mail, Phone, User } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    propertyType: '',
    budget: '',
    contactPreference: 'email',
    newsletter: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
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
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      propertyType: '',
      budget: '',
      contactPreference: 'email',
      newsletter: true
    });
  };

  const handleCloseSnackbar = () => setIsSubmitted(false);

  return (
    <Box sx={{ maxWidth: '90rem', mx: 'auto', px: 4, py: 4 }} id="contact">
      <Card sx={{ boxShadow: 3 }}>
        <CardHeader
          sx={{ backgroundColor: 'primary.light', pb: 0 }}
          title={<Typography variant="h" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>Contact Our Commercial Real Estate Experts</Typography>}
          subheader={<Typography sx={{ color: 'text.secondary', mt: 1 }}>Looking for the perfect commercial space? Our team is ready to assist you with your real estate needs.</Typography>}
        />
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', display: 'flex', alignItems: 'center', mb: 2 }}>
                  <User size={20} style={{ marginRight: 8 }} />
                  Personal Information
                </Typography>
                <Divider sx={{ mb: 3 }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} required variant="outlined" />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Company Name (Optional)" name="company" value={formData.company} onChange={handleChange} variant="outlined" />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required variant="outlined" InputProps={{ startAdornment: <Mail size={18} style={{ marginRight: 8, color: '#9e9e9e' }} /> }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} required variant="outlined" InputProps={{ startAdornment: <Phone size={18} style={{ marginRight: 8, color: '#9e9e9e' }} /> }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Building size={20} style={{ marginRight: 8 }} />
                  Property Requirements
                </Typography>
                <Divider sx={{ mb: 3 }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth error={!!errors.propertyType} required>
                  <FormLabel>Property Type</FormLabel>
                  <Select name="propertyType" value={formData.propertyType} onChange={handleChange} displayEmpty>
                    <MenuItem value="" disabled>Select property type</MenuItem>
                    <MenuItem value="office">Office Space</MenuItem>
                    <MenuItem value="retail">Retail</MenuItem>
                    <MenuItem value="industrial">Industrial</MenuItem>
                    <MenuItem value="mixed">Mixed Use</MenuItem>
                    <MenuItem value="land">Land</MenuItem>
                  </Select>
                  {errors.propertyType && <FormHelperText>{errors.propertyType}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <FormLabel>Budget Range</FormLabel>
                  <Select name="budget" value={formData.budget} onChange={handleChange} displayEmpty>
                    <MenuItem value="" disabled>Select budget range</MenuItem>
                    <MenuItem value="under250k">Under $250K</MenuItem>
                    <MenuItem value="250k-500k">$250K - $500K</MenuItem>
                    <MenuItem value="500k-1m">$500K - $1M</MenuItem>
                    <MenuItem value="1m-5m">$1M - $5M</MenuItem>
                    <MenuItem value="over5m">Over $5M</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleChange} error={!!errors.message} helperText={errors.message} required multiline rows={4} variant="outlined" placeholder="Please tell us about your specific requirements or any questions you may have..." />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>Contact Preferences</Typography>
                <Divider sx={{ mb: 3 }} />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel>Preferred Contact Method</FormLabel>
                  <RadioGroup row name="contactPreference" value={formData.contactPreference} onChange={handleChange}>
                    <FormControlLabel value="email" control={<Radio />} label="Email" />
                    <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                    <FormControlLabel value="either" control={<Radio />} label="Either" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox checked={formData.newsletter3} onChange={handleChange} name="newsletter" color="primary" />} label="Subscribe to our newsletter for market insights and property listings" />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' }, py: 1.5, px: 3, borderRadius: 2 }}>
                  Submit Inquiry
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar open={isSubmitted} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Thank you for contacting us! We'll get back to you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}
