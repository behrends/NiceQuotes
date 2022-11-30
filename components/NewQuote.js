import { Modal, Pressable, Text, View } from 'react-native';

export default function NewQuote({ visible, onCancel }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onCancel}
      animationType="slide"
    >
      <View style={{ marginBottom: 50 }}>
        <Text style={{ borderWidth: 3, padding: 30 }}>
          Neues Zitat eingeben…
        </Text>
        <Pressable onPress={onCancel}>
          <Text style={{ fontSize: 24, padding: 10 }}>abbrechen</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
