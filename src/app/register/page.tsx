"use client";

import { register } from "@/api/accounts";
import { RegisterContainer } from "@/components/userRegister/registerContainer";
import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";
import NotificationBar from "../../components/NotificationBar";

const RegisterPage = () => {
	const [notification, setNotification] = useState({
		open: false,
		message: "",
		severity: "success" as "success" | "error",
	});

	const handleRegister = async (email: string, password: string) => {
		try {
			await register(email, password);
			setNotification({
				open: true,
				message: "Registration successful!",
				severity: "success",
			});
		} catch (err) {
			console.log(err);
			console.log(typeof err);
			setNotification({
				open: true,
				message: "Registration failed!",
				severity: "error",
			});
		}
	};

	return (
		<>
			<RegisterContainer />
		</>
	);
};

export default RegisterPage;
