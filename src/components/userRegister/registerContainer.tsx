import type { UserRegisterInput } from "@/types/register";
import { Box, Container, Typography } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { StepContent } from "./stepContent";
import { StepIndicator } from "./stepIndicator";

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
	// ステップに応じたヘッダーのテキストを定義
	const headerText = step === 3 ? "認証" : "新規登録";

	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
			}}
		>
			<Box>
				{/* ヘッダー */}
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
					}}
				>
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
				</Box>
			</Box>
		</Container>
	);
};
