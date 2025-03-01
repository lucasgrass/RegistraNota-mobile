import * as React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

import AuthNavigator from "./navigation/AuthNavigator";
import MainNavigator from "./navigation/MainNavigator";
import useAuthStore from "./store/useAuthStore";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Screen() {
	const { isAuthenticated } = useAuthStore();

	return (
		<SafeAreaProvider>
			{isAuthenticated ? <AuthNavigator /> : <MainNavigator />}
		</SafeAreaProvider>
	);
}
