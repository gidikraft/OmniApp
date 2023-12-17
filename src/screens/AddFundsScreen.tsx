import { Pressable, SafeAreaView, StyleSheet, } from 'react-native';
import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import { palette } from '../constants/Colors';
import PrimaryButton from '../components/PrimaryButton';
import { RootStackScreenProps } from '../navigation/types';
import Icon from '../components/Icons';
import { SERVER } from '../services/network';
import CustomTextInput from '../components/CustomTextInput';
import { useForm } from 'react-hook-form';

const AddFundsScreen = ({ navigation }: RootStackScreenProps<"AddFunds">) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ amount }: {amount: string}) => {
    try {
      setLoading(true);
      const body = {
        amount
      };

      await SERVER.post('test/add-money', body);

    } catch (error) {
      console.log(error, 'addmoney error reponse');
    } finally {
      setLoading(false);
    }
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      amount: "",
    },
  });

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={{ paddingHorizontal: 16, flex: 1 }} >
        <View style={{ flexDirection: 'row', paddingTop: 8, }}>
          <Pressable onPress={() => navigation.goBack()} style={{ flex: 0.1 }}>
            <Icon name='back-button' size={16} stroke={palette.white} fill={palette.white} />
          </Pressable>

          <View style={{ flex: 0.9 }} >
            <Text style={{ fontSize: 18, lineHeight: 19.42, textAlign: 'center', color: palette.textColor }}>Add Money</Text>
          </View>
        </View>

        <View style={styles.container}>
          <CustomTextInput
            placeholder='0'
            control={control}
            name="amount"
            label='Amount'
            rules={{
              // required: "Amount is required",
              maxLength: {
                value: 10,
                message: "Maximum of 10 characters",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a amount",
              },
            }}
            keyboardType='number-pad'
            errorMessage={errors.amount?.message}
          />

          <PrimaryButton
            title='Submit'
            buttonPress={handleSubmit(onSubmit)}
            loading={loading}
            buttonStyle={{ marginTop: 16 }}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0, 
          alignSelf: 'center'
        }}>
          <Text style={{fontSize: 12, lineHeight: 12.95, marginRight: 4 }}>Powered By</Text>
          <Icon name='logo' size={60}/>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddFundsScreen;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: palette.background,
    flex: 1,
  },
  container: {
    marginTop: 24,
    backgroundColor: palette.background,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 32,
    shadowColor: 'rgba(0,0,0,0.2',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
});
