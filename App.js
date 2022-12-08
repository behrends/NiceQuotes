import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BigButton from './components/BigButton';
import IconButton from './components/IconButton';
import Quote from './components/Quote';
import NewQuote from './components/NewQuote';

const data = [
  {
    text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.',
    author: 'Albert Einstein',
  },
  {
    text: 'Man braucht nichts im Leben zu fürchten, man muss nur alles verstehen.',
    author: 'Marie Curie',
  },
  {
    text: 'Nichts ist so beständig wie der Wandel.',
    author: 'Heraklit',
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [quotes, setQuotes] = useState(data);
  const [showNewDialog, setShowNewDialog] = useState(false);

  const quote = quotes[index];

  function addQuoteToList(text, author) {
    setShowNewDialog(false);
    // Neues Zitat den bisherigen hinzufügen
    const newQuotes = [
      ...quotes, // ... -> Spread-Operator
      { text, author }, // text ~ text: text
    ];
    setQuotes(newQuotes);
    setIndex(newQuotes.length - 1);
    saveQuotes(newQuotes);
  }

  function saveQuotes(newQuotes) {
    // Speicherung der Zitate in AsyncStorage
    AsyncStorage.setItem('QUOTES', JSON.stringify(newQuotes));
  }

  async function loadQuotes() {
    let quotesFromDB = await AsyncStorage.getItem('QUOTES');
    if (quotesFromDB !== null) {
      console.log('Anzahl der Zitate: ' + quotesFromDB.length);
      quotesFromDB = JSON.parse(quotesFromDB);
      console.log('nach JSON.parse: ' + quotesFromDB.length);
      // TODO: Zitate im state ablegen
    }
  }
  loadQuotes();

  return (
    <View style={styles.container}>
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
      <Quote text={quote.text} author={quote.author} />
      <BigButton
        style={styles.next}
        title="Nächstes Zitat"
        onPress={() => setIndex((index + 1) % quotes.length)}
      />
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
});
