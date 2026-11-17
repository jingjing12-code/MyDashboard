import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { useApp } from '../context/AppContext';

type Props = {
  icon: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function AppCard({ icon, title, subtitle, onPress, style }: Props) {
  const { colors } = useApp();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border, opacity: pressed ? 0.7 : 1 },
        style,
      ]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      {subtitle ? <Text style={[styles.sub, { color: colors.muted }]}>{subtitle}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderRadius: 16, padding: 16, minHeight: 120, justifyContent: 'space-between' },
  icon: { fontSize: 30 },
  title: { fontSize: 16, fontWeight: '700', marginTop: 8 },
  sub: { fontSize: 13, marginTop: 2 },
});