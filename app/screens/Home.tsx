import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { Button } from "~/components/ui/button";
import { Scan } from "~/lib/icons/Scan";
import { FileStack } from "~/lib/icons/FileStack";
import { FileClock } from "~/lib/icons/FileClock";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

const INVOICES = [
	{ id: "1", date: "14/02/2025", category: "Gasolina", amount: "R$1.250,00" },
	{ id: "2", date: "17/02/2025", category: "Correio", amount: "R$180,00" },
	{
		id: "3",
		date: "20/02/2025",
		category: "Teste categoria bem grande",
		amount: "R$180,00",
	},
	{ id: "4", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "5", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{
		id: "6",
		date: "23/02/2025",
		category: "Teste categoria bem grande mesmo mesmo",
		amount: "R$180,00",
	},
	{ id: "7", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "8", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "9", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "10", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "11", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "12", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
	{ id: "13", date: "23/02/2025", category: "Correio", amount: "R$180,00" },
];

export default function Home() {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	const nome = "Lucas";
	const caixa = "7.900,00";
	const qtdNotas = "2";
	const ultimaPlanilha = "02/2025";

	return (
		<View className="flex-1 pt-10">
			<Text className="text-4xl"> Olá, {nome}</Text>
			<View className="p-4 flex-1">
				<View className="bg-red-300">
					<Text className="text-2xl">Saldo em conta</Text>
					<Text className="text-xl">R$ {caixa}</Text>
				</View>
				<View className="bg-blue-200 flex-row pt-10 gap-x-4 h-40">
					<View className="bg-orange-400 rounded-lg flex-1 items-center justify-center">
						<Text className="font-semibold text-xl">Última planilha</Text>
						<Text className="text-lg">{ultimaPlanilha}</Text>
					</View>
					<View className="bg-orange-300 rounded-lg flex-1 items-center justify-center">
						<Text className="font-semibold text-xl">Notas cadastradas</Text>
						<Text className="text-lg">{qtdNotas}</Text>
					</View>
				</View>
				<View className="bg-blue-300 flex-row pt-10">
					<View className="items-center">
						<Button
							style={{ backgroundColor: currentTheme.primary }}
							className="w-20 h-20 flex items-center justify-center"
						>
							<Scan size={40} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Escanear</Text>
					</View>
					<View className="items-center">
						<Button
							style={{ backgroundColor: currentTheme.primary }}
							className="w-20 h-20 flex items-center justify-center"
						>
							<FileClock size={40} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Histórico</Text>
					</View>
					<View className="items-center">
						<Button
							style={{ backgroundColor: currentTheme.primary }}
							className="w-20 h-20 flex items-center justify-center"
						>
							<FileStack size={40} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Relatório</Text>
					</View>
				</View>
				<View className="flex-1 pt-6">
					<Text className="text-xl font-semibold">Últimas notas</Text>
					<ScrollView
						className="flex-1"
					>
						{INVOICES.map((invoice) => (
							<Card key={invoice.id} className="mb-4">
								<CardContent className="p-4">
									<Text className="font-extralight">{invoice.date}</Text>
									<Text className="text-lg">Gasto: <Text className="text-lg font-semibold">{invoice.category}</Text> </Text>
									
									<Text className="text-xl font-bold">{invoice.amount}</Text>
								</CardContent>
							</Card>
						))}
					</ScrollView>
				</View>
			</View>
		</View>
	);
}
