import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { Filter } from "~/lib/icons/Filter";
import { FilterX } from "~/lib/icons/FilterX";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "~/components/ui/dialog";
import { SelectInput } from "~/components/custom/SelectInput";
import { Label } from "~/components/ui/label";
import { ListNotes } from "~/components/custom/ListNotes";

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

export default function Notes({ navigation }: { navigation: any }) {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	const [openDialog, setOpenDialog] = useState(false);
	const [isFilter, setIsFilter] = useState(false);
	const [category, setCategory] = useState("Filtrar por categoria");
	const [sheet, setSheet] = useState("Filtrar por planilha");
	const [dateFilter, setDateFilter] = useState<string>("");

	const categorias = [
		{ label: "Alimentação", value: "Alimentação" },
		{ label: "Transporte", value: "Transporte" },
		{ label: "Saúde", value: "Saúde" },
	];

	const planilhas = [
		{ label: "01/2025", value: "01/2025" },
		{ label: "02/2025", value: "02/2025" },
		{ label: "03/2025", value: "03/2025" },
	];

	const ChangeFilterStatus = () => {
		setIsFilter((prevState) => !prevState);
	};

	const ChangeDataFilter = (interval: string) => {
		setDateFilter((prevState) => (prevState === interval ? "" : interval));
	};

	return (
		<View className="flex-1 p-6 pt-10">
			<ArrowLeft
				size={36}
				color={currentTheme.foreground}
				onPress={() => navigation.goBack()}
			/>
			<View className="flex-1 mt-4">
				<Text className="text-xl font-semibold">Notas Fiscais cadastradas</Text>
				<Dialog open={openDialog} onOpenChange={setOpenDialog}>
					<DialogTrigger asChild>
						<Button className="mt-4 flex-row">
							<Filter
								size={20}
								color={currentTheme.secondary}
								onPress={() => setOpenDialog(true)}
							/>
							<Text className="ml-1">Filtrar</Text>
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Filtrar as Notas Fiscais</DialogTitle>
							<DialogDescription>
								Escolha as opções de filtro para exibir as notas fiscais
								desejadas.
							</DialogDescription>
						</DialogHeader>
						<Label className="mt-4">Filtrar por período</Label>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							className="grow-0"
						>
							{["1 dia", "7 dias", "14 dias", "1 mês", "3 meses"].map(
								(interval) => (
									<Button
										key={interval}
										className="mr-4 py-2 px-4 border rounded-md"
										style={{
											backgroundColor:
												dateFilter === interval
													? currentTheme.primary
													: currentTheme.secondary,
										}}
										onPress={() => ChangeDataFilter(interval)}
										variant={dateFilter === interval ? "default" : "outline"}
									>
										<Text className="text-sm">{interval}</Text>
									</Button>
								)
							)}
						</ScrollView>
						<SelectInput
							label="Planilha"
							value={sheet}
							setValue={setSheet}
							options={planilhas}
						/>
						<SelectInput
							label="Categoria"
							value={category}
							setValue={setCategory}
							options={categorias}
						/>
						<DialogFooter>
							<DialogClose asChild>
								<Button variant={"default"} onPress={ChangeFilterStatus}>
									<Text>Filtrar</Text>
								</Button>
							</DialogClose>
							{isFilter && (
								<DialogClose asChild>
									<Button variant={"destructive"} onPress={ChangeFilterStatus}>
										<Text>Remover filtro</Text>
									</Button>
								</DialogClose>
							)}
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<ListNotes notes={NOTES} />
			</View>
		</View>
	);
}
