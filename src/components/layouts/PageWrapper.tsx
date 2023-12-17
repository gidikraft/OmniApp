import { Platform, Pressable, StyleSheet, View, ViewStyle } from 'react-native';;
import React, { ReactNode } from 'react'
import { palette } from '../../constants/Colors';
import Icon from '../Icons';
import { Text } from '../Themed';
import { useNavigation } from '@react-navigation/native';

type PageWrapperProps = {
  children: ReactNode;
  style?: ViewStyle;
  title?: string
  withChat?: boolean;
  withCurved?: boolean;
};

export const PageWrapper = ({ children, style, title, withChat, withCurved }: PageWrapperProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      {withCurved && <View style={{ ...styles.curveBcgrnd, height: Platform.OS === 'android' ? 250 : 284 }} />}
      <View style={{
        position: 'absolute',
        marginHorizontal: 22,
        top: Platform.OS === 'android' ? 20 : 60
      }} >
        {title &&
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Pressable onPress={() => navigation.goBack()} style={{ flex: 0.1 }}>
              <Icon name='back-button' size={16} />
            </Pressable>

            <View style={{ flex: 0.9 }} >
              <Text style={{ fontSize: 18, lineHeight: 19.42, textAlign: 'center', color: withCurved ? palette.white : palette.textColor }}>{title}</Text>
            </View>
          </View>
        }
        <View style={{ ...styles.container, ...style }}>
          {children}
        </View>
      </View>
      {withChat &&
        <View style={{ position: 'absolute', bottom: 34, right: 26 }} >
          <Icon name='chat' size={48}/>
        </View>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: palette.background,
    flex: 1,
  },
  curveBcgrnd: {
    backgroundColor: palette.primary,
    height: 258,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    // marginHorizontal: 22,
    marginTop: 24,
    // position: 'absolute',
    // top: 70,
    backgroundColor: palette.background,
    borderRadius: 22,
    paddingHorizontal: 10,
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
