import { z } from "zod";

export const emailAndUsernameSchema = z.object({
	email: z.string().email("有効なメールアドレスを入力してください"),
	username: z
		.string()
		.min(3, "アカウント名は3文字以上で入力してください")
		.regex(
			/^[a-zA-Z0-9]+$/,
			"アカウント名には英数字のみ使用できます（記号は使用できません）",
		),
});

export const passwordSchema = z
	.string()
	.min(8, "パスワードは最低8文字必要です")
	.max(15, "パスワードは最大15文字以内で入力してください")
	.refine((password) => /[A-Za-z]/.test(password), {
		message: "パスワードには英字を含める必要があります",
	})
	.refine((password) => /\d/.test(password), {
		message: "パスワードには数字を含める必要があります",
	});

export const passwordFormSchema = z
	.object({
		password: passwordSchema,
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "確認用パスワードが一致しません",
		path: ["confirmPassword"],
	});

export const loginFormSchema = z.object({
	email: z.string().email("有効なメールアドレスを入力してください"),
	password: z.string().min(1, "必須項目です"),
});

export type EmailAndUsernameFormValues = z.infer<typeof emailAndUsernameSchema>;

export type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export type loginFormValues = z.infer<typeof loginFormSchema>;
