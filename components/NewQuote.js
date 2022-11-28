import { Pressable, Text, View } from 'react-native';

export default function NewQuote({ visible, onCancel }) {
  if (!visible) return null;
  return (
    <View style={{ marginBottom: 50 }}>
      <Text style={{ borderWidth: 3, padding: 30 }}>
        Neues Zitat eingeben…
      </Text>
      <Pressable onPress={onCancel}>
        <Text style={{ fontSize: 24, padding: 10 }}>abbrechen</Text>
      </Pressable>
    </View>
  );
}
