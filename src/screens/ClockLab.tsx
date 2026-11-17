import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { useApp } from '../context/AppContext';

export default function ClockLab() {
  const { colors } = useApp();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id); // cleanup kung mogawas sa screen
  }, []);

  return (
    <ScreenContainer contentStyle={styles.center}>
      <Text style={[styles.time, { color: colors.text }]}>{now.toLocaleTimeString()}</Text>
      <Text style={{ color: colors.muted, marginTop: 8 }}>{now.toDateString()}</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: 'center' },
  time: { fontSize: 44, fontWeight: '800' },
});