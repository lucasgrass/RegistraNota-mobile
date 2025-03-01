import * as React from "react";
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

export default function CreateUser({ navigation }: { navigation: any }) {
	return (
		<View className="flex-1 justify-center p-6">
			<Card>
				<CardHeader>
					<CardTitle>Crie sua conta</CardTitle>
					<CardDescription>
						Preencha as informações abaixo para criar sua conta.
					</CardDescription>
				</CardHeader>
				<CardContent className="gap-4 native:gap-6">
					<View className="gap-1">
						<Text>Nome</Text>
						<Input placeholder="Seu nome completo" />
					</View>
					<View className="gap-1">
						<Text>Email</Text>
						<Input placeholder="Seu email" />
					</View>
					<View className="gap-1">
						<Text>Código de usuário</Text>
						<Input placeholder="Seu código de usuário" />
					</View>
					<View className="gap-1">
						<View className="flex-row justify-between">
							<Text>Senha</Text>
						</View>
						<Input
							id="password"
							placeholder="Sua senha"
							secureTextEntry={true}
						/>
					</View>
					<View className="gap-1">
						<View className="flex-row justify-between">
							<Text>Confirme sua senha</Text>
						</View>
						<Input
							id="password"
							placeholder="Sua senha novamente"
							secureTextEntry={true}
						/>
					</View>
				</CardContent>
				<CardFooter className="justify-center flex-col native:gap-6">
					<Button className="w-full">
						<Text>Criar Conta</Text>
					</Button>
					<View className="gap-1 flex-row">
						<Text>Já tem uma conta?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Text className="text-blue-500 underline">Voltar ao login</Text>
						</TouchableOpacity>
					</View>
				</CardFooter>
			</Card>
		</View>
	);
}
