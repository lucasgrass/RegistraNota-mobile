import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Config from "../screens/Config";
import User from "../screens/User";

import { Home as HomeIcon } from "~/lib/icons/Home";
import { User as UserIcon } from "~/lib/icons/User";
import { Settings } from "~/lib/icons/Settings";

import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						const colorScheme = useColorScheme();
						const color = focused
							? colorScheme === "dark"
								? "white"
								: "black"
							: "grey";
						return <HomeIcon size={24} color={color} />;
					},
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Usuário"
				component={User}
				options={{
					tabBarIcon: ({ focused }) => {
						const colorScheme = useColorScheme();
						const color = focused
							? colorScheme === "dark"
								? "white"
								: "black"
							: "grey";
						return <UserIcon size={24} color={color} />;
					},
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Configurações"
				component={Config}
				options={{
					tabBarIcon: ({ focused }) => {
						const colorScheme = useColorScheme();
						const color = focused
							? colorScheme === "dark"
								? "white"
								: "black"
							: "grey";
						return <Settings size={24} color={color} />;
					},
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
}
