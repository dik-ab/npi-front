import { Box } from "@mui/material";
import React from "react";

const RequiredBadge = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#f0f0f0",
				borderRadius: "16px",
				padding: "2px 8px",
				fontSize: "12px",
				color: "black",
			}}
		>
			必須
		</Box>
	);
};

export default RequiredBadge;
