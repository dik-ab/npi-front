"use client";

import { fetchUser } from "@/api/user";
import type { User } from "@/types/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userData = await fetchUser();
				setUser(userData);
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} catch (err: any) {
				console.log("########");
				console.log(err.message);
				if (err.message === "Refresh token expired or unauthorized") {
					router.push("/login");
				} else {
					console.log("test");
				}
			}
		};

		fetchUserData();
	}, [router]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Profile</h1>
			<p>Username: {user.name}</p>
			<p>Email: {user.email}</p>
		</div>
	);
}
