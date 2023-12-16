import React from 'react';
import { Text, TextProps } from './Themed';
import { fp } from '../constants/layout';
import { palette } from '../constants/Colors';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontSize: fp(14), color: palette.primary }]} />;
}
