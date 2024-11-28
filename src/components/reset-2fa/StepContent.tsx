import type React from "react";
import QrDisplay from "./qrDisplay";
import VerificationForm from "./VerificationForm";

interface StepContentProps {
	step: number;
	onNext: () => void;
}

export const StepContent: React.FC<StepContentProps> = ({ step, onNext }) => {
	switch (step) {
		case 1:
			return <QrDisplay onNext={onNext} />;
		case 2:
			return <VerificationForm onNext={onNext} />;
		default:
			return null;
	}
};