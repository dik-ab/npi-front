import { Box, Typography } from "@mui/material";
import type React from "react";

interface StepIndicatorProps {
	step: number;
	totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
	step,
	totalSteps,
}) => {
	return (
		<Box
			sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
		>
			<Typography variant="h6" fontWeight="bold">
				STEP {step}/{totalSteps}
			</Typography>
		</Box>
	);
};
