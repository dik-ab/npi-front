import { loginFormSchema, type loginFormValues } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Link } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../common/Button";
import { LabelledInput } from "../common/LabeledInput";
import { TextUnderlineLink } from "../common/TextUnderlineLink";

interface LoginFormProps {
	onNext: () => void;
}
const LoginForm = ({ onNext }: LoginFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<loginFormValues>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
    <>
    <Box>
		<Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<LabelledInput
				control={control}
				label="メールアドレス"
				name="email"
				errorMessage={errors.email?.message}
				helperText=""
			/>
			<LabelledInput
				control={control}
				label="パスワード"
				name="password"
				errorMessage={errors.password?.message}
				helperText=""
				password
				required
			/>
			<TextUnderlineLink
				href="/forgot-password"
				text="パスワードを忘れた場合"
			/>
		</Box>
			<CustomButton
				variant="contained"
				type="submit"
				sx={{
					borderRadius: "8px",
				}}
				onClick={handleSubmit(onNext)}
				label="次へ"
			/>
      </Box>
    </>
	);
};

export default LoginForm;
