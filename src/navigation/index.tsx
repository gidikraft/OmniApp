import { View, Text, ColorSchemeName } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import RootNavigation from './RootNavigation';

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigation />
		</NavigationContainer>
  )
};

export default Navigation;
