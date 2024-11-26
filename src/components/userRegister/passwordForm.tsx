import type React from "react";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import type { UserRegisterInput } from "@/types/register";
import { useForm } from "react-hook-form";
import { passwordFormSchema, type PasswordFormValues } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LabelledInput } from "../common/LabeledInput";
import CustomButton from "../common/Button";

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
      />
      <LabelledInput
        control={control}
        label="確認用パスワード"
        name="confirmPassword"
        errorMessage={errors.confirmPassword?.message}
        helperText="確認のためもう一度入力してください。"
        password
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
