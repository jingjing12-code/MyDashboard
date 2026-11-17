import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, useApp } from '../context/AppContext';

function ThemedStack() {
  const { colors, isDark } = useApp();
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'MyDashboard' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="lab/[id]" options={{ title: 'Lab' }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <AppProvider>
      <ThemedStack />
    </AppProvider>
  );
}