import { ReactNode } from 'react';
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useApp } from '../context/AppContext';

type Props = { children: ReactNode; contentStyle?: StyleProp<ViewStyle> };

// Scrollable, themed wrapper so content never overflows small screens
export default function ScreenContainer({ children, contentStyle }: Props) {
  const { colors } = useApp();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={[styles.content, contentStyle]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({ content: { padding: 16, flexGrow: 1 } });