import { Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { labs } from '../../data/labs';

export default function LabRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lab = labs.find((l) => l.id === id);

  if (!lab) return <Text>Lab not found</Text>;

  const LabScreen = lab.component;
  return (
    <>
      <Stack.Screen options={{ title: lab.title }} />
      <LabScreen />
    </>
  );
}