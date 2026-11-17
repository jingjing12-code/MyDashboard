import { StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { useApp } from '../context/AppContext';

export default function ComingSoonLab() {
  const { colors } = useApp();
  return (
    <ScreenContainer contentStyle={styles.center}>
      <Text style={{ fontSize: 48 }}>🚧</Text>
      <Text style={[styles.title, { color: colors.text }]}>Coming soon</Text>
      <Text style={{ color: colors.muted, textAlign: 'center' }}>
        Ilisi kini nga screen sa imong sunod nga laboratory activity.
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '800', marginVertical: 8 },
});