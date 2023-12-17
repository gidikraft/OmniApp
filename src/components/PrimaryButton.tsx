import { ActivityIndicator, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { Text } from './Themed';
import Colors, { palette } from '../constants/Colors';

type ButtonTypes = {
	title: string;
	buttonPress: () => void;
	buttonStyle?: ViewStyle;
	loading?: boolean;
};

const PrimaryButton = (props: ButtonTypes) => {
	const { title, buttonStyle, loading, buttonPress } = props;
	return (
		<Pressable
			onPress={buttonPress}
			style={[styles.button, buttonStyle, {backgroundColor: loading ? palette.primaryFaded : palette.primary}]}
		>
			{loading ? (
				<ActivityIndicator size={'small'} color={palette.white}/>
			) : (
				<Text style={styles.caption} lightColor={Colors.light.tint}>{title}</Text>
			)}
		</Pressable>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 8,
		marginBottom: 8,
		height: 40,
		backgroundColor: palette.primary,
		borderRadius: 20,
		marginHorizontal: 30
	},
	caption: {
		color: palette.white,
		lineHeight: 16
	}
});
