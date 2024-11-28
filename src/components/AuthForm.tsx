"use client";

import { Box, Button, TextField } from "@mui/material";
import type React from "react";
import { useState } from "react";

interface AuthFormProps {
	onSubmit: (email: string, password: string) => Promise<void>;
	buttonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, buttonText }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await onSubmit(email, password);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				maxWidth: 400,
				margin: "0 auto",
				padding: 3,
				display: "flex",
				flexDirection: "column",
				gap: 2,
			}}
		>
			<TextField
				label="Email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				fullWidth
				required
			/>
			<TextField
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				fullWidth
				required
			/>
			<Button type="submit" variant="contained" color="primary" fullWidth>
				{buttonText}
			</Button>
		</Box>
	);
};

export default AuthForm;
