import type { UserRegisterInput } from "@/types/auth";
import { Box, Container, Typography } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { HeaderWithContainer } from "../common/HeaderWithContainer";
import { StepContent } from "./stepContent";
import { StepIndicator } from "../common/stepIndicator";

export const RegisterContainer: React.FC = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<UserRegisterInput>({
		email: "",
		userName: "",
		password: "",
	});

	const handleNext = (data: Partial<UserRegisterInput>) => {
		setFormData((prev) => ({
			...prev,
			...data,
		}));
		setStep((prev) => Math.min(prev + 1, 3));
	};

	const handleSubmit = () => console.log("ttest");
	const headerText = step === 3 ? "認証" : "新規登録";

	return (
		<HeaderWithContainer headerText={headerText}>
			<StepIndicator step={step} totalSteps={3} />
			<StepContent
				step={step}
				onNext={(data: Partial<UserRegisterInput>) => {
					if (step < 3) {
						handleNext(data);
					} else {
						handleSubmit();
					}
				}}
			/>
		</HeaderWithContainer>
	);
};
