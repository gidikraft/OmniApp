import { Pressable, SectionList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, } from '../components/Themed';
import { palette } from '../constants/Colors';
import Icon from '../components/Icons';
import { AllTransactions, DashboardActions, PageWrapper } from '../components/layouts';
import { RootStackScreenProps } from '../navigation/types';

const TABS = [
  { id: 1, title: 'Both' },
  { id: 2, title: 'In' },
  { id: 3, title: 'Out' },
];

const DATA = [
  {
    title: 'Today',
    data: [
      { title: 'Fund Wallet', status: 'incoming', amount: '₦35,000', date: '21-08-21  5:10 PM', type: 'Transfer', id: 1 },
      { title: 'Payment for Order 281352', status: 'outgoing', amount: '-₦20,000', date: '21-08-21  5:10 PM', type: 'Paylater', id: 2 },
      { title: 'Payment for Order 813526', status: 'outgoing', amount: '-₦8,750', date: '21-08-21  9:00 PM', type: 'Paylater', id: 3 }
    ],
  },
];

const WalletScreen = ({ navigation }: RootStackScreenProps<"WalletScreen">) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transactionData, setTransactionData] = useState(DATA);
  const { navigate } = navigation;

  const filterTransactions = (index: number) => {
    let newTransactions;
    switch (index) {
      case 1:
        newTransactions = DATA.map(group => ({
          title: group.title,
          data: group.data.filter(item => item.status === 'incoming'),
        }));
        break;
      case 2:
        newTransactions = DATA.map(group => ({
          title: group.title,
          data: group.data.filter(item => item.status === 'outgoing'),
        }));
        break;
      default:
        newTransactions = newTransactions = DATA.map(group => ({
          title: group.title,
          data: group.data.filter(item => item.status === 'incoming' || item.status === 'outgoing'),
        }));
        break
    }

    setActiveIndex(index);
    setTransactionData(newTransactions);
  };

  const toAddFunds = () => navigate('AddFunds');

  return (
    <PageWrapper withChat withCurved title='Wallet'>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceHeader}>Account Balance</Text>
        <Text style={styles.amount}>₦20,000.00</Text>
        <View style={styles.divider} />

        <View style={styles.rowsb}>
          <Pressable style={styles.balanceCardButtons} onPress={toAddFunds}>
            <Icon name='addfunds' size={16} />
            <Text style={styles.cardButtonTitle}>Add Money</Text>
          </Pressable>

          <Pressable style={styles.balanceCardButtons} >
            <Icon name='qr-code' size={16} />
            <Text style={styles.cardButtonTitle}>Show QR Code</Text>
          </Pressable>
        </View>

      </View>
      <DashboardActions />

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
      }}>
        <Text style={{ color: '#636363' }}>Account Transactions</Text>
        <Text style={{ color: '#A682FF', fontSize: 12 }}>View More</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F1',
        height: 40,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 13,
        paddingHorizontal: 4
      }}>
        {TABS.map((item, index) => {
          const { id, title } = item;
          return (
            <Pressable
              style={{ ...styles.tabs, backgroundColor: activeIndex === index ? palette.white : '#F1F1F1', }}
              key={id}
              onPress={() => filterTransactions(index)}
            >
              <Text style={{ color: activeIndex === index ? palette.primary : '#979797', fontSize: 12, }}>{title}</Text>
            </Pressable>
          )
        })}
      </View>

      <SectionList
        sections={transactionData}
        keyExtractor={(item, index) => `${item.id}${index}`}
        contentContainerStyle={{ paddingBottom: 30, marginTop: 8 }}
        renderItem={({ item }) => {
          const { amount, date, status, title, type } = item;
          return (
            <AllTransactions
              amount={amount}
              date={date}
              status={status}
              title={title}
              type={type}
            />
          )
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />

    </PageWrapper>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: palette.primary,
    borderRadius: 10,
    marginTop: 42,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  balanceHeader: {
    color: palette.white,
    textAlign: 'center',
    marginTop: 18,
    fontSize: 16,
    lineHeight: 24
  },
  amount: {
    color: palette.white,
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 40
  },
  divider: {
    height: 1,
    backgroundColor: palette.background,
    marginTop: 18
  },
  rowsb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceCardButtons: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  cardButtonTitle: {
    color: palette.white,
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 4
  },
  tabs: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
    height: 32,
    borderRadius: 4
  },
  header: {
    fontSize: 12,
    color: '#515A65',
    marginBottom: 12
  },
});
