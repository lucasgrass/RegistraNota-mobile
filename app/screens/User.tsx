import React from "react";
import { View, SafeAreaView } from "react-native";
import { Text } from "~/components/ui/text";

export default function User() {
	return (
		<SafeAreaView className="flex-1 p-6">
			<View>
				<Text>Testando User</Text>
			</View>
		</SafeAreaView>
	);
}
