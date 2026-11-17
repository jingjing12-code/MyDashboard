import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { useApp } from '../context/AppContext';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  style?: StyleProp<ViewStyle>;
};

export default function AppButton({ label, onPress, variant = 'primary', style }: Props) {
  const { colors } = useApp();
  const outline = variant === 'outline';
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.btn,
        outline
          ? { borderWidth: 1.5, borderColor: colors.primary }
          : { backgroundColor: colors.primary },
        { opacity: pressed ? 0.75 : 1 },
        style,
      ]}
    >
      <Text style={[styles.label, { color: outline ? colors.primary : colors.onPrimary }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 16, fontWeight: '700' },
});