import React, { useState } from 'react'
import { HeaderWithContainer } from '../common/HeaderWithContainer'
import { StepIndicator } from '../common/stepIndicator';
import { StepContent } from './StepContent';

const MainContent = () => {
	const [step, setStep] = useState(1);

	const handleNext = () => {
		setStep((prev) => Math.min(prev + 1, 2));
	};

	const handleSubmit = () => console.log("ttest");

	return (
		<HeaderWithContainer headerText="二次元パスワードのリセット">
			<StepIndicator step={step} totalSteps={2} />
			<StepContent
				step={step}
				onNext={() => {
					if (step < 2) {
						handleNext();
					} else {
						handleSubmit();
					}
				}}
			/>
		</HeaderWithContainer>
  )
}

export default MainContent