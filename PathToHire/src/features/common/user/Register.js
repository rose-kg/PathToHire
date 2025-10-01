import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { useState } from "react";
import validator from "validator";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    Fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState("");

  const validateForm = () => {
    let valid = true;
    const newErrors = { Fullname: "", email: "", password: "", confirmPassword: "" };

    const requiredFields = [
      { field: "Fullname", name: "Fullname" },
      { field: "email", name: "Email" },
      { field: "password", name: "Password" },
      { field: "confirmPassword", name: "Confirm Password" },
    ];
    requiredFields.forEach(({ field, name }) => {
      if (!formData[field]) {
        newErrors[field] = `${name} is required`;
        valid = false;
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters with at least one uppercase and one lowercase letter";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    if (!validator.isEmail(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add your login logic here
      console.log("Login successful");
      navigate("/login")
    } else {
      console.log("Login failed");
    }
  };
  

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: "400px",
          width: "100%",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <TextField
          fullWidth
          label="Fullname"
          name="Fullname"
          value={formData.Fullname}
          onChange={handleChange}
          error={Boolean(errors.username)}
          helperText={errors.username}
          margin="normal"
        />

          <TextField
          fullWidth
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={(e) => {
          handleChange(e);
          validateEmail(e);
        }}
          error={Boolean(emailError)}
          helperText={emailError}
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          margin="normal"
          sx={{ mt: 2 }}
        />

        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
          margin="normal"
          sx={{ mt: 2 }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.rememberMe}
              onChange={handleChange}
              name="rememberMe"
              color="primary"
            />
          }
          label="Remember Me"
          sx={{ mt: 1, textAlign: "left" }}
        />
        <Box>
         
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Register
        </Button>
     
        </Box>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          {/* <Link href="#" variant="body2">
            Forgot Password?
          </Link> */}
          <Box mt={1}>
            <Link component={RouterLink} to="/login" variant="body2">
              Have an account? Sign In
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Register;
