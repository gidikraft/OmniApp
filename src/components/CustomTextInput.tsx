import React, { useState } from "react";
import {
  StyleSheet,
  TextInput as RTextInput,
  TextStyle,
  KeyboardTypeOptions,
  Platform,
  ViewStyle,
  View,
} from "react-native";
import { Controller, Control } from "react-hook-form";
import { Text } from "./Themed";
import { palette } from "../constants/Colors";

export enum inputtype {
  select = "select",
  input = "input",
  date = "date",
}

type InputProps = {
  autoFocus?: boolean;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  name: string;
  control: Control<any>;
  errorMessage?: string;
  rules?: any;
  editable?: boolean;
  defaultValue?: string;
  submitfunc?: any;
  inputStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress?: () => void;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle
};

const CustomTextInput = ({
  autoFocus = false,
  defaultValue,
  control,
  editable = true,
  name,
  label,
  placeholder,
  inputContainerStyle,
  errorMessage,
  keyboardType = "default",
  submitfunc,
  rules,
  inputStyle,
  labelStyle,
  onPress,
  textStyle,
  containerStyle
}: InputProps) => {
  const hitSlop = { top: 20, left: 5, bottom: 10, right: 5 };

  return (
    <View
      style={{
        ...inputContainerStyle,
        width: "100%",
      }}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              {label &&
                <Text style={[labelStyle, styles(editable).label]}>
                  {label}
                </Text>
              }
            </View>
            <View
              style={{
                ...styles(editable).inputArea,
                ...containerStyle,
              }}>
                <Text style={{ color: '#6E737F', }}>₦</Text>
              <RTextInput
                autoFocus={autoFocus}
                defaultValue={defaultValue}
                editable={editable}
                autoCapitalize="none"
                style={{
                  ...styles(editable).input,
                  ...inputStyle,
                  ...textStyle,
                }}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                onSubmitEditing={() => submitfunc?.()}
                hitSlop={hitSlop}
                onPressIn={onPress}
              />
            </View>
          </View>
        )}
        name={name}
      />

      {errorMessage && (
        <Text style={styles(editable).error}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = (editable: boolean) => {
  return StyleSheet.create({
    input: {
      fontSize: 14,
      paddingHorizontal: 8,
    },
    inputArea: {
      backgroundColor: "#F4F4F4",
      flexDirection: "row",
      alignItems: "center",
      height: 45,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    label: {
      marginBottom: 4,
      fontSize: 14,
      color: "#474747",
    },
    error: {
      color: palette.error,
      fontSize: 12
    }
  });
};
