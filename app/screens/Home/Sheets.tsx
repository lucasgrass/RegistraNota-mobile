import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";

export default function Sheets({ navigation }: { navigation: any }) {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	return (
		<View className="flex-1 p-6 pt-10">
			<ArrowLeft
				size={36}
				color={currentTheme.foreground}
				onPress={() => navigation.goBack()}
			/>
			<View className="flex-row justify-between">
				<Button>
					<Text>Criar planilha</Text>
				</Button>
				<Button variant={"secondary"} className="self-center">
					<Text>Deletar planilha</Text>
				</Button>
			</View>
		</View>
	);
}
