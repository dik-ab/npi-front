import {
	type PasswordFormValues,
	passwordFormSchema,
} from "@/schemas/authSchema";
import type { UserRegisterInput } from "@/types/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "../common/Button";
import { LabelledInput } from "../common/LabeledInput";

interface Props {
	onNext: (data: Partial<UserRegisterInput>) => void;
}

export const PasswordForm: React.FC<Props> = ({ onNext }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<PasswordFormValues>({
		resolver: zodResolver(passwordFormSchema),
		defaultValues: {
			password: "",
		},
	});

	const onSubmit = (data: PasswordFormValues) => {
		onNext(data);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
			<LabelledInput
				control={control}
				label="パスワード"
				name="password"
				errorMessage={errors.password?.message}
				helperText="※パスワードは英字と数字をどちらも含む8~15字の半角英数記号でご設定ください。"
				password
				required
			/>
			<LabelledInput
				control={control}
				label="パスワード(確認用)"
				name="confirmPassword"
				errorMessage={errors.confirmPassword?.message}
				helperText="確認のためもう一度入力してください。"
				password
				required
			/>
			<CustomButton
				variant="contained"
				type="submit"
				sx={{
					borderRadius: "8px",
				}}
				onClick={handleSubmit(onSubmit)}
				label="次へ"
			/>
		</Box>
	);
};
