import { Text } from 'react-native';

export default function NewQuote({ visible }) {
  if (!visible) return null;
  return (
    <Text style={{ borderWidth: 3, padding: 30, marginBottom: 50 }}>
      Neues Zitat eingeben…
    </Text>
  );
}
