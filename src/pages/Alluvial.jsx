import React from "react";
import { Box, Typography, Container, CardMedia } from "@mui/material";
import MyCard from "../components/MyCard";

import alluvialImg from "../assets/alluvial.png"; // adjust path if needed

export default function Alluvial() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Two-column responsive layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* Left Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="The independent variables">
            <Typography paragraph>
              Survival on the Titanic is a binary outcome, and on the left 
              side, you can see how many people survived, shown through a 
              series of simple bar plots. But if we want to explore the effect 
              of several independent variables at the same time, 
              a Sankey plot is the way to go. It lets you visually follow how 
              these variables work together. You can literally see how many 
              people in each group survived (1) or did not survive (0).
            </Typography>
            <Typography paragraph>
              What do you think? Which variable has the strongest effect on survival? 
              It looks like sex and class have a big impact. Instead of guessing, 
              we can use logistic regression to estimate the effect of passengers' sex, 
              age, and class simultaneously.
            </Typography>

            <Typography variant="caption" display="block" sx={{ mt: 1, color: "text.secondary" }}>
              Data source: Titanic dataset (Kaggle / R datasets)
            </Typography>
          </MyCard>
        </Box>

        {/* Right Panel */}
        <Box sx={{ flex: 1 }}>
          <MyCard title="Survival by ...">
            <CardMedia
              component="img"
              image={alluvialImg}
              alt="Alluvial plot"
              sx={{
                borderRadius: 1,
                mt: 1,
                maxHeight: 500,
                objectFit: "contain",
                width: "100%",
                backgroundColor: "#fafafa",
              }}
            />
          </MyCard>
        </Box>
      </Box>
    </Container>
  );
}
