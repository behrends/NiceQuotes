import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BigButton from './components/BigButton';
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
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.new}
        onPress={() => setShowNewDialog(true)}
      >
        <MaterialIcons
          name="add-circle"
          size={36}
          color="darkslateblue"
        />
      </Pressable>
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
