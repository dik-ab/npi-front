import { ENDPOINTS } from "./endpoints";

export async function handle401AndRetry(
	url: string,
	options: RequestInit,
): Promise<Response> {
	const refreshResponse = await fetch(ENDPOINTS.auth.refreshToken, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		credentials: "include",
	});

	if (refreshResponse.ok) {
		console.log("Access token refreshed, retrying the original request.");
		return fetch(url, {
			...options,
			credentials: "include",
		});
	}
	throw new Error("Refresh token expired");
}
