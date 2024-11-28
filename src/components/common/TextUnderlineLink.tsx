import { Box, Link } from "@mui/material";
import type React from "react";
import type { SxProps, Theme } from "@mui/system";

interface TextUnderlineLinkProps {
	href: string;
	text: string;
	color?: string;
	fontSize?: string;
	underlineOffset?: string;
	boxSx?: SxProps<Theme>;
	linkSx?: SxProps<Theme>;
}

export const TextUnderlineLink: React.FC<TextUnderlineLinkProps> = ({
	href,
	text,
	color = "black",
	fontSize = "14px",
	underlineOffset = "2px",
	boxSx = {}, // デフォルト値
	linkSx = {}, // デフォルト値
}) => {
	return (
		<Box sx={{ textAlign: "center", marginBottom: "10px", ...boxSx }}>
			<Link
				href={href}
				underline="always"
				color="textPrimary"
				sx={{
					fontSize,
					color,
					textUnderlineOffset: underlineOffset,
					...linkSx,
				}}
			>
				{text}
			</Link>
		</Box>
	);
};
