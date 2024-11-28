import type { User } from "@/types/user";
import { ENDPOINTS } from "./endpoints";
import { handle401AndRetry } from "./fetchUtils";

export async function fetchUser(): Promise<User> {
	const url = ENDPOINTS.accounts;
	const options: RequestInit = { method: "GET", credentials: "include" };

	let response = await fetch(url, options);

	if (response.status === 401) {
		console.warn("Access token expired. Attempting to refresh.");
		response = await handle401AndRetry(url, options);
	}

	if (!response.ok) {
		const error = await response.text();
		throw new Error(`Request failed: ${error}`);
	}

	return response.json();
}
