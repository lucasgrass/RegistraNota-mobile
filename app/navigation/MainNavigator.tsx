import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Scan from "../screens/Scan";
import EditUser from "../screens/Settings/EdirUser";
import Settings from "../screens/Settings/Settings";

import { Home as HomeIcon } from "~/lib/icons/Home";
import { Settings as SettingsIcon } from "~/lib/icons/Settings";
import { Scan as ScanIcon } from "~/lib/icons/Scan";

import { useColorScheme } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
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
				name="Escanear"
				component={Scan}
				options={{
					tabBarIcon: ({ focused }) => {
						const colorScheme = useColorScheme();
						const color = focused
							? colorScheme === "dark"
								? "white"
								: "black"
							: "grey";
						return <ScanIcon size={24} color={color} />;
					},
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Configurações"
				component={Settings}
				options={{
					tabBarIcon: ({ focused }) => {
						const colorScheme = useColorScheme();
						const color = focused
							? colorScheme === "dark"
								? "white"
								: "black"
							: "grey";
						return <SettingsIcon size={24} color={color} />;
					},
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function MainNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="MainTabs"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="EditUser"
				component={EditUser}
				options={{
					headerShown: false,
					animation: 'slide_from_right'
				}}
			/>
		</Stack.Navigator>
	);
}
