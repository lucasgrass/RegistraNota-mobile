import React from "react";
import { View } from "react-native";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import { Label } from "~/components/ui/label";

interface SelectInputProps {
	label: string;
	value: string;
	setValue: (value: string) => void;
	options: { label: string; value: string }[];
}

export const SelectInput: React.FC<SelectInputProps> = ({
	label,
	value,
	setValue,
	options,
}) => {
	const [selectTriggerWidth, setSelectTriggerWidth] = React.useState(0);
	return (
		<View>
			<Label className="font-semibold">{label}</Label>
			<Select>
				<SelectTrigger
					className="w-full"
					onLayout={(ev) => {
						setSelectTriggerWidth(ev.nativeEvent.layout.width);
					}}
				>
					<SelectValue
						className="text-foreground text-sm native:text-lg"
						placeholder={value}
					/>
				</SelectTrigger>
				<SelectContent align="center" style={{ width: selectTriggerWidth }}>
					<SelectGroup>
						<SelectLabel>{label}</SelectLabel>
						{options.map((option) => (
							<SelectItem
								key={option.value}
								label={option.label}
								value={option.value}
								onPress={() => setValue(option.value)}
							>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</View>
	);
};
