import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function NewQuote({ visible, onCancel }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onCancel}
      animationType="slide"
    >
      <View style={styles.container}>
        <TextInput placeholder="Inhalt" style={styles.input} />
        <TextInput placeholder="Name" style={styles.input} />
        <Pressable onPress={onCancel}>
          <Text style={{ fontSize: 24, padding: 10 }}>abbrechen</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    // Inhalte zentrieren
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'darkslateblue',
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
  },
});
