import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import React from "react";
import { Text, View } from "./Themed";

export type CustomInputProps = {
  label: string;
  title: string;
  value: string;
  isPassword?: boolean;
  disabled?: boolean;
  onChangeText: (text: string) => void;
};

const CustomInput = (props: CustomInputProps) => {
  const { label, disabled, value, title, onChangeText } = props;
  // const [isSecure, setIsSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={label}
          style={styles.input}
          editable={!disabled}
          // secureTextEntry={isPassword ? isSecure : false}
          allowFontScaling={false}
          placeholderTextColor="#6D7175"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 4,
    fontSize: 12,
    color: "#202223",
  },

  inputContainer: {
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 45,
    fontSize: 14,
    padding: 12,
    backgroundColor: "#F7F7F7",
    color: "#202223",
    borderRadius: 8,
  },
});
