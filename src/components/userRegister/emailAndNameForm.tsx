import type React from "react";
import { useState } from "react";
import { Box} from "@mui/material";
import { LabelledInput } from "../common/LabeledInput";
import { useForm } from "react-hook-form";
import { type EmailAndUsernameFormValues, emailAndUsernameSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserRegisterInput } from "@/types/register";
import CustomButton from "../common/Button";

interface Props {
  onNext: (data: Partial<UserRegisterInput>) => void;
}

export const EmailAndUsernameForm: React.FC<Props> = ({ onNext }) => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailAndUsernameFormValues>({
    resolver: zodResolver(emailAndUsernameSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onSubmit = (data: EmailAndUsernameFormValues) => {
    onNext(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >

      <LabelledInput
        control={control}
        label="メールアドレス（ID）"
        name="email"
        errorMessage={errors.email?.message}
      />
      <LabelledInput
        control={control}
        label="アカウント名"
        name="username"
        errorMessage={errors.username?.message}
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
