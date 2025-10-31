import React, { useState } from "react";
import {
  Typography,
  CardMedia,
  Dialog,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PageWrapper from "../components/PageWrapper";
import CardPanel from "../components/CardPanel";

import alluvialImg from "../assets/alluvial.png"; // adjust path if needed

export default function Alluvial() {
  const [open, setOpen] = useState(false);

  return (
    <PageWrapper gap={3} paddingY={2}>
      {/* Left Panel */}
      <CardPanel flex={1}>
        <Typography variant="h5" gutterBottom>
          The independent variables
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          Survival on the Titanic is a binary outcome, and on the left side, you can see how many people survived, shown through a series of simple bar plots. But if we want to explore the effect of several independent variables at the same time, a Sankey plot is the way to go. It lets you visually follow how these variables work together. You can literally see how many people in each group survived (1) or did not survive (0).
        </Typography>

        <Typography paragraph sx={{ lineHeight: 1.6 }}>
          What do you think? Which variable has the strongest effect on survival? It looks like sex and class have a big impact. Instead of guessing, we can use logistic regression to estimate the effect of passengers' sex, age, and class simultaneously.
        </Typography>

        <Typography
          variant="caption"
          display="block"
          sx={{ mt: 1, color: "text.secondary" }}
        >
          Data source: Titanic dataset (Kaggle / R datasets)
        </Typography>
      </CardPanel>

      {/* Right Panel */}
      <CardPanel flex={1}>
        <Typography variant="h5" gutterBottom>
          Survival by ...
        </Typography>

        {/* Clickable Image */}
        <CardMedia
          component="img"
          image={alluvialImg}
          alt="Alluvial plot"
          onClick={() => setOpen(true)}
          sx={{
            borderRadius: 2,
            mt: 1,
            maxHeight: 500,
            objectFit: "contain",
            width: "100%",
            backgroundColor: "#fafafa",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        />
      </CardPanel>

      {/* MUI Dialog for enlarged view */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            aria-label="close"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey.700",
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <CardMedia
            component="img"
            image={alluvialImg}
            alt="Alluvial plot enlarged"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />
        </Box>
      </Dialog>
    </PageWrapper>
  );
}
