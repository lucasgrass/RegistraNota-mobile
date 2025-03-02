import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";

export default function Settings({ navigation }: { navigation: any }) {
	const [superUser, setSuperUser] = useState(false);

	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	return (
		<View className="flex-1 pt-10 p-4">
			<Text className="text-4xl mt-6">Configurações</Text>
			<Separator className="my-2" />
			<Button
				variant={"ghost"}
				className="flex-row justify-between items-center"
				onPress={() => navigation.navigate("EditUser")}
			>
				<Text>Editar perfil</Text>
				<ArrowRight size={28} color={currentTheme.primary} />
			</Button>
			<Separator className="my-2" />
			<Button
				variant={"ghost"}
				className="flex-row justify-between items-center"
			>
				<Text>Alterar senha</Text>
				<ArrowRight size={28} color={currentTheme.primary} />
			</Button>
			<Separator className="my-2" />
			<Button
				variant={"ghost"}
				className="flex-row justify-between items-center"
			>
				<Text>Adicionar caixa</Text>
				<ArrowRight size={28} color={currentTheme.primary} />
			</Button>
			<Separator className="my-2" />
			<Button
				variant={"ghost"}
				className="flex-row justify-between items-center"
			>
				<Text>Suporte</Text>
				<ArrowRight size={28} color={currentTheme.primary} />
			</Button>
		</View>
	);
}
