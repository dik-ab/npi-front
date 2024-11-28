import { Box, Button, Input, TextField, Typography } from "@mui/material";
import type React from "react";
import { useRef, useState } from "react";
import CustomButton from "../common/Button";
import VerificationCodeInput from "../common/VerificationCodeInput";

const QRCodeVerificationForm: React.FC = () => {
	const [isComplete, setIsComplete] = useState(false);

	const handleInputChange = (code: string[]) => {
		setIsComplete(code.every((char) => char !== ""));
	};

	const handleComplete = (code: string) => {
		console.log(code);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				textAlign: "center",
				textWrap: "nowrap",
			}}
		>
			<Typography>① 認証アプリで QR コードを読み取ってください。</Typography>
			<Box
				sx={{
					margin: "0 auto",
					width: "200px",
					height: "200px",
					backgroundColor: "#FAFAFB",
				}}
			>
				{/* QRコードを表示する領域 */}
			</Box>
			<Typography>② 表示された 6 桁のコードを入力してください。</Typography>
			<VerificationCodeInput
				length={6}
				onComplete={handleComplete}
				onChange={handleInputChange}
			/>
			<CustomButton label="完了" variant="contained" disabled={!isComplete}>
				完了
			</CustomButton>
		</Box>
	);
};

export default QRCodeVerificationForm;
