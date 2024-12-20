"use client";

import { Alert, type AlertColor, Snackbar } from "@mui/material";
import type React from "react";

interface NotificationBarProps {
	open: boolean;
	message: string;
	severity: AlertColor; // 'error' | 'warning' | 'info' | 'success'
	duration?: number;
	onClose: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({
	open,
	message,
	severity,
	duration = 3000,
	onClose,
}) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={duration}
			onClose={onClose}
			anchorOrigin={{ vertical: "top", horizontal: "right" }} // 右上に表示
		>
			<Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default NotificationBar;
