import type { UserRegisterInput } from "@/types/register";
import type React from "react";
import QRCodeVerificationForm from "./QRCodeVerificationForm";
import { EmailAndUsernameForm } from "./emailAndNameForm";
import { PasswordForm } from "./passwordForm";

interface StepContentProps {
	step: number;
	onNext: (data: Partial<UserRegisterInput>) => void;
}

export const StepContent: React.FC<StepContentProps> = ({ step, onNext }) => {
	switch (step) {
		case 1:
			return <EmailAndUsernameForm onNext={onNext} />;
		case 2:
			return <PasswordForm onNext={onNext} />;
		case 3:
			return <QRCodeVerificationForm />;
		default:
			return null;
	}
};
