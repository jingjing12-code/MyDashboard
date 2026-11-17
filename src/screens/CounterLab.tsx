import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import ScreenContainer from '../components/ScreenContainer';
import { useApp } from '../context/AppContext';

export default function CounterLab() {
  const { colors } = useApp();
  const [count, setCount] = useState(0);

  return (
    <ScreenContainer contentStyle={styles.center}>
      <Text style={[styles.count, { color: colors.text }]}>{count}</Text>
      <View style={styles.row}>
        <AppButton label="−" onPress={() => setCount((c) => c - 1)} style={styles.flex} />
        <AppButton label="+" onPress={() => setCount((c) => c + 1)} style={styles.flex} />
      </View>
      <AppButton label="Reset" variant="outline" onPress={() => setCount(0)} style={{ marginTop: 12, alignSelf: 'stretch' }} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
  count: { fontSize: 72, fontWeight: '800', marginBottom: 24 },
  row: { flexDirection: 'row', gap: 12, alignSelf: 'stretch' },
  flex: { flex: 1 },
});