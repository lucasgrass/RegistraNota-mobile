import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { Keyboard } from "react-native";

export default function ManageBalance({ navigation }: { navigation: any }) {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	const [codigoUsuario, setCodigoUsuario] = useState("");
	const [saldo, setSaldo] = useState<number | null>(null);
	const [valor, setValor] = useState("");

	const carregarSaldo = () => {
		Keyboard.dismiss();
		setSaldo(7900);
	};

	const modificarSaldo = (tipo: "adicionar" | "retirar") => {
		const valorNumerico = parseFloat(valor) || 0;
		if (saldo !== null) {
			setSaldo(
				tipo === "adicionar" ? saldo + valorNumerico : saldo - valorNumerico
			);
		}
		setValor("");
	};

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
						<CardTitle>Gerenciar Caixa</CardTitle>
					</CardHeader>
					<CardContent className="gap-4">
						<View className="gap-1">
							<Text>Código do Usuário</Text>
							<Input
								placeholder="Digite o código"
								value={codigoUsuario}
								onChangeText={setCodigoUsuario}
							/>
							<Button className="mt-2" onPress={carregarSaldo}>
								<Text>Carregar Caixa</Text>
							</Button>
						</View>
						{saldo !== null && (
							<>
								<View className="gap-1">
									<Text className="font-semibold">Saldo Atual</Text>
									<View
										className="p-3 rounded-lg"
										style={{ backgroundColor: currentTheme.secondary }}
									>
										<Text className="text-lg font-semibold">
											R$ {saldo.toFixed(2)}
										</Text>
									</View>
								</View>

								<View className="gap-1">
									<Text>Valor</Text>
									<Input
										placeholder="Digite o valor"
										keyboardType="numeric"
										value={valor}
										onChangeText={setValor}
									/>
								</View>

								<View className="flex-row justify-between mt-2">
									<Button onPress={() => modificarSaldo("adicionar")}>
										<Text>Adicionar</Text>
									</Button>
									<Button
										style={{ backgroundColor: currentTheme.danger }}
										onPress={() => modificarSaldo("retirar")}
									>
										<Text>Retirar</Text>
									</Button>
								</View>
							</>
						)}
					</CardContent>
				</Card>
			</View>
		</View>
	);
}
