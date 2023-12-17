import { StyleSheet,  } from 'react-native';
import React from 'react';
import { Text, View } from '../Themed';
import Icon from '../Icons';

type TransactionProps = {
  status: string,
  type: string,
  amount: string,
  title: string,
  date: string,
};

export const AllTransactions = ({
  amount,
  date,
  status,
  title,
  type
}: TransactionProps) => {
  return (
    <View style={styles.item}>
      <View
        style={{
          ...styles.status,
          backgroundColor: status === 'incoming' ? 'rgba(34, 176, 125, 0.1)' : 'rgba(255, 114, 107, 0.1)'
        }}
      >
        <Icon name={status === 'incoming' ? 'incoming' : 'outgoing'} size={12} />
      </View>
      <View style={{ flex: 1, marginLeft: 12, }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={styles.title}>{title}</Text>
          <Text
            style={{
              ...styles.transactionAmount,
              color: status === 'incoming' ? '#0AAF1B' : '#E71414'
            }}
          >
            {amount}
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 4
        }}>
          <View style={styles.transactionTypeContainer}>
            <Text style={styles.transactionType}>{type}</Text>
          </View>

          <Text style={styles.transactiondate} >{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 8,
    flex: 1,
  },
  status: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: '#061423',
    lineHeight: 16
  },
  transactionAmount: {
    fontSize: 12,
    lineHeight: 16,
  },
  transactionTypeContainer: {
    backgroundColor: '#E9EDF1',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  transactionType: {
    fontSize: 10,
    color: '#979797',
    lineHeight: 12
  },
  transactiondate: {
    fontSize: 12,
    color: '#4D4A4A',
    lineHeight: 16
  },
});
