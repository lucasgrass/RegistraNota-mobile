import React, { useState } from "react";
import { View } from "react-native";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { Textarea } from "~/components/ui/textarea";
import { SelectInput } from "~/components/custom/SelectInput";
import { Images } from "~/lib/icons/Images";
import { Camera } from "~/lib/icons/Camera";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";

export default function Scan() {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;
	const [descricao, setDescricao] = useState("");
	const [categoria, setCategoria] = useState("Selecione uma categoria");

	const categorias = [
		{ label: "Alimentação", value: "Alimentação" },
		{ label: "Transporte", value: "Transporte" },
		{ label: "Saúde", value: "Saúde" },
		{ label: "Outros", value: "Outros" },
	];

	return (
		<View className="flex-1 justify-center p-6">
			<Card>
				<CardHeader>
					<CardTitle>Registrar Nota Fiscal</CardTitle>
				</CardHeader>
				<CardContent className="gap-4">
					<View className="gap-1">
						<Label className="font-semibold">Código do Usuário</Label>
						<Input placeholder="Digite o código do usuário" />
					</View>
					<View>
						<Label className="font-semibold">Código da Planilha</Label>
						<Input placeholder="Digite o código da planilha" />
					</View>
					<View>
						<Label className="font-semibold">Descrição</Label>
						<Textarea
							placeholder="Digite a descrição"
							value={descricao}
							onChangeText={setDescricao}
						/>
					</View>
					<SelectInput
						label="Categoria"
						value={categoria}
						setValue={setCategoria}
						options={categorias}
					/>
					<View className="flex-row justify-evenly mt-4">
						<View className="items-center">
							<Button size={"lg"}>
								<Camera size={28}  color={currentTheme.secondary}/>
							</Button>
							<Text className="mt-1">Capturar uma foto</Text>
						</View>
						<View className="items-center">
							<Button size={"lg"}>
								<Images size={28}  color={currentTheme.secondary}/>
							</Button>
							<Text className="mt-1">Carregar da galeria</Text>
						</View>
					</View>
				</CardContent>
			</Card>
			<Button className="w-full mt-10" size={"lg"}>
				<Text>Salvar Nota Fiscal</Text>
			</Button>
		</View>
	);
}
