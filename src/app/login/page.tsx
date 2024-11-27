"use client";

import { login } from "@/api/auth";
import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";
import NotificationBar from "../../components/NotificationBar";

const LoginPage = () => {
	const [notification, setNotification] = useState({
		open: false,
		message: "",
		severity: "success" as "success" | "error",
	});

	const handleLogin = async (email: string, password: string) => {
		try {
			await login(email, password);
			setNotification({
				open: true,
				message: "Login successful!",
				severity: "success",
			});
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (err: any) {
			console.log(err);
			setNotification({
				open: true,
				message: err.message || "Login failed!",
				severity: "error",
			});
		}
	};

	return (
		<>
			<AuthForm onSubmit={handleLogin} buttonText="Login" />
			<NotificationBar
				open={notification.open}
				message={notification.message}
				severity={notification.severity}
				onClose={() => setNotification((prev) => ({ ...prev, open: false }))}
			/>
		</>
	);
};

export default LoginPage;
