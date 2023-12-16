import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { Text } from './Themed';
import Colors, { palette } from '../constants/Colors';

type ButtonTypes = {
	title: string;
	buttonPress: () => void;
	buttonStyle?: ViewStyle;
};

const PrimaryButton = (props: ButtonTypes) => {
	const { title, buttonStyle, buttonPress } = props;
	return (
		<Pressable
			onPress={buttonPress}
			style={[styles.button, buttonStyle]}
		>
			<Text style={styles.caption} lightColor={Colors.light.tint}>{title}</Text>
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
		height: 45,
		backgroundColor: palette.primary,
		borderRadius: 8,
	},
	caption: {
		color: palette.white
	}
});
