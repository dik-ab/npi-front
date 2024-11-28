import { Box, Input } from "@mui/material";
import type React from "react";
import { useRef, useState } from "react";

interface VerificationCodeInputProps {
	length?: number;
	onComplete: (code: string) => void;
	onChange?: (code: string[]) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
	length = 6,
	onComplete,
	onChange,
}) => {
	const [code, setCode] = useState<string[]>(Array(length).fill(""));
	const inputsRef = useRef<HTMLInputElement[]>([]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		index: number,
	) => {
		const value = e.target.value;
		if (!/^\d?$/.test(value)) {
			return;
		}
		if (value.length <= 1) {
			const updatedCode = [...code];
			updatedCode[index] = value;
			setCode(updatedCode);
			if (onChange) onChange(updatedCode);

			if (updatedCode.every((char) => char !== "")) {
				onComplete(updatedCode.join(""));
			}
		}

		if (value.length === 1 && inputsRef.current[index + 1]) {
			inputsRef.current[index + 1].focus();
		}

		if (value === "" && inputsRef.current[index - 1]) {
			inputsRef.current[index - 1].focus();
		}
	};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
		if (e.key === "Backspace" && code[index] === "" && inputsRef.current[index - 1]) {
			inputsRef.current[index - 1].focus();
		}
	};

	return (
		<Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
			{Array.from({ length }).map((_, index) => (
				<Input
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					inputRef={(el) => {
						if (el) inputsRef.current[index] = el;
					}}
					inputProps={{
						maxLength: 1,
						style: {
							textAlign: "center",
						},
					}}
					value={code[index]}
					onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
					sx={{
						width: "40px",
						height: "60px",
						textAlign: "center",
						alignItems: "center",
						backgroundColor: "#FAFAFB",
						border: "1px solid #ccc",
						borderRadius: "4px",
					}}
				/>
			))}
		</Box>
	);
};

export default VerificationCodeInput;
