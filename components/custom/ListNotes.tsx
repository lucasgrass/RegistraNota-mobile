import React, { useState } from "react";
import { View, ScrollView, Modal } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";
import { darkTheme, lightTheme } from "~/lib/theme";
import { Image } from "expo-image";
import { X } from "~/lib/icons/X";
import { Separator } from "~/components/ui/separator";
import { DeleteAlertDialog } from "./DeleteAlertDialog";

interface Note {
	id: string;
	date: string;
	authorizationDate: string;
	category: string;
	amount: string;
	sheet: string;
	description: string;
	imageUrl?: string;
}

interface ListNotesProps {
	notes: Note[];
}

const NoteItem = ({
	note,
	onViewPhoto,
	onDeleteNote,
}: {
	note: Note;
	onViewPhoto: (note: Note) => void;
	onDeleteNote: (note: Note) => void;
}) => {
	return (
		<View className="mb-4">
			<Separator className="my-2" />
			<View className="flex-row justify-between items-center mb-1">
				<View className="flex-row items-center">
					<Text className="font-semibold">ID: </Text>
					<Text className="text-lg">{note.id}</Text>
				</View>
				<Text className="font-extralight text-sm">{note.date}</Text>
			</View>
			<View className="flex-row mb-1">
				<Text className="text-lg font-semibold">Planilha: </Text>
				<Text className="text-lg">{note.sheet}</Text>
			</View>
			<View className="flex-row mb-1">
				<Text className="text-lg font-semibold">Categoria: </Text>
				<Text className="text-lg">{note.category}</Text>
			</View>
			<View className="flex-row mb-1">
				<Text className="text-lg font-semibold">Valor: </Text>
				<Text className="text-lg">{note.amount}</Text>
			</View>
			<View className="flex-row mb-1">
				<Text className="text-lg font-semibold">Data de emissão: </Text>
				<Text className="text-lg">{note.authorizationDate}</Text>
			</View>
			<View className="mb-1">
				<Text className="text-lg font-semibold">Descrição: </Text>
				<Text className="text-sm font-light">{note.description}</Text>
			</View>
			<Button
				className="mt-4"
				variant="secondary"
				onPress={() => onViewPhoto(note)}
			>
				<Text>Ver foto</Text>
			</Button>
			<Button
				className="mt-4 self-center"
				variant="ghost"
				onPress={() => onDeleteNote(note)}
			>
				<Text>Excluir nota</Text>
			</Button>
		</View>
	);
};

export const ListNotes = ({ notes }: ListNotesProps) => {
	const { colorScheme } = useColorScheme();
	const currentTheme = colorScheme === "dark" ? darkTheme : lightTheme;

	const [selectedNote, setSelectedNote] = useState<Note | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAlertOpen, setIsAlertOpen] = useState(false);

	const ViewPhoto = () => {
		setIsModalOpen(true);
	};

	const DeleteNote = (note: Note) => {
		setSelectedNote(note);
		setIsAlertOpen(true);
	};

	const ConfirmDeleteNote = () => {
		if (selectedNote) {
			console.log("Nota deletada:", selectedNote.id);
		}
		setIsAlertOpen(false);
		setSelectedNote(null);
	};

	return (
		<>
			<ScrollView className="flex-1 mt-2">
				{notes.map((note) => (
					<NoteItem
						key={note.id}
						note={note}
						onViewPhoto={ViewPhoto}
						onDeleteNote={DeleteNote}
					/>
				))}
			</ScrollView>
			<Modal visible={!!isModalOpen} animationType="slide">
				<View
					className="flex-1 p-4 pt-10 justify-center"
					style={{ backgroundColor: currentTheme.background }}
				>
					<X
						size={36}
						color={currentTheme.foreground}
						onPress={() => setIsModalOpen(false)}
					/>
					<Image
						source={require("~/assets/images/nota.jpeg")}
						style={{ width: "100%", height: "100%" }}
					/>
				</View>
			</Modal>
			<DeleteAlertDialog
				isOpen={isAlertOpen}
				onClose={() => setIsAlertOpen(false)}
				onDelete={ConfirmDeleteNote}
				title="Tem certeza que deseja deletar a nota?"
				description={
					selectedNote
						? `Esta ação não pode ser desfeita. A nota será permanentemente excluída. 
						ID: ${selectedNote.id} 
						Planilha: ${selectedNote.sheet} 
						Categoria: ${selectedNote.category} 
						Valor: ${selectedNote.amount} 
						Data de emissão: ${selectedNote.authorizationDate}`
						: "Esta ação não pode ser desfeita. A nota será permanentemente excluída."
				}
			/>
		</>
	);
};
