"use client";
import Header from "@/components/common/Header";
import { UserProvider } from "@/context/userContext";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#dc004e",
		},
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				style={{
					backgroundColor: "#F9F9F9",
					margin: 0,
					padding: 0,
					minHeight: "100vh",
				}}
			>
				<UserProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Header />
						{children}
					</ThemeProvider>
				</UserProvider>
			</body>
		</html>
	);
}
