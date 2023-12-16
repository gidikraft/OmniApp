/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
};

export type RootStackParamList = {
    // BottomTabs: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    // Home: undefined;
    WalletScreen: undefined;
    AddFunds: undefined;
    // SupportScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;
