import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import BigButton from './components/BigButton';
import IconButton from './components/IconButton';
import Quote from './components/Quote';
import NewQuote from './components/NewQuote';

const database = SQLite.openDatabase('quotes.db');

export default function App() {
  const [index, setIndex] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const [showNewDialog, setShowNewDialog] = useState(false);

  // Zitate beim Start der App laden
  useEffect(() => {
    initDB();
    loadQuotes();
  }, []); // [] --> einmalige Ausführung

  function initDB() {
    // Tabelle quotes erstellen (falls noch nicht vorhanden)
    database.transaction((tx) =>
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS quotes (id INTEGER PRIMARY KEY NOT NULL, text TEXT, author TEXT);'
      )
    );
  }

  function addQuoteToList(text, author) {
    setShowNewDialog(false);
    // Neues Zitat den bisherigen hinzufügen
    const newQuotes = [
      ...quotes, // ... -> Spread-Operator
      { text, author }, // text ~ text: text
    ];
    setQuotes(newQuotes);
    setIndex(newQuotes.length - 1);
    saveQuotes(text, author, newQuotes);
  }

  function removeQuoteFromList() {
    const newQuotes = [...quotes];
    const id = quotes[index].id;
    newQuotes.splice(index, 1);
    setIndex(0);
    setQuotes(newQuotes);
    // Zitat aus SQLite löschen
    database.transaction((tx) =>
      tx.executeSql('DELETE FROM quotes WHERE id=?', [id])
    );
  }

  function deleteQuote() {
    Alert.alert(
      'Zitat löschen',
      'Soll das Zitat wirklich gelöscht werden?',
      [
        { text: 'Abbrechen', style: 'cancel' },
        {
          text: 'Bestätigen',
          style: 'destructive',
          onPress: removeQuoteFromList,
        },
      ]
    );
  }

  function saveQuotes(text, author, newQuotes) {
    // Zitat in SQLite speichern
    database.transaction((tx) =>
      tx.executeSql(
        'INSERT INTO quotes (text,author) VALUES (?,?)',
        [text, author],
        (_, result) => {
          // id im neuen Zitat setzen
          newQuotes[newQuotes.length - 1].id = result.insertId;
          setQuotes(newQuotes);
        }
      )
    );
  }

  async function loadQuotes() {
    // Zitate aus SQLite laden
    database.transaction((tx) =>
      tx.executeSql('SELECT * FROM quotes', [], (_, result) => {
        setQuotes(result.rows._array);
      })
    );
  }

  let content = <Text style={styles.noQuotes}>Keine Zitate</Text>;
  if (quotes.length > 0) {
    const quote = quotes[index];
    content = <Quote text={quote.text} author={quote.author} />;
  }

  return (
    <View style={styles.container}>
      {quotes.length === 0 ? null : (
        <IconButton
          onPress={deleteQuote}
          icon="delete"
          style={styles.delete}
        />
      )}
      <IconButton
        onPress={() => setShowNewDialog(true)}
        icon="add-circle"
        style={styles.new}
      />
      <NewQuote
        visible={showNewDialog}
        onCancel={() => setShowNewDialog(false)}
        onSave={addQuoteToList}
      />
      {content}
      {quotes.length < 2 ? null : (
        <BigButton
          style={styles.next}
          title="Nächstes Zitat"
          onPress={() => setIndex((index + 1) % quotes.length)}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    position: 'absolute',
    bottom: 60,
  },
  new: {
    position: 'absolute',
    top: 60,
    right: 30,
  },
  delete: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  noQuotes: {
    fontSize: 36,
    fontWeight: '300',
  },
});
