import { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';
import ScreenContainer from '../components/ScreenContainer';
import { useApp } from '../context/AppContext';

export default function SettingsScreen() {
  const { colors, isDark, toggleTheme, userName, setUserName } = useApp();
  const [draft, setDraft] = useState(userName); // local state sa screen ra

  return (
    <ScreenContainer>
      <View style={[styles.panel, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.label, { color: colors.text }]}>Dark mode</Text>
            <Text style={{ color: colors.muted }}>Mo-update dayon ang tanang screen</Text>
          </View>
          <Switch value={isDark} onValueChange={toggleTheme} trackColor={{ true: colors.primary }} />
        </View>
      </View>

      <View style={[styles.panel, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.label, { color: colors.text }]}>Your name</Text>
        <TextInput
          value={draft}
          onChangeText={setDraft}
          placeholder="Enter your name"
          placeholderTextColor={colors.muted}
          style={[styles.input, { color: colors.text, borderColor: colors.border }]}
        />
        <AppButton
          label="Save name"
          onPress={() => setUserName(draft.trim() || 'Student')}
          style={{ marginTop: 12 }}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  panel: { borderWidth: 1, borderRadius: 16, padding: 16, marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, marginTop: 8 },
});