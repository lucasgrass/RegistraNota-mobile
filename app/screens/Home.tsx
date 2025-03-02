import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { Button } from "~/components/ui/button";
import { FileStack } from "~/lib/icons/FileStack";
import { FileClock } from "~/lib/icons/FileClock";
import { Separator } from "~/components/ui/separator";
import { Sheet } from "~/lib/icons/Sheet"

import { Card, CardContent } from "~/components/ui/card";

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
			<Text className="text-4xl pt-4 pl-4">Olá, {nome}</Text>
			<View className="p-4 flex-1">
				<Card>
					<CardContent className="mt-4">
						<Text className="text-xl font-normal">Saldo em conta</Text>
						<Text className="text-2xl font-bold">R$ {caixa}</Text>
					</CardContent>
					<Separator className="my-2" />
					<CardContent className="flex-row mt-4">
						<Text className="text-xl">Última planilha: </Text>
						<Text className="text-xl font-bold">{ultimaPlanilha}</Text>
					</CardContent>
					<CardContent className="flex-row">
						<Text className="text-xl">Notas cadastradas: </Text>
						<Text className="text-xl font-bold">{qtdNotas}</Text>
					</CardContent>
				</Card>
				<Separator className="my-4" />
				<View className="flex-row justify-between">
					<View className="items-center">
						<Button
							className="items-center justify-center"
							size={"default"}
						>
							<FileClock size={28} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Notas</Text>
					</View>
					<View className="items-center">
						<Button
							className="items-center justify-center"
							size={"default"}
						>
							<Sheet size={28} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Planilha</Text>
					</View>

					<View className="items-center">
						<Button
							className="items-center justify-center"
							size={"default"}
						>
							<FileStack size={28} color={currentTheme.background} />
						</Button>
						<Text className="text-lg mt-1">Relatório</Text>
					</View>
				</View>
				<Separator className="my-4" />
				<View className="flex-1">
					<Text className="text-xl font-semibold">Últimas 10 notas</Text>
					<ScrollView className="flex-1 mt-2">
						{INVOICES.map((invoice) => (
							<Card key={invoice.id} className="mb-4">
								<CardContent className="p-4">
									<Text className="font-extralight">{invoice.date}</Text>
									<Text className="text-lg">
										Gasto:{" "}
										<Text className="text-lg font-semibold">
											{invoice.category}
										</Text>{" "}
									</Text>
									<Text className="text-xl">{invoice.amount}</Text>
								</CardContent>
							</Card>
						))}
					</ScrollView>
				</View>
			</View>
		</View>
	);
}
