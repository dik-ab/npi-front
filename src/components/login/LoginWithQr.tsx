import React, { useState } from "react";
import { HeaderWithContainer } from "../common/HeaderWithContainer";
import LoginForm from "./LoginForm";
import { QRCodeVerification } from "./QRCodeVerification";

export const LoginWithQr = () => {
	const [currentStep, setCurrentStep] = useState<"login" | "qr">("login");

	const handleNext = () => setCurrentStep("qr");
	const handleSubmit = () => {
		//ここにQR処理
		setCurrentStep("login");
	};
	return (
		<HeaderWithContainer
			headerText={currentStep === "login" ? "ログイン" : "認証"}
		>
			{currentStep === "login" ? (
				<LoginForm onNext={handleNext} />
			) : (
				<QRCodeVerification onSubmit={handleSubmit} />
			)}
		</HeaderWithContainer>
	);
};
