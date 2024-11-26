import type React from "react";
import { Box, Typography } from "@mui/material";

interface StepIndicatorProps {
  step: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ step, totalSteps }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
      <Typography variant="h6" fontWeight="bold">
        STEP {step}/{totalSteps}
      </Typography>
    </Box>
  );
};
