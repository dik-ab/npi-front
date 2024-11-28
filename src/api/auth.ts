import { ENDPOINTS } from "@/api/endpoints";

export const login = async (email: string, password: string): Promise<void> => {
	const response = await fetch(ENDPOINTS.auth.login, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
		credentials: "include",
	});

	if (!response.ok) {
		throw new Error("Login failed");
	}
};

export const logout = async (
	email: string,
	password: string,
): Promise<void> => {
	const response = await fetch(ENDPOINTS.auth.logout, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
		credentials: "include",
	});

	if (!response.ok) {
		throw new Error("logout failed");
	}
};
