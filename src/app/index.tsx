import { useRouter } from 'expo-router';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import AppCard from '../components/AppCard';
import ScreenContainer from '../components/ScreenContainer';
import { useApp } from '../context/AppContext';
import { labs } from '../data/labs';

const GAP = 12;

export default function HomeScreen() {
  const router = useRouter();
  const { colors, userName, isDark } = useApp();
  const { width } = useWindowDimensions();

  // Responsive grid: 2 columns sa phone, 3 sa tablet/lapad nga screen
  const columns = width >= 700 ? 3 : 2;
  const cardWidth = (width - 32 - GAP * (columns - 1)) / columns;

  return (
    <ScreenContainer>
      <View style={[styles.hero, { backgroundColor: colors.primary }]}>
        <Text style={[styles.hello, { color: colors.onPrimary }]}>
          Welcome to MyDashboard, {userName} 👋
        </Text>
        <Text style={[styles.heroSub, { color: colors.onPrimary }]}>
          {isDark ? 'Dark' : 'Light'} theme · {labs.length} labs available
        </Text>
      </View>

      <Text style={[styles.section, { color: colors.text }]}>Dashboard</Text>

      <View style={styles.grid}>
        {labs.map((lab) => (
          <AppCard
            key={lab.id}
            icon={lab.icon}
            title={lab.title}
            subtitle={lab.description}
            style={{ width: cardWidth }}
            onPress={() => router.push(`/lab/${lab.id}` as any)}
          />
        ))}
        <AppCard
          icon="⚙️"
          title="Settings"
          subtitle="Theme & profile"
          style={{ width: cardWidth }}
          onPress={() => router.push('/settings' as any)}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: { borderRadius: 20, padding: 20, marginBottom: 20 },
  hello: { fontSize: 22, fontWeight: '800' },
  heroSub: { fontSize: 14, marginTop: 4, opacity: 0.9 },
  section: { fontSize: 18, fontWeight: '700', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: GAP },
});