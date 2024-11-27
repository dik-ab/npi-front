import { useUser } from "@/context/userContext";
import { Avatar, Box, Typography } from "@mui/material";
import type React from "react";

const Header: React.FC = () => {
	const { user } = useUser();
	return (
		<Box
			component="header"
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "15px 40px",
			}}
		>
			<Typography
				variant="h5"
				fontWeight="bold"
				color="textPrimary"
				sx={{
					transform: "scaleY(0.9)",
					display: "inline-block",
				}}
			>
				CasteX
			</Typography>

			<Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
				{true && (
					<>
						<Typography color="textPrimary" sx={{ fontSize: "1.1rem" }}>
							{user?.name}
						</Typography>
						<Avatar
							sx={{
								backgroundColor: "#ccc",
								color: "#fff",
								width: 40,
								height: 40,
								fontSize: "1rem",
								fontWeight: "bold",
							}}
						>
							{user?.name.charAt(0).toUpperCase()}
						</Avatar>
					</>
				)}
			</Box>
		</Box>
	);
};

export default Header;
