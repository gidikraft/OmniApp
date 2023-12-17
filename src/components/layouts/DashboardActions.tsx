import { Pressable, StyleSheet,  } from 'react-native';
import React from 'react';
import { Text, View } from '../Themed';
import Icon, { IconName } from '../Icons';
import { palette } from '../../constants/Colors';

const ACTIONS = [
  {title: 'Pay for orders', backgound: 'rgba(249, 91, 47, 0.15)', icon: 'orders'},
  {title: 'Airtime & Data', backgound: 'rgba(24, 58, 173, 0.15)', icon: 'airtime'},
  {title: 'Transfer Money', backgound: 'rgba(16, 134, 173, 0.15)', icon: 'transfer'},
  {title: 'Pay Bills', backgound: 'rgba(253, 146, 35, 0.15)', icon: 'bills'},
  {title: 'POS', backgound: 'rgba(253, 35, 91, 0.15)', icon: 'pos'},
  {title: 'Settings', backgound: 'rgba(166, 130, 255, 0.15)', icon: 'setting'},
]

type MenuProps ={
  ordersAction?: () => void;
  airtimeAction?: () => void;
  transferAction?: () => void;
  billsAction?: () => void;
  posAction?: () => void;
  settingsAction?: () => void;
}

export const DashboardActions = ({
  airtimeAction,
  billsAction,
  ordersAction,
  posAction,
  settingsAction,
  transferAction
}: MenuProps) => {
  return (
    <View style={{
      flexDirection: 'row',
      marginTop: 16,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
      {ACTIONS.map((item, index) => {
        const {backgound, icon, title} = item;
        return (
          <Pressable style={{...styles.cardContainer, backgroundColor: backgound}} key={index}>
            <Icon name={icon as IconName} />
            <Text style={styles.cardTitle}>{title}</Text>
          </Pressable>
        )
      })}
    </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 60,
    width: '30%',
    borderRadius: 4,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 10,
    lineHeight: 16,
    color: palette.secondary
  },
});
