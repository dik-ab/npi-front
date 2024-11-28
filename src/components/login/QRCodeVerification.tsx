import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../common/Button";
import RequiredBadge from "../common/RequiredBadge";
import { TextUnderlineLink } from "../common/TextUnderlineLink";
import VerificationCodeInput from "../common/VerificationCodeInput";

interface QRCodeVerificationProps {
	onSubmit: () => void;
}

export const QRCodeVerification = ({ onSubmit }: QRCodeVerificationProps) => {
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
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<Box sx={{ width: "300px", textAlign: "left" }}>
				<Typography sx={{ marginTop: "1.5rem", textAlign: "left" }}>
					表示された 6 桁のコードを入力してください。
				</Typography>
				<Box
					sx={{
						display: "flex",
						gap: "5px",
						marginTop: "1.5rem",
						marginBottom: "0.8rem",
						alignItems: "center",
					}}
				>
					<Typography
						variant="body1"
						sx={{
							fontWeight: "bold",
							color: "#333",
							fontSize: "14px",
							textAlign: "left",
						}}
					>
						ワンタイムパスワード
					</Typography>
					<RequiredBadge />
				</Box>
			</Box>
			<VerificationCodeInput
				length={6}
				onComplete={handleComplete}
				onChange={handleInputChange}
			/>
			<TextUnderlineLink
				href="/reset-fa"
				text="二次元パスをリセットする"
				boxSx={{ marginTop: "30px" }}
			/>
			<CustomButton
				label="認証する"
				variant="contained"
				disabled={!isComplete}
				sx={{
					marginTop: "1rem",
					width: "200px",
				}}
			/>
		</Box>
	);
};
