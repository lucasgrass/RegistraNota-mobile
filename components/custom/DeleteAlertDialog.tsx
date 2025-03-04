import React from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Text } from "~/components/ui/text";

interface AlertDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onDelete: () => void;
	title: string;
	description: string;
}

export const DeleteAlertDialog = ({
	isOpen,
	onClose,
	onDelete,
	title,
	description,
}: AlertDialogProps) => {
	return (
		<AlertDialog open={isOpen} onOpenChange={onClose}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onPress={onClose}>
						<Text>Cancelar</Text>
					</AlertDialogCancel>
					<AlertDialogAction onPress={onDelete}>
						<Text>Deletar</Text>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
