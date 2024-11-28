import { Box, Container, Typography } from "@mui/material";
import type React from "react";

interface HeaderWithContainerProps {
	headerText: string;
	children: React.ReactNode;
}

export const HeaderWithContainer: React.FC<HeaderWithContainerProps> = ({
	headerText,
	children,
}) => {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "150px",
			}}
		>
			<Box>
				<Typography
					variant="h5"
					fontWeight="bold"
					sx={{
						textAlign: "center",
						marginBottom: "20px",
						color: "#000",
					}}
				>
					{headerText}
				</Typography>
				<Box
					sx={{
						backgroundColor: "#fff",
						padding: "20px",
						borderRadius: "8px",
						width: "400px",
						boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
						margin: "0 auto",
					}}
				>
					{children}
				</Box>
			</Box>
		</Container>
	);
};
