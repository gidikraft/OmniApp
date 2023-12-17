import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import addfunds from "../assets/svg/addfunds.svg";
import airtime from "../assets/svg/airtime.svg";
import back_button from "../assets/svg/back.svg";
import back_white from "../assets/svg/back_white.svg";
import bills from "../assets/svg/bills.svg";
import chat from "../assets/svg/chat.svg";
import incoming from "../assets/svg/incoming.svg";
import logo from "../assets/svg/logo.svg";
import orders from "../assets/svg/orders.svg";
import outgoing from "../assets/svg/outgoing.svg";
import pos from "../assets/svg/pos.svg";
import qr_code from "../assets/svg/qr_code.svg";
import setting from "../assets/svg/setting.svg";
import transfer from "../assets/svg/transfer.svg";

type IconFunction = React.FC<SvgProps>;

export const ICONS = {
  addfunds,
  airtime,
  "back-button": back_button,
  "back-white": back_white,
  bills,
  chat,
  incoming,
  logo,
  orders,
  outgoing,
  pos,
  "qr-code": qr_code,
  setting,
  transfer,
};

export type IconName = keyof typeof ICONS;
export type IconProps = SvgProps & {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    stroke?: string;
    outerStroke?: string;
};

/**
 * Custom Icon component based on design systems used in the figma
 */
function Icon({ name, size = 24, style, ...props }: IconProps) {
    const IconImpl: IconFunction = ICONS[name as IconName];
    return IconImpl ?
        <IconImpl height={size} style={style} width={size} {...props} />
        : null;
}

export default Icon;