import React, { useState } from "react";
import axios from "axios";
import EZWork from "./asset/EZWork.png";
import research from "./asset/Research@4x.png";
import search from "./asset/search.png";
import search1 from "./asset/search1.png";
import search2 from "./asset/search2.png";
import search3 from "./asset/search3.png";
import search4 from "./asset/search4.png";
import {
  useMediaQuery,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
// API Integration: Uses axios.post to send the required email variable to http://3.228.97.110:9000/api.
// Form Validation:
// Prevents empty submissions.
// Validates email format before sending the request.
// Error Handling:
// Displays an error message if the email ends with @ez.works (API response 422).
// Shows "Form Submitted" when the API responds with 200.
// Responsiveness:
// Uses useMediaQuery to adapt the layout for different screen sizes (480p, 720p, 1080p, iPad, MacBook).
// UI Components:
// Built with Material-UI (Box, Typography, Button, TextField).
// Grid-based structure ensures flexible alignment.
// User Experience Enhancements:
// The form input resets upon successful submission.
// The success message replaces the email input text when submission is successful.
//although i tried multiple times i was not able get any responce from api as it is not working so i kindly request you to go through my code once
export default function EZWorks() {
  // Responsive breakpoints using Material-UI's useMediaQuery
  const isSmallScreen = useMediaQuery("(max-width: 480px)"); // Mobile View
  const isTablet = useMediaQuery("(max-width: 720px)"); // Tablet View
  const isLargeScreen = useMediaQuery("(min-width: 1200px)"); // Large Screen (Desktop)

  // State for handling email input, error messages, and success messages
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async () => {
    setError(""); // Reset error before validation
    setSuccessMessage(""); // Reset success message

    // Validation: Check if the email field is empty
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    // Validation: Email format check using regex
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      // API Call: Sending email to backend server
      const response = await axios.post("http://3.228.97.110:9000/api", {
        email,
      });

      // Success: API returns 200 response
      if (response.status === 200) {
        setSuccessMessage("Form Submitted");
        setEmail(""); // Reset email field after submission
      }
    } catch (err) {
      // Error Handling: If API returns an error
      if (err.response) {
        if (err.response.status === 422) {
          setError(err.response.data.message || "Invalid email domain"); // Display API response error
        } else {
          setError("Something went wrong"); // General error message
        }
      } else {
        setError("Network error. Please try again."); // Handle network errors
      }
    }
  };

  // List of services with corresponding images
  const services = [
    { img: search, title: "Presentation Design" },
    { img: search1, title: "Audio - Visual Production" },
    { img: research, title: "Translation Services" },
    { img: search2, title: "Graphic Design" },
    { img: search3, title: "Research & Analytics" },
    { img: search4, title: "Data Processing" },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isTablet ? "1fr" : "40% 60%",
        padding: isTablet ? "1rem 2rem" : "6rem 4rem 6rem 2rem",
        gap: 5,
        alignItems: "stretch",
      }}
    >
      {/* Left Section: Header, Description, and Email Input */}
      <Box
        textAlign={isTablet ? "center" : "left"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box display="flex" justifyContent={isTablet ? "center" : "left"}>
          <Box
            component="img"
            src={EZWork}
            alt="EZWork"
            sx={{
              width: isTablet ? "40vw" : "28vw",
              height: isTablet ? "9vh" : "15vh",
              mb: isTablet ? 2 : 5,
            }}
          />
        </Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: "500", color: "#112949", mb: isTablet ? 2 : 4 }}
        >
          Suite Of Business Support Services
        </Typography>
        <Typography
          variant="body1"
          color="#112949"
          sx={{ mb: isTablet ? 0 : 3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </Typography>
        {/* Form input for email submission (Desktop view) */}
        {!isTablet && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              placeholder="Email Address"
              value={successMessage || email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSuccessMessage("");
              }}
              error={!!error}
              helperText={error}
            />
            <Button
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#EA7B2C",
                color: "#fff",
                padding: "6px 16px",
                textTransform: "none",
              }}
            >
              <Typography>Contact Me</Typography>
            </Button>
          </Box>
        )}
      </Box>

      {/* Right Section: Service Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isSmallScreen
            ? "1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : isLargeScreen
            ? "repeat(3, 1fr)"
            : "repeat(2, 1fr)",
          gap: 2,
          alignSelf: "stretch",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#112949",
              color: "#fff",
              padding: "1rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="img"
                src={service.img}
                alt={service.title}
                sx={{ width: 40, height: 40, background: "#000" }}
              />
              <Typography
                variant="body1"
                sx={{ color: "#3CC3F2", textAlign: "left" }}
              >
                {service.title}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ textAlign: "left", fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Form input for email submission (Tablet view) */}
      {isTablet && (
        <Box sx={{ display: "grid", gap: 2 }}>
          <TextField
            placeholder="Email Address"
            value={successMessage || email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSuccessMessage("");
            }}
            error={!!error}
            helperText={error}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#EA7B2C",
                color: "#fff",
                textTransform: "none",
                borderRadius: 1,
                width: "50%",
                padding: "8px 16px",
              }}
            >
              <Typography>Contact Me</Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
