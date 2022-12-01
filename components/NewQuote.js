import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export default function NewQuote({ visible, onCancel }) {
  return (
    <Modal
      visible={visible}
      onRequestClose={onCancel}
      animationType="slide"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TextInput
          placeholder="Inhalt"
          multiline={true}
          style={[styles.input, styles.contentInput]}
        />
        <TextInput
          placeholder="Name"
          returnKeyType="done"
          onSubmitEditing={() => alert('Zitat speichern')}
          style={styles.input}
        />
        <Pressable onPress={onCancel}>
          <Text style={{ fontSize: 24, padding: 10 }}>abbrechen</Text>
        </Pressable>
      </KeyboardAvoidingView>
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
  contentInput: {
    height: 150,
    textAlignVertical: 'top',
  },
});
