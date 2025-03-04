import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { Button } from "~/components/ui/button";
import { FileStack } from "~/lib/icons/FileStack";
import { FileClock } from "~/lib/icons/FileClock";
import { Separator } from "~/components/ui/separator";
import { Sheet } from "~/lib/icons/Sheet";
import { ListNotes } from "~/components/custom/ListNotes";

import { Card, CardContent } from "~/components/ui/card";

const NOTES = [
	{
		id: "1",
		date: "14/02/2025",
		authorizationDate: "15/02/2025",
		category: "Gasolina",
		amount: "R$ 1.250,00",
		sheet: "01/2025",
		description:
			"Abastecimento completo do carro. Abastecimento completo do carro. Abastecimento completo do carro. Abastecimento completo do carro. Abastecimento completo do carro.",
	},
	{
		id: "2",
		date: "17/02/2025",
		authorizationDate: "18/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Envio de documentos para o exterior.",
	},
	{
		id: "3",
		date: "20/02/2025",
		authorizationDate: "21/02/2025",
		category: "Teste categoria bem grande",
		amount: "R$180,00",
		sheet: "01/2025",
		description: "Compra de materiais para teste de software.",
	},
	{
		id: "4",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Pagamento de taxa de envio expresso.",
	},
	{
		id: "5",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Entrega de mercadoria para cliente.",
	},
	{
		id: "6",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Teste categoria bem grande mesmo mesmo",
		amount: "R$180,00",
		sheet: "01/2025",
		description: "Aquisição de suprimentos de escritório.",
	},
	{
		id: "7",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Envio de encomenda para outro estado.",
	},
	{
		id: "8",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Pagamento de frete de devolução.",
	},
	{
		id: "9",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Custo de postagem de cartas empresariais.",
	},
	{
		id: "10",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Envio de presente para parente distante.",
	},
	{
		id: "11",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Taxa de envio de produto vendido online.",
	},
	{
		id: "12",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Despesa com serviços de transporte postal.",
	},
	{
		id: "13",
		date: "23/02/2025",
		authorizationDate: "24/02/2025",
		category: "Correio",
		amount: "R$ 180,00",
		sheet: "01/2025",
		description: "Remessa expressa de documentos oficiais.",
	},
];

export default function Home({ navigation }: { navigation: any }) {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	const nome = "Lucas";
	const caixa = "7.900,00";
	const qtdNotas = "2";
	const ultimaPlanilha = "02/2025";

	return (
		<View className="flex-1 p-6 pt-10">
			<Text className="text-4xl pt-4 mb-4">Olá, {nome}</Text>
			<View className="flex-1">
				<Card>
					<CardContent className="mt-4">
						<Text className="text-xl font-normal">Saldo em conta</Text>
						<Text className="text-2xl font-bold">R$ {caixa}</Text>
						<Separator className="my-4"/>
						<View className="flex-row">
							<Text className="text-xl">Planilha atual: </Text>
							<Text className="text-xl font-bold">{ultimaPlanilha}</Text>
						</View>
						<View className="flex-row">
							<Text className="text-xl">Notas cadastradas: </Text>
							<Text className="text-xl font-bold">{qtdNotas}</Text>
						</View>
					</CardContent>
				</Card>
				<View className="flex-row justify-evenly mt-4">
					<View className="items-center">
						<Button
							className="items-center justify-center"
							size={"lg"}
							onPress={() => navigation.navigate("Notes")}
						>
							<FileClock size={28} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Notas</Text>
					</View>
					<View className="items-center">
						<Button className="items-center justify-center" size={"lg"} onPress={() => navigation.navigate("Sheets")}>
							<Sheet size={28} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Planilha</Text>
					</View>
					<View className="items-center">
						<Button className="items-center justify-center" size={"lg"}>
							<FileStack size={28} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Relatório</Text>
					</View>
				</View>
				<View className="flex-1 mt-4">
					<Text className="text-xl font-semibold">Últimas 10 notas</Text>
					<ListNotes notes={NOTES} />
				</View>
			</View>
		</View>
	);
}
