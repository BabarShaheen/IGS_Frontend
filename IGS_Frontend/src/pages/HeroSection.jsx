import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import backgroundImage from "../assets/hero.png";
import heroImage from "../assets/banner.png";
import BasicCard from "../component/BasicCard";
import Navbar from "../component/navbar";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // py: { xs: 8, md: 12 },
      }}
    >
      {/* Hero Content */}
      <Navbar />
      <Container
        maxWidth="false"
        disableGutters
        sx={{
          mb: 10,
          display: "flex",
          marginTop: 10,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Column: Text */}
        <Container>
          <Box sx={{ px: { xs: 2, md: 3 } }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                lineHeight: 1.5,
                mb: 2,
              }}
            >
              IGS exemplifies its dedication to sustainability through
              innovative procurement and supply chain practices that boost
              operational efficiency and drive industry-leading innovation.
            </Typography>

            <Typography
              variant="subtitle1"
              fontWeight={500}
              sx={{
                opacity: 0.9,
                mb: 4,
              }}
            >
              IGS is committed to delivering high-quality products on time,
              every time.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              BOOK A MEETING →
            </Button>
          </Box>
        </Container>

        {/* Right Column: Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "right",
            }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="Hero Graphic"
              sx={{
                width: "100%",
                // maxWidth: 500,
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Container>

      {/* Cards Section */}
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <BasicCard
              title="Expertly crafted solutions with global reach"
              text="Our procurement and supply chain processes enhance operations for your organization's success."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BasicCard
              title="Strategic, collaborative, and driven"
              text="We leverage innovative strategies and cutting-edge technology to streamline our processes."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <BasicCard
              title="Fresh perspective for continuous transformation"
              text="Expert teams to develop groundbreaking solutions 'Yes, we can do it even better.'"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
