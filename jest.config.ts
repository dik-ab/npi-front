import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleDirectories: ["node_modules", "<rootDir>"],
	testMatch: ["**/*.test.ts"],
};

export default config;
