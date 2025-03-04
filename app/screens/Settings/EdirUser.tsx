import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";

export default function EditUser({ navigation }: { navigation: any }) {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	const codigoUsuario = "01/01";
	const nome = "Lucas";
	const email = "teste@gmail.com";
	const caixa = "R$ 7.900,00";

	return (
		<View className="flex-1 p-6 pt-10">
			<ArrowLeft
				size={36}
				color={currentTheme.foreground}
				onPress={() => navigation.goBack()}
			/>
			<View className="flex-1 justify-center">
				<Card>
					<CardHeader>
						<CardTitle>Detalhes do usuário</CardTitle>
						<CardDescription>Altere suas informações abaixo.</CardDescription>
					</CardHeader>
					<CardContent className="gap-4 native:gap-4">
						<View className="gap-1">
							<Text className="font-semibold">Código do Usuário</Text>
							<View
								className="p-3 rounded-lg"
								style={{ backgroundColor: currentTheme.secondary }}
							>
								<Text className="text-lg font-semibold">{codigoUsuario}</Text>
							</View>
							<CardDescription>Único e imutável.</CardDescription>
						</View>
						<View className="gap-1">
							<Text>Nome</Text>
							<Input placeholder={nome} />
						</View>
						<View className="gap-1">
							<Text>E-mail</Text>
							<Input placeholder={email} keyboardType="email-address" />
						</View>
						<View className="gap-1">
							<Text className="font-semibold">Caixa</Text>
							<View
								className="p-3 rounded-lg"
								style={{ backgroundColor: currentTheme.secondary }}
							>
								<Text className="text-lg font-semibold">{caixa}</Text>
							</View>
							<CardDescription>
								Somente administradores podem modificar este valor.
							</CardDescription>
						</View>
					</CardContent>
					<CardFooter className="justify-center flex-col native:gap-6">
						<Button className="w-full">
							<Text>Atualizar</Text>
						</Button>
					</CardFooter>
				</Card>
			</View>
		</View>
	);
}
