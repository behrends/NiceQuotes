import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import BigButton from './BigButton';
import IconButton from './IconButton';

export default function NewQuote({ visible, onCancel, onSave }) {
  const [name, setName] = useState(null);
  const [content, setContent] = useState(null);

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
        <IconButton
          onPress={onCancel}
          icon="arrow-back"
          style={styles.back}
        />
        <TextInput
          placeholder="Inhalt"
          multiline={true}
          onChangeText={setContent}
          style={[styles.input, styles.contentInput]}
        />
        <TextInput
          placeholder="Name"
          returnKeyType="done"
          onChangeText={setName}
          onSubmitEditing={() => onSave(content, name)}
          style={styles.input}
        />
        <BigButton
          title="Speichern"
          onPress={() => onSave(content, name)}
        />
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
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});
