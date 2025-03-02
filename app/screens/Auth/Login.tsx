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

export default function Login({ navigation }: { navigation: any }) {
	return (
		<View className="flex-1 justify-center p-6">
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Entre com suas credenciais.</CardDescription>
				</CardHeader>
				<CardContent className="gap-4 native:gap-6">
					<View className="gap-1">
						<Text>Código de usuário</Text>
						<Input placeholder="Seu código" />
					</View>
					<View className="gap-1">
						<View className="flex-row justify-between">
							<Text>Senha</Text>
							<TouchableOpacity
								onPress={() => navigation.navigate("RecoveryPassword")}
							>
								<Text className="text-blue-500 underline">
									Esqueceu sua senha?
								</Text>
							</TouchableOpacity>
						</View>
						<Input
							id="password"
							placeholder="Sua senha"
							secureTextEntry={true}
						/>
					</View>
				</CardContent>
				<CardFooter className="justify-center flex-col native:gap-6">
					<Button className="w-full">
						<Text>Entrar</Text>
					</Button>
					<View className="gap-1 flex-row">
						<Text>Não tem uma conta?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("CreateUser")}>
							<Text className="text-blue-500 underline">Crie uma conta</Text>
						</TouchableOpacity>
					</View>
				</CardFooter>
			</Card>
		</View>
	);
}
