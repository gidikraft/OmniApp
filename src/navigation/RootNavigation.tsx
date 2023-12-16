import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
// import { AppLanding, HomeScreen, ModalScreen } from '../screens';
import { AppContext } from '../context/AppContext';
import { AddFundsScreen, ModalScreen, WalletScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
	const { isAuthenticated } = useContext(AppContext);
	return (
		<Stack.Navigator
			initialRouteName='WalletScreen'
		>
			{isAuthenticated ? (
				<>
					<Stack.Screen name="WalletScreen" component={WalletScreen} options={{ title: 'Home Gallery' }} />

					<Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name="Modal" component={ModalScreen} />
					</Stack.Group>
				</>
			) : (
				<Stack.Screen
					name="AddFunds"
					component={AddFundsScreen}
					options={{
						headerShadowVisible: false,
						headerShown: false,
					}}
				/>

			)}

		</Stack.Navigator>
  )
};

export default RootNavigation;
