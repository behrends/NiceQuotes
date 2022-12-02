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
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  function saveQuote() {
    // Leerzeichen am Anfang/Ende entfernen
    const newContent = content.trim();
    const newName = name.trim();
    if (newContent.length === 0 || newName.length === 0) {
      alert('Inhalt und Name des Zitats dürfen nicht leer sein.');
      return;
    }
    onSave(newContent, newName);
    setContent('');
    setName('');
  }

  function cancelEditing() {
    onCancel();
    setContent('');
    setName('');
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={cancelEditing}
      animationType="slide"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <IconButton
          onPress={cancelEditing}
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
          onSubmitEditing={saveQuote}
          style={styles.input}
        />
        <BigButton title="Speichern" onPress={saveQuote} />
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
